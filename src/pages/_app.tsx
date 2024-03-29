import type { AppProps } from 'next/app';
import type { DefaultSeoProps } from 'next-seo';
import type { Session } from 'next-auth';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  dehydrate,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import * as ga from '@/libs/utils/ga';
import GlobalStyle from '@/styles';
import 'react-toastify/dist/ReactToastify.css';

const title = '더와이컨설팅 - The Why Consulting';

const DefaultSEO: DefaultSeoProps = {
  title,
  description:
    '더와이컨설팅은 개인과 조직의 행복한 관계를 꿈꾸는 커뮤니케이션 교육 전문기업입니다.',
  canonical: 'https://thewhy.kr',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://thewhy.kr',
    title,
    siteName: 'The Y Consulting',
    images: [
      {
        url: '/images/main-logo.png',
        width: 285,
        height: 167,
        alt: 'Image',
      },
    ],
  },
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const [queryClient] = useState(() => new QueryClient());
  const dehydratedState = dehydrate(queryClient);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              })
            `,
        }}
      />

      <SessionProvider session={session}>
        <DefaultSeo {...DefaultSEO} />
        <Script
          strategy="beforeInteractive"
          src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"
        />

        <GlobalStyle />

        <QueryClientProvider client={queryClient}>
          <Hydrate state={dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

        <ToastContainer position="bottom-right" draggable={false} />
      </SessionProvider>
    </>
  );
}
