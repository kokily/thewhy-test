import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import useMedia from '@/libs/hooks/useMedia';
import {
  EtcLinkList,
  FooterCopyrightEtcLink,
  FooterCopyrightItemContainer,
} from './styles';

export default function FooterCopyrightItem() {
  const isSmall = useMedia('(max-width: 480px)');

  const Logo = () => (
    <Link href="/">
      <Image src="/images/logo2.png" width={66} height={32} alt="Logo" />
    </Link>
  );

  const Copy = () =>
    isSmall ? (
      <div>
        <p>Copyright(c) 2021. All Rightreserved.</p>
        <p>
          <strong>사업자등록번호</strong> 640-88-02162
        </p>
        <p>
          <strong>통신판매업신고</strong> 제2021-다산-0477
        </p>
      </div>
    ) : (
      <div>
        Copyright(c) 2021. All Right Reserved. <strong>사업자 등록번호</strong>{' '}
        640-88-02162 <strong>통신판매업신고</strong> 제2021-다산-0477
      </div>
    );

  const Links = () => (
    <FooterCopyrightEtcLink>
      <EtcLinkList>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/faq">FAQ's</Link>
        </li>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/term">이용약관</Link>
        </li>
        <li>
          <MdKeyboardArrowRight />
          <Link href="/privacy">개인정보처리방침</Link>
        </li>
      </EtcLinkList>
    </FooterCopyrightEtcLink>
  );

  return (
    <>
      <FooterCopyrightItemContainer divide="logo">
        <Logo />
      </FooterCopyrightItemContainer>
      <FooterCopyrightItemContainer divide="copy">
        <Copy />
      </FooterCopyrightItemContainer>
      <FooterCopyrightItemContainer divide="link">
        <Links />
      </FooterCopyrightItemContainer>
    </>
  );
}
