import FooterCopyrightItem from './CopyrightItem';
import {
  CopyrightContainer,
  CopyrightContents,
  CopyrightLayout,
} from './styles';

export default function Copyright() {
  return (
    <CopyrightContainer>
      <CopyrightLayout>
        <CopyrightContents>
          <FooterCopyrightItem />
        </CopyrightContents>
      </CopyrightLayout>
    </CopyrightContainer>
  );
}
