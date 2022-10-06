import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'

const FooterContainer = styled.div`
  background: #111;
  width: 100%;
  height: 100%;
  bottom: 0;
  color: white;
  padding: 10px;
`
const FooterContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`

const ContentContainer = styled.div`
  color: white;
  width: 130px;s
  margin: 10px;
  padding: 10px;
 
  @media (min-width: ${bp.sm}) {
    width: 150px;
  }

  @media (min-width: ${bp.md}) {

  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
  }
`
export const ContentTitle = styled.h1`
  color: white;
  font-size: 10px;
  padding: 10px 0;
  white-space: nowrap;

  @media (min-width: ${bp.md}) {
    font-size: 18px;
  }
`
export const Text = styled.h1`
  color: white;
  font-size: 8px;
  padding: 10px 0;

  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`

export const CopyrightContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CopyrightTexts = styled.h1`
  color: white;
  font-size: 10px;
  width: 100% 
  padding:10px

`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ContentContainer>
          <ContentTitle>Trending</ContentTitle>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>New Releases</ContentTitle>
          <Text>Lorem Ipsum Lorem</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum Lorem</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>Account</ContentTitle>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </ContentContainer>
        <ContentContainer>
          <ContentTitle>About Us</ContentTitle>
          <Text>Lorem Ipsum Lorem</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum Lorem</Text>
          <Text>Lorem Ipsum</Text>
          <Text>Lorem Ipsum</Text>
        </ContentContainer>
      </FooterContentContainer>
      <CopyrightContainer>
        <CopyrightTexts>
          © Copyright 2022 sneakers . All rights reserved.
        </CopyrightTexts>
      </CopyrightContainer>
    </FooterContainer>
  )
}

export default Footer
