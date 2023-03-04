import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import useMobile from '@/libs/hooks/useMobile';
import useNavigation from './useNavigation';
import NavList from './NavList';
import {
  NavigationContainer,
  NavigationMobile,
  NavigationMobileWrapper,
} from './styles';

export default function Navigation() {
  const isSmall = useMobile();
  const { toggle, onToggle } = useNavigation();

  return (
    <NavigationContainer>
      {isSmall ? (
        <NavigationMobileWrapper>
          <NavigationMobile>
            {toggle ? (
              <IoMdClose className="on" size={30} onClick={onToggle} />
            ) : (
              <GiHamburgerMenu className="off" size={30} onClick={onToggle} />
            )}
          </NavigationMobile>

          <NavList toggle={toggle} isSmall={isSmall} />
        </NavigationMobileWrapper>
      ) : (
        <NavList isSmall={isSmall} />
      )}
    </NavigationContainer>
  );
}
