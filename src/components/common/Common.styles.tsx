import styled from 'styled-components'
import NikeHeader from '../../assets/nike-header.jpg'

export const Container = styled.div`
width: 100vw;
padding 80px 0 150px;
height: 100%;
`

export const Header = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${NikeHeader});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
