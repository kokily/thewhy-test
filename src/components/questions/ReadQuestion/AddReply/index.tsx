import type { ChangeEvent, MouseEvent } from 'react';
import Button from '@/components/common/Button';
import { Box, ButtonBox, Container } from './styles';

interface Props {
  reply: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAddReply: (e: MouseEvent) => void;
}

export default function AddReply({ reply, onChange, onAddReply }: Props) {
  return (
    <Container>
      <Box>
        <h4>답글 달기</h4>
        <textarea rows={8} name="reply" value={reply} onChange={onChange} />

        <ButtonBox>
          <Button submit onClick={onAddReply}>
            답글 저장
          </Button>
        </ButtonBox>
      </Box>
    </Container>
  );
}
