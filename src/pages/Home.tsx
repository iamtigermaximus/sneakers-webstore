import styled from 'styled-components'
import Hero from '../components/hero/Hero'
import AdsSection from '../components/ads-section/AdsSection'
import NewArrivals from '../components/new-arrivals/NewArrivals'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`

const Home = () => {
  return (
    <Container>
      <Hero />
      <AdsSection />
      <NewArrivals />
    </Container>
  )
}

export default Home
