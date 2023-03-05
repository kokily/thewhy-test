import useHome from '../useHome';
import LinkCardsList from './LinksList';
import {
  HomeLinksContainer,
  HomeLinksLead,
  HomeLinksTitle,
  HomeLinksTopContent,
} from './styles';

export default function HomeLinks() {
  const { links } = useHome();

  return (
    <HomeLinksContainer>
      <HomeLinksTopContent>
        <HomeLinksTitle>교육 프로그램</HomeLinksTitle>
        <HomeLinksLead>
          더와이 컨설팅에서 진행하는 맞춤화된 교육 프로그램입니다.
        </HomeLinksLead>
      </HomeLinksTopContent>

      <LinkCardsList links={links} />
    </HomeLinksContainer>
  );
}
