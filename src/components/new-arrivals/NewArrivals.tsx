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
import { Link } from 'react-router-dom'

const NewArrivals = () => {
  return (
    <NewArrivalsContainer>
      <ArrivalsImagesContainer>
        <ArrivalTextsContainer>
          <ContentContainer>
            <Texts>
              <h3>NEW ARRIVALS</h3>WINTER COLLECTION
              <ButtonContainer>
                <Link to='/new-arrivals'>
                  <Button>Check collections</Button>
                </Link>
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
