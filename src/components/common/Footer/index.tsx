import FooterContents from './Contents';
import Copyright from './Copyright';
import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContents />
      <Copyright />
    </FooterContainer>
  );
}
