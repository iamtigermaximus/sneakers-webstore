import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { breakpoints as bp } from '../utils/layout'
import { Circles } from 'react-loader-spinner'
import { Container, Header } from '../components/common/Common.styles'
import ProductCard from '../components/product-card/ProductCard'

type SneakerType = {
  _id: string
  name: string
  shoeImage: string
  price: number
}

export const ProductsListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: 20px;

  @media (min-width: ${bp.sm}) {
    width: 200px;
    height: 250px;
  }

  @media (min-width: ${bp.lg}) {
    width: 250px;
    height: 350px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Name = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  @media (min-width: ${bp.sm}) {
    font-size: 10px;
  }

  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`
export const Price = styled.h1`
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  @media (min-width: ${bp.sm}) {
    font-size: 10px;
  }
  @media (min-width: ${bp.md}) {
    font-size: 13px;
  }
`

export const LoaderContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  border: 1px solid gray;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  background: white;

  &:hover {
    background: lightGreen;
  }
`

const Products = () => {
  const [sneakers, setSneakers] = useState<SneakerType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        'https://sneakers-webstore-backend-170cw4kuz-iamtigermaximus.vercel.app/'
      )
      .then((response) => setSneakers(response.data.items))
    setIsLoading(false)
  }, [])
  console.log(sneakers)
  return (
    <Container>
      <Header>HEADER</Header>
      {isLoading ? (
        <LoaderContainer>
          <Circles
            height='80'
            width='80'
            color='#4fa94d'
            ariaLabel='circles-loading'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
          />
        </LoaderContainer>
      ) : (
        <ProductsListContainer>
          {sneakers.map((sneaker) => {
            return (
              <ProductCard
                key={sneaker._id}
                id={sneaker._id}
                shoeImage={sneaker.shoeImage}
                name={sneaker.name}
                price={sneaker.price}
              />
            )
          })}
        </ProductsListContainer>
      )}
    </Container>
  )
}

export default Products
