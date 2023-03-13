import Image from 'next/image';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <Image
        className="footer"
        src="/svg/footer.svg"
        alt="커뮤니케이션 교육"
        width={825}
        height={121}
        priority
      />
    </Container>
  );
}
