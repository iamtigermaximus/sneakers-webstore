import styled from 'styled-components'
import NikeHeader from '../../assets/nike-header.jpg'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
width: 100vw;
padding 40px 0 150px;
height: 100%;

@media (min-width: ${bp.md}) {
  padding :80px 0 150px;

}
@media (min-width: ${bp.lg}) {
  padding :85px 0 150px;

}

`

export const Header = styled.div`
  width: 100%;
  margin-top: 60px;
  height: 200px;
  background-image: url(${NikeHeader});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const BackContainer = styled.div`
  margin: 30px;
  padding: 10px;
`

export const BackButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`
