import useMobile from '@/libs/hooks/useMobile';
import Image from 'next/image';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { Container, ImageBox, Layout, Title } from './styles';

export default function Contents() {
  const isSmall = useMobile();

  return (
    <Container>
      <Layout className="text">
        <Title>Why The Y</Title>

        {isSmall ? <Mobile /> : <Desktop />}
      </Layout>

      <ImageBox>
        <Image
          className="image"
          src="/images/about/about01.png"
          alt="더와이컨설팅"
          width={445}
          height={631}
          priority
        />
      </ImageBox>
    </Container>
  );
}
