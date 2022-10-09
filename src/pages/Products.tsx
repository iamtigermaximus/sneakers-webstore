import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { breakpoints as bp } from '../utils/layout'
import { Circles } from 'react-loader-spinner'
import NikeHeader from '../assets/nike-header.jpg'

export const ProductsContainer = styled.div`
  width: 100vw;
   padding 80px 0 150px;
  height: 100%;
`
export const Header = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${NikeHeader});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ProductsListContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
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
`

const Products = () => {
  const [sneakers, setSneakers] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
    <ProductsContainer>
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
          {sneakers.map((sneaker: any) => {
            return (
              <div>
                <ImageContainer>
                  <Image src={sneaker.shoeImage} />
                  <Name>{sneaker.name}</Name>
                  <Price> € {sneaker.price}</Price>
                  <Button>BUY</Button>
                </ImageContainer>
              </div>
            )
          })}
        </ProductsListContainer>
      )}
    </ProductsContainer>
  )
}

export default Products
