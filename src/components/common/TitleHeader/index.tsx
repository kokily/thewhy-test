import { Container, Content, Title } from './styles';

interface Props {
  title: string;
}

export default function TitleHeader({ title }: Props) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}
