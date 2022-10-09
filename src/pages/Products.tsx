import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { breakpoints as bp } from '../utils/layout'

export const ProductsContainer = styled.div`
  width: 100vw;
  padding-top: 100px;
  height: 100%;
`

export const Test = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
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
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Name = styled.h1`
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
`
const Products = () => {
  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://sneakers-webstore-backend-170cw4kuz-iamtigermaximus.vercel.app/'
      )
      .then((response) => setSneakers(response.data.items))
  }, [])
  console.log(sneakers)
  return (
    <ProductsContainer>
      <Test>
        {sneakers.map((sneaker: any) => {
          return (
            <div>
              <ImageContainer>
                <Image src={sneaker.shoeImage} />
              </ImageContainer>
              <Name>{sneaker.name}</Name>
            </div>
          )
        })}
      </Test>
    </ProductsContainer>
  )
}

export default Products
