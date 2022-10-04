import styled from 'styled-components'
import Hero from '../components/hero/Hero'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`

const Home = () => {
  return (
    <Container>
      <Hero />
    </Container>
  )
}

export default Home
