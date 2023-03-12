import { BodyContainer, BodyPane } from './styles';

interface Props {
  body: string;
}

export default function QuestionBody({ body }: Props) {
  return (
    <BodyContainer>
      <BodyPane>{body}</BodyPane>
    </BodyContainer>
  );
}
