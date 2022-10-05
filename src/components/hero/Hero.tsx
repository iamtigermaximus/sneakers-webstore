import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import {
  HeroContainer,
  ImageContainer,
  SliderTitle,
  BuyButton,
  SliderPrice,
  ImageBackground,
  Image,
} from './Hero.styles'
import Airforce from '../../assets/air.png'
import Blazer from '../../assets/blazer.png'
import Crater from '../../assets/crater.png'
import Hippie from '../../assets/hippie.png'
import Jordan from '../../assets/jordan.png'

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
