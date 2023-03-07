import Modal from '../Modal';
import { ButtonsButton, ButtonsContainer } from './styles';

interface Props {
  modal: boolean;
  onRemoveClick: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  onUpdate: () => void;
}

export default function AdminButtons({ ...rest }: Props) {
  return (
    <>
      <ButtonsContainer>
        <ButtonsButton className="remove" onClick={rest.onRemoveClick}>
          삭 제
        </ButtonsButton>

        <ButtonsButton className="update" onClick={rest.onUpdate}>
          수 정
        </ButtonsButton>

        <Modal
          visible={rest.modal}
          onConfirm={rest.onConfirm}
          onCancel={rest.onCancel}
        />
      </ButtonsContainer>
    </>
  );
}
