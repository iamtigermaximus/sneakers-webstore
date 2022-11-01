import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'
import {
  Container,
  Header,
  BackContainer,
  BackButton,
} from '../../components/common/Common.styles'
import ProductCard from '../../components/product-card/ProductCard'
import { LoaderContainer, ProductsListContainer } from './Products.styles'

type SneakerType = {
  _id: string
  name: string
  shoeImage: string
  price: number
}

const Products = () => {
  const [sneakers, setSneakers] = useState<SneakerType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

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
      <Header />
      <BackContainer>
        <BackButton onClick={() => navigate('/')}>Home / Shop</BackButton>
      </BackContainer>
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
