import { Link } from 'react-router-dom'
import {
  NavbarContainer,
  MenuContainer,
  BrandLinkItem,
  LinkItemContainer,
  LinkItem,
  BrandContainer,
  Input,
  NavbarLinksContainer,
  TopNav,
  BottomNav,
  NavbarLink,
} from './Navbar.styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <MenuContainer>
        <TopNav>
          <BrandContainer>
            <Link to='/'>
              <BrandLinkItem>sneakers</BrandLinkItem>
            </Link>
          </BrandContainer>
          <Input placeholder='Search' />
          <LinkItemContainer>
            <Link to='/limited-offer'>
              <LinkItem>Limited Offer!</LinkItem>
            </Link>
          </LinkItemContainer>
        </TopNav>
        <BottomNav>
          <NavbarLinksContainer>
            <Link to='/airforce'>
              <NavbarLink>AIRFORCE</NavbarLink>
            </Link>
            <Link to='/jordan'>
              <NavbarLink>JORDAN</NavbarLink>
            </Link>
            <Link to='/blazer'>
              <NavbarLink>BLAZER</NavbarLink>
            </Link>
            <Link to='/crater'>
              <NavbarLink>CRATER</NavbarLink>
            </Link>
            <Link to='/hippie'>
              <NavbarLink>HIPPIE</NavbarLink>
            </Link>
          </NavbarLinksContainer>
        </BottomNav>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
