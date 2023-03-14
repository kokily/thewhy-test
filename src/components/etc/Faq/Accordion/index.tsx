import type { ReactNode } from 'react';
import { Container, Content, Contents, Header, Title } from './styles';
import useAccordion from './useAccordion';

interface Props {
  title: string | ReactNode;
  body: string | ReactNode;
}

export default function Accordion({ title, body }: Props) {
  const accordionHooks = useAccordion({ title, body });

  return (
    <Container>
      <Header onClick={accordionHooks.onToggleAccordion}>
        <Title>
          {title}
          <span>{accordionHooks.buttonText}</span>
        </Title>
      </Header>

      <Contents ref={accordionHooks.parentRef}>
        <Content ref={accordionHooks.childRef}>{body}</Content>
      </Contents>
    </Container>
  );
}
