import styled from 'styled-components'
import Hero from '../components/hero/Hero'
import AdsSection from '../components/ads-section/AdsSection'
import NewArrivals from '../components/new-arrivals/NewArrivals'
import Newsletter from '../components/newsletter/Newsletter'

const Container = styled.div`
  width: 100vw;
  padding-top: 100px;
`

const Home = () => {
  return (
    <Container>
      <Hero />
      <AdsSection />
      <NewArrivals />
      <Newsletter />
    </Container>
  )
}

export default Home
