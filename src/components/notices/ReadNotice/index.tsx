import AdminButtons from '@/components/common/AdminButtons';
import Markdown from '@/components/common/Markdown';
import formatDate from '@/libs/utils/formatDate';
import { Container, DateBox, Layout } from './styles';
import useReadNotice from './useReadNotice';

export default function ReadNotice() {
  const noticeHooks = useReadNotice();

  return noticeHooks.notice ? (
    <Container>
      <AdminButtons
        modal={noticeHooks.removeModal}
        onRemoveClick={noticeHooks.onRemoveNoticeClick}
        onConfirm={noticeHooks.onConfirm}
        onCancel={noticeHooks.onCancel}
        onUpdate={noticeHooks.onUpdateNotice}
      />

      <Layout>
        <DateBox>
          <h4>
            {`${formatDate(noticeHooks.notice.createdAt.toString())} 작성`}
          </h4>
        </DateBox>
      </Layout>

      <Layout>
        <Markdown markdown={noticeHooks.notice.body} />
      </Layout>
    </Container>
  ) : null;
}
