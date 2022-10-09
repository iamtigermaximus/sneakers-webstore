import {
  Input,
  InputContainer,
  Label,
  LeftContent,
  NewsletterContent,
  NewsletterSectionContainer,
  RightContent,
} from './Newsletter.styles'

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
