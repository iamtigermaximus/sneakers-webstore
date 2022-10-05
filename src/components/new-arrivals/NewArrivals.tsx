import Winter1 from '../../assets/wintercollection.jpg'
import Winter2 from '../../assets/wintecollection2.jpg'
import {
  NewArrivalsContainer,
  ArrivalsImagesContainer,
  ArrivalTextsContainer,
  ContentContainer,
  Texts,
  ButtonContainer,
  Button,
  ImageContainer,
  Image,
} from './NewArrivals.styles'

const NewArrivals = () => {
  return (
    <NewArrivalsContainer>
      <ArrivalsImagesContainer>
        <ArrivalTextsContainer>
          <ContentContainer>
            <Texts>
              <h1>NEW ARRIVALS</h1>WINTER COLLECTION
              <ButtonContainer>
                <Button>Check collections</Button>
              </ButtonContainer>
            </Texts>
          </ContentContainer>
        </ArrivalTextsContainer>
        <ImageContainer>
          <Image src={Winter2} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Winter1} />
        </ImageContainer>
        <ImageContainer>
          <Image src={Winter2} />
        </ImageContainer>
      </ArrivalsImagesContainer>
    </NewArrivalsContainer>
  )
}

export default NewArrivals
