import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  background: ${colors.matteBlack};
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;

  @media (min-width: ${bp.md}) {
    height: 20vh;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 100%;

  @media (min-width: ${bp.md}) {
    padding: 20px;
    margin: 20px;
  }

  @media (min-width: ${bp.lg}) {
    margin: 0 30px;
  }
`
export const TopNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`
export const BottomNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    padding: 10px 70px;
  }

  @media (min-width: ${bp.lg}) {
    padding: 10px 100px;
  }
`

export const NavbarLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  white-space: wrap;
  color: ${colors.darkGray};

  @media (min-width: ${bp.lg}) {
    margin-bottom: 20px;
  }
`

export const NavbarLink = styled.h1`
  font-size: 10px;

  @media (min-width: ${bp.lg}) {
    font-size: 20px;
  }
`
export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > a {
    text-decoration: none;
  }
`

export const BrandLinkItem = styled.h1`
  color: ${colors.offWhite};
  font-size: 20px;
  letter-spacing: 0.1rem;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`

export const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px ;
 
 > a {
  text-decoration: none;
 }
`
export const LinkItem = styled.h1`
  color: ${colors.darkGray};
  margin: 10px;
  font-size: 13px;
  letter-spacing: 0.1rem;
  border-bottom: 2px solid ${colors.green};
  display: flex;
  align-items: center;

  @media (min-width: ${bp.md}) {
    white-space: nowrap;
    font-size: 16px;
  }
`

export const InputContainer = styled.div`
display: flex;
justify-content: center
align-items:center
margin:20px ;
`
export const Input = styled.input`
  background: ${colors.offWhite};
  width: 200px;
  border-radius: 10px;
  padding: 0 10px;
  margin: 5px;
  display: none;

  @media (min-width: ${bp.sm}) {
    display: block;
  }

  @media (min-width: ${bp.md}) {
    width: 300px;
    margin: 10px;
  }
  @media (min-width: ${bp.lg}) {
    padding: 10px;
  }
`
