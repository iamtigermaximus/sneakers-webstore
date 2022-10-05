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
import { Link } from 'react-router-dom'

const AdsSection = () => {
  return (
    <AdsContainer>
      <AdsImagesContainer>
        <AdsTextsContainer>
          <ContentContainer>
            <Texts>
              CHOOSE YOUR STYLE
              <ButtonContainer>
                <Link to='/products'>
                  <Button>Check collections</Button>
                </Link>
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
