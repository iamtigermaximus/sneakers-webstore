import { useState, useEffect } from 'react'
import { Container, Header } from '../../components/common/Common.styles'
import { useParams } from 'react-router'
import axios from 'axios'
import { Button } from '../../components/product-card/ProductCard.styles'
import {
  Description,
  DetailsContainer,
  Name,
  Price,
  SingleProductContainer,
  Image,
} from './ProductDetails.styles'

type Sneaker = {
  id: string
  name: string
  shoeImage: string
  price: number
  description: string
}

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
  return (
    <Container>
      <Header />
      <div>Product Details</div>
      <div>
        {sneaker && (
          <>
            <SingleProductContainer key={sneaker.id}>
              <Image src={sneaker.shoeImage} alt='shoes image' />
              <DetailsContainer>
                <Name>{sneaker.name}</Name>
                <Price> € {sneaker.price}</Price>
                <Description>{sneaker.description}</Description>
                <Button>ADD TO CART</Button>
              </DetailsContainer>
            </SingleProductContainer>
          </>
        )}
      </div>
    </Container>
  )
}

export default ProductDetails
