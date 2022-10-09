import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: 20px;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 250px;
  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
    height: 350px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Name = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  @media (min-width: ${bp.sm}) {
    font-size: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`
export const Price = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  @media (min-width: ${bp.sm}) {
    font-size: 10px;
  }
  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`

export const LoaderContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  border: 1px solid gray;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  background: white;

  &:hover {
    background: lightGreen;
  }
`
export const ProductDetailsLink = styled(Link)`
  text-decoration: none;
  color: black;
`
