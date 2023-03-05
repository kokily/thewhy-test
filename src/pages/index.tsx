import type { NextPage } from 'next';
import PageTemplate from '@/components/common/PageTemplate';
import HomeImages from '@/components/home/HomeImages';
import HomeLinks from '@/components/home/HomeLinks';

const IndexPage: NextPage = () => {
  return (
    <PageTemplate>
      <HomeImages />
      <HomeLinks />
    </PageTemplate>
  );
};

export default IndexPage;
