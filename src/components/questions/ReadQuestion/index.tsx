import Modal from '@/components/common/Modal';
import AddReply from './AddReply';
import AdminButtons from './AdminButtons';
import QuestionBody from './QuestionBody';
import QuestionInfo from './QuestionInfo';
import ReadReply from './ReadReply';
import { Button, Container, FlexBox } from './styles';
import useReadQuestion from './useReadQuestion';

export default function ReadQuestion() {
  const questionHooks = useReadQuestion();

  return questionHooks.question ? (
    <Container>
      {questionHooks.isAdmin && (
        <FlexBox>
          <AdminButtons
            modal={questionHooks.questionRemoveModal}
            onRemoveClick={questionHooks.onQuestionRemoveModalClick}
            onConfirm={questionHooks.onQuestionRemoveConfirm}
            onCancel={questionHooks.onQuestionRemoveCancel}
            onRemoveReplyClick={questionHooks.onReplyRemoveModalClick}
            onToggle={questionHooks.onToggle}
            reply={questionHooks.question.reply !== null ? true : false}
          />
        </FlexBox>
      )}

      <FlexBox>
        <QuestionInfo question={questionHooks.question} />
      </FlexBox>

      <FlexBox>
        <QuestionBody body={questionHooks.question.body} />
      </FlexBox>

      <FlexBox>
        <Button onClick={questionHooks.onUpdateQuestion}>
          문의 글 수정(password)
        </Button>
      </FlexBox>

      {questionHooks.isAdmin && questionHooks.toggle && (
        <FlexBox>
          <AddReply
            reply={questionHooks.reply}
            onChange={questionHooks.onChangeReply}
            onAddReply={questionHooks.onAddReply}
          />
        </FlexBox>
      )}
      {questionHooks.question.reply && (
        <ReadReply body={questionHooks.question.reply} />
      )}

      <Modal
        visible={questionHooks.replyRemoveModal}
        onConfirm={questionHooks.onReplyRemoveConfirm}
        onCancel={questionHooks.onReplyRemoveCancel}
      />
    </Container>
  ) : null;
}
