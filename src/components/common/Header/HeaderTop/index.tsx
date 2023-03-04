import Image from 'next/image';
import Link from 'next/link';
import { HeaderTopContainer } from './styles';
import HeaderTopLeft from './TopLeft';
import HeaderTopRight from './TopRight';

export default function HeaderTop() {
  return (
    <HeaderTopContainer>
      <HeaderTopLeft />

      <Link href="/">
        <Image
          src="/svg/Logo.svg"
          alt="logo"
          width={120}
          height={96}
          priority
        />
      </Link>

      <HeaderTopRight />
    </HeaderTopContainer>
  );
}
