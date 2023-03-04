import { NavMenu } from '@/libs/menu';
import NavItem from './NavItem';
import { NavsListContainer, NavsListList } from './styles';

interface Props {
  toggle?: boolean;
  isSmall?: boolean;
}

export default function NavList({ toggle, isSmall }: Props) {
  return (
    <NavsListContainer toggle={toggle}>
      <NavsListList className="menu">
        {NavMenu.map((menu) => (
          <NavItem key={menu.id} menu={menu} isSmall={isSmall} />
        ))}
      </NavsListList>
    </NavsListContainer>
  );
}
