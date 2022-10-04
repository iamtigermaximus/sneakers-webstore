import styled from 'styled-components'
//import colors from '../../utils/colors'
import { breakpoints as bp } from '../../utils/layout'

import BG1 from '../../assets/sneakersbg3.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Airforce from '../../assets/air.png'
import Blazer from '../../assets/blazer.png'
import Crater from '../../assets/crater.png'
import Hippie from '../../assets/hippie.png'
import Jordan from '../../assets/jordan.png'

const HeroContainer = styled.div`
  background-image: url(${BG1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 100px;

  @media (min-width: ${bp.lg}) {
    padding: 50px 300px;
  }
`
const SliderTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 60%;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: white;
  z-index: 1;
  margin: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 40px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 50px;
  }
`
const ImageBackground = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  background: #32de84;

  @media (min-width: ${bp.xs}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${bp.md}) {
    width: 500px;
    height: 500px;
  }
`
const Image = styled.img`
  z-index: 1;
`
const BuyButton = styled.button`
  position: absolute;
  top: 50%;
  left: 70%;
  font-size: 10px;
  font-weight: 900;
  color: white;
  border: 1px solid green;
  background-color: black;
  opacity: 0.8;
  z-index: 1;
  cursor: pointer;
  padding: 10px;
  margin: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`
const SliderPrice = styled.div`
  top: 30%;
  left: 10%;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  color: white;
  border: 1px solid green;
  z-index: 1;
  position: absolute;
  padding: 10px;

  @media (min-width: ${bp.md}) {
    font-size: 30px;
  }
`
const Hero = () => {
  return (
    <HeroContainer>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
      >
        <ImageContainer>
          <SliderTitle>AIR FORCE NEW SEASON</SliderTitle>
          <BuyButton>BUY NOW</BuyButton>
          <SliderPrice>€ 150</SliderPrice>
          <ImageBackground>
            <Image src={Airforce} />
          </ImageBackground>
        </ImageContainer>
        <ImageContainer>
          <SliderTitle>BLAZER NEW SEASON</SliderTitle>
          <BuyButton>BUY NOW</BuyButton>
          <SliderPrice>€ 150</SliderPrice>
          <ImageBackground>
            <Image src={Blazer} />
          </ImageBackground>
        </ImageContainer>
        <ImageContainer>
          <SliderTitle>CRATER NEW SEASON</SliderTitle>
          <BuyButton>BUY NOW</BuyButton>
          <SliderPrice>€ 150</SliderPrice>
          <ImageBackground>
            <Image src={Crater} />
          </ImageBackground>
        </ImageContainer>
        <ImageContainer>
          <SliderTitle>HIPPIE NEW SEASON</SliderTitle>
          <BuyButton>BUY NOW</BuyButton>
          <SliderPrice>€ 150</SliderPrice>
          <ImageBackground>
            <Image src={Hippie} />
          </ImageBackground>
        </ImageContainer>
        <ImageContainer>
          <SliderTitle>JORDAN NEW SEASON</SliderTitle>
          <BuyButton>BUY NOW</BuyButton>
          <SliderPrice>€ 150</SliderPrice>
          <ImageBackground>
            <Image src={Jordan} />
          </ImageBackground>
        </ImageContainer>
      </Carousel>
    </HeroContainer>
  )
}

export default Hero
