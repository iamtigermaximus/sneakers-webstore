import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
//import colors from '../../utils/colors'

export const NewArrivalsContainer = styled.div`
  width: 100%;
  padding: 60px 0;
  background: black;
`

export const ArrivalsImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`
export const ImageContainer = styled.div`
  width: 250px;
  height: 300px;
  margin: 10px 20px;

  @media (min-width: ${bp.sm}) {
    width: 400px;
    height: 450px;
  }

  @media (min-width: ${bp.md}) {
    width: 150px;
    height: 200px;
  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
    height: 300px;
  }
`
export const ArrivalTextsContainer = styled.div`
  width: 250px;
  padding: 10px;
  background: #32de84;
  font-size: 13px;
  order: 1;

  @media (min-width: ${bp.sm}) {
    width: 400px;
  }

  @media (min-width: ${bp.md}) {
    width: 150px;
    height: 200px;
    display: none;
  }
  @media (min-width: ${bp.lg}) {
    width: 250px;
    height: 300px;
    display: block;
    order: 4;
  }
  @media (min-width: ${bp.xxl}) {
    width: 500px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`
export const Texts = styled.h1`
  color: #303030;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  flex-direction: column;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`
export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 10px;
`

export const Button = styled.button`
  width: 200px;
  padding: 15px;
  border-radius: 5px;

  &:hover {
    background: darkGray;
    cursor: pointer;
  }
`
