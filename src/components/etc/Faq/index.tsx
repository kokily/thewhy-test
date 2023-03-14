import Accordion from './Accordion';
import { Container } from './styles';

export default function Faq() {
  return (
    <Container>
      <h2>
        Frequently Asked <strong>Questions</strong>
      </h2>

      <Accordion title="title1" body="어코디언 1번" />
    </Container>
  );
}
