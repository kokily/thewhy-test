import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  RightContainer,
  RightItem,
  RightLayout,
  RightLead,
  RightLinksBox,
  RightList,
  RightTitle,
} from './styles';

export default function RightContent() {
  return (
    <RightContainer>
      <RightTitle>회사소개</RightTitle>
      <RightLead>
        더와이컨설팅은 행복한 삶을 꿈꾸는 "커뮤니케이션" 전문 교육 컨설팅
        회사입니다.
      </RightLead>
      <RightLead>
        우리가 존재하는 이유는 커뮤니케이션을 통해 개인과 조직의 행복을 돕는
        것입니다.
      </RightLead>
      <RightLead>
        우리의 비전은 대한민국의 직장인들이 모두 행복해 할 때까지,
      </RightLead>
      <RightLead>
        그래서 대한민국을 대표하는 커뮤니케이션 전문가가 되는 것입니다.
      </RightLead>

      <RightLinksBox>
        <RightLayout>
          <RightTitle>주요링크</RightTitle>

          <RightList>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/question">교육문의</Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/education">교육 프로그램</Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/online">온라인 프로그램</Link>
            </RightItem>
            <RightItem>
              <MdKeyboardArrowRight size={17} color="#0088cc" />
              <Link href="/stories">The Y 이야기</Link>
            </RightItem>
          </RightList>
        </RightLayout>
      </RightLinksBox>
    </RightContainer>
  );
}
