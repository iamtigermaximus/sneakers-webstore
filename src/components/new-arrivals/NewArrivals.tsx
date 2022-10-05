import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
//import colors from '../../utils/colors'
import Winter1 from '../../assets/wintercollection.jpg'
import Winter2 from '../../assets/wintecollection2.jpg'

const NewArrivalsContainer = styled.div`
  width: 100%;
  padding: 30px 0;
  background: black;
`

const ArrivalsImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`
const ImageContainer = styled.div`
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
const ArrivalTextsContainer = styled.div`
  width: 250px;
  padding: 10px;
  background: #32de84;
  font-size: 13px;

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
  }
  @media (min-width: ${bp.xxl}) {
    width: 500px;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`
const Texts = styled.h1`
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
const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 10px;
`

const Button = styled.button`
  width: 200px;
  padding: 15px;
  border-radius: 5px;
`

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
