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
            <BrandLinkItem>sneakers</BrandLinkItem>
          </BrandContainer>
          <Input placeholder='Search' />
          <LinkItemContainer>
            <LinkItem>Limited Offer!</LinkItem>
          </LinkItemContainer>
        </TopNav>
        <BottomNav>
          <NavbarLinksContainer>
            <NavbarLink>AIRFORCE</NavbarLink>
            <NavbarLink>JORDAN</NavbarLink>
            <NavbarLink>BLAZER</NavbarLink>
            <NavbarLink>CRATER</NavbarLink>
            <NavbarLink>HIPPIE</NavbarLink>
          </NavbarLinksContainer>
        </BottomNav>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
