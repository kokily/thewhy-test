import { Container, Contents, Preface } from './styles';
import OutlineItem from '../common/OutlineItem';
import {
  First,
  Second,
  Third,
  Forth,
  Fifth,
  Sixth,
  Seventh,
  Eighth,
} from './privacyData';

export default function Privacy() {
  return (
    <Container>
      <Preface>
        더와이컨설팅은 이용자의 &apos;동의를 기반으로 개인정보를 수집·이용 및
        제공하고 있으며, 이용자의 권리(개인정보 자기결정권)를 적극적으로
        보장&apos;하며, 대한민국의 개인정보보호 규정 및 가이드라인을 준수하고
        있습니다.
        <small>
          본 개인정보처리방침은 더와이컨설팅 홈페이지 내 &apos;교육문의&apos;
          서비스 이용을 하고자 하는 이용자(이하 &apos;이용자&apos;)에
          적용됩니다.
        </small>
      </Preface>

      <Contents>
        <OutlineItem body={First} />
        <OutlineItem body={Second} />
        <OutlineItem body={Third} />
        <OutlineItem body={Forth} />
        <OutlineItem body={Fifth} />
        <OutlineItem body={Sixth} />
        <OutlineItem body={Seventh} />
        <OutlineItem body={Eighth} />
      </Contents>
    </Container>
  );
}
