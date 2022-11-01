import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const SingleProductContainer = styled.div`
  padding: 20px;

  @media (min-width: ${bp.md}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: ${bp.md}) {
    width: 50%;
  }
`

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.lightGray};

  @media (min-width: ${bp.md}) {
    width: 300px;
    margin: 10px;
  }
`
export const Name = styled.h1`
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`
export const Price = styled.h1`
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`
export const Description = styled.p`
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (min-width: ${bp.sm}) {
    font-size: 13px;
  }
  @media (min-width: ${bp.md}) {
    font-size: 16px;
  }
`
