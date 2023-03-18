import type { AppProps } from 'next/app';
import type { DefaultSeoProps } from 'next-seo';
import type { Session } from 'next-auth';
import { useState } from 'react';
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

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

        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services" />

        <ToastContainer position="bottom-right" draggable={false} />
      </SessionProvider>
    </>
  );
}
