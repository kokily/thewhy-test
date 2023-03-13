import { Body, Container, Title } from './styles';

interface Props {
  title: string;
  body: string;
}

export default function Header({ title, body }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
}
