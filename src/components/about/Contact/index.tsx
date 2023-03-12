import Image from 'next/image';
import Info from './Info';
import SendMail from './SendMail';
import { Container, Contents } from './styles';
import useContact from './useContact';

export default function Contact() {
  const mailHooks = useContact();

  return (
    <Container>
      <Image
        src="/images/about/about.png"
        alt="Contact us"
        width={1110}
        height={297}
        priority
      />

      <Contents>
        <SendMail
          name={mailHooks.name}
          email={mailHooks.email}
          subject={mailHooks.subject}
          body={mailHooks.body}
          onChange={mailHooks.onChange}
          onClear={mailHooks.onClear}
          onSubmit={mailHooks.onSubmit}
        />
        <Info />
      </Contents>
    </Container>
  );
}
