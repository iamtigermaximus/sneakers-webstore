import { useState, useEffect } from 'react'
import { Container, Header } from '../components/common/Common.styles'
import { useParams } from 'react-router'
import axios from 'axios'
import { Button, CardContainer, Name, Price } from './Products'
import styled from 'styled-components'

type Sneaker = {
  id: string
  name: string
  shoeImage: string
  price: number
  description: string
}

export const Image = styled.img`
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ProductDetails = () => {
  const params = useParams()
  const [sneaker, setSneaker] = useState<Sneaker>()

  useEffect(() => {
    axios
      .get(
        `https://sneakers-webstore-backend-170cw4kuz-iamtigermaximus.vercel.app/getOne/${params.id}`
      )
      .then((response) => setSneaker(response.data))
      .catch((error) => console.log(error))
  }, [params.id])
  console.log('product details!!!!', params)
  return (
    <Container>
      <Header>Product Details</Header>
      <div>
        {sneaker && (
          <>
            <CardContainer key={sneaker.id}>
              <Image src={sneaker.shoeImage} />
              <Name>{sneaker.name}</Name>
              <Price> € {sneaker.price}</Price>
              <p>{sneaker.description}</p>

              <Button>BUY</Button>
            </CardContainer>
          </>
        )}
      </div>
    </Container>
  )
}

export default ProductDetails
