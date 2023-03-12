import { Container, Pre } from './styles';

interface Props {
  body: string;
}

export default function ReadReply({ body }: Props) {
  return (
    <Container>
      <h4>답 글</h4>
      <Pre>{body}</Pre>
    </Container>
  );
}
