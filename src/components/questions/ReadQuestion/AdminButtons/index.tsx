import Modal from '@/components/common/Modal';
import { Button, Container } from './styles';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onRemoveReplyClick: () => void;
  onToggle: () => void;
  reply: boolean;
}

export default function AdminButtons({ ...rest }: Props) {
  return (
    <>
      <Container>
        <Button className="remove" onClick={rest.onRemoveClick}>
          본문 삭제
        </Button>

        {rest.reply ? (
          <Button className="update" onClick={rest.onRemoveReplyClick}>
            답글삭제
          </Button>
        ) : (
          <Button className="update" onClick={rest.onToggle}>
            답글달기
          </Button>
        )}
      </Container>

      <Modal
        visible={rest.modal}
        onConfirm={rest.onConfirm}
        onCancel={rest.onCancel}
      />
    </>
  );
}
