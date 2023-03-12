import type { NextPage } from 'next';
import AddQuestion from '@/components/questions/AddQuestion';
import TitleHeader from '@/components/common/TitleHeader';
import PageTemplate from '@/components/common/PageTemplate';

const UpdateQuestionPage: NextPage = () => {
  return (
    <PageTemplate>
      <TitleHeader title="문의 글 작성" />
      <AddQuestion />
    </PageTemplate>
  );
};

export default UpdateQuestionPage;
