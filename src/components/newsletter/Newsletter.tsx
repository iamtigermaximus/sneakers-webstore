import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'

const NewsletterSectionContainer = styled.div`
  width: 100%;
  padding: 40px 10px;
  background: white;

  @media (min-width: ${bp.sm}) {
    padding: 60px;
  }
`
const NewsletterContent = styled.div`
  width: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${bp.sm}) {
    flex-direction: row;
  }
`
const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 10px 0;
`
const RightContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 10px 0;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${bp.lg}) {
    padding: 0 30px;
    width: 500px;
  }
`
const Input = styled.input`
  padding: 10px;
`
const Label = styled.h4``

const Newsletter = () => {
  return (
    <NewsletterSectionContainer>
      <NewsletterContent>
        <LeftContent>
          <h4>Subscribe to the newsletter and redeem the discount code !</h4>
          <br />
          <h5>
            Order now and get -10% off one of your orders. As a newsletter
            subscriber, you will always be among the first to hear about
            benefits, offers and events for sellers and buyers.
          </h5>
        </LeftContent>
        <RightContent>
          <InputContainer>
            <Label>E-mail</Label>
            <Input />
          </InputContainer>
        </RightContent>
      </NewsletterContent>
    </NewsletterSectionContainer>
  )
}

export default Newsletter
