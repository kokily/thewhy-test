import type { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { PageChildBox, PageContainer, PageLayout } from './styles';

interface Props {
  children: ReactNode;
}

export default function PageTemplate({ children }: Props) {
  return (
    <PageContainer>
      <PageLayout>
        <Header />

        <PageChildBox>{children}</PageChildBox>
      </PageLayout>

      <Footer />
    </PageContainer>
  );
}
