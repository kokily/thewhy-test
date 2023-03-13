import Image from 'next/image';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import { Container } from './styles';

interface Props {
  education: EducationType;
}

export default function Service({ education }: Props) {
  return (
    <Container>
      <Image
        src={`/svg/${education.img}`}
        alt={education.title}
        width={1110}
        height={296}
        priority
      />

      <Header title={education.title} body={education.body} />
      <Body list={education.list} />
      <Footer />
    </Container>
  );
}
