import LeftContent from './LeftContent';
import RightContent from './RightContent';
import {
  FooterContentsContainer,
  FooterContentsContents,
  FooterContentsRibbon,
  FooterContentsRibbonText,
} from './styles';

export default function FooterContents() {
  return (
    <FooterContentsContainer>
      <FooterContentsRibbon>
        <FooterContentsRibbonText>Get in Touch!</FooterContentsRibbonText>
      </FooterContentsRibbon>

      <FooterContentsContents>
        <LeftContent />
        <RightContent />
      </FooterContentsContents>
    </FooterContentsContainer>
  );
}
