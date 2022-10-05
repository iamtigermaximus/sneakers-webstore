import {
  AdsContainer,
  AdsImagesContainer,
  AdsTextsContainer,
  ContentContainer,
  Texts,
  ButtonContainer,
  Button,
  ImageContainer,
  Image,
} from './AdsSection.styles'
import AdImage1 from '../../assets/adssection.jpg'
import AdImage2 from '../../assets/adssection2.jpg'
import AdImage3 from '../../assets/adssection3.jpg'

const AdsSection = () => {
  return (
    <AdsContainer>
      <AdsImagesContainer>
        <AdsTextsContainer>
          <ContentContainer>
            <Texts>
              CHOOSE YOUR STYLE
              <ButtonContainer>
                <Button>Check collections</Button>
              </ButtonContainer>
            </Texts>
          </ContentContainer>
        </AdsTextsContainer>
        <ImageContainer>
          <Image src={AdImage1} />
        </ImageContainer>
        <ImageContainer>
          <Image src={AdImage2} />
        </ImageContainer>
        <ImageContainer>
          <Image src={AdImage3} />
        </ImageContainer>
      </AdsImagesContainer>
    </AdsContainer>
  )
}

export default AdsSection
