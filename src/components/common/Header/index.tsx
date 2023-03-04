import HeaderTop from './HeaderTop';
import Navigation from './Navigation';
import { HeaderContainer, HeaderLayout, NavContainer } from './styles';
import useHeaderScroll from './useHeaderScroll';

export default function Header() {
  const headerHooks = useHeaderScroll();

  return (
    <HeaderContainer>
      <HeaderLayout move={headerHooks.move}>
        <HeaderTop />
      </HeaderLayout>

      <NavContainer>
        <Navigation />
      </NavContainer>
    </HeaderContainer>
  );
}
