import Image from 'next/image';
import Contents from './Contents';
import { Bottom, Container, Title } from './styles';

export default function About() {
  return (
    <Container>
      <Image
        src="/images/about/about.png"
        alt="더와이컨설팅 소개"
        width={1110}
        height={297}
        priority
      />

      <Contents />

      <Bottom>
        <Title>더와이컨설팅이 가는 길</Title>
        <Image
          src="/images/about/about02.png"
          alt="더와이컨설팅이 가는 길"
          width={1110}
          height={1049}
          priority
        />
      </Bottom>
    </Container>
  );
}
