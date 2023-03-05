import LinkItem from './LinkItem';
import { LinkCardsListContainer } from './styles';

interface Props {
  links: MainLinkType[];
}

export default function LinkCardsList({ links }: Props) {
  return (
    <LinkCardsListContainer>
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </LinkCardsListContainer>
  );
}
