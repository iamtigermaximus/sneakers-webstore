import {
  CardContainer,
  Image,
  Name,
  Price,
  Button,
  ProductDetailsLink,
} from './ProductCard.styles'

type ProductType = {
  id: string
  name: string
  shoeImage: string
  price: number
}

const ProductCard: React.FC<ProductType> = ({ id, shoeImage, name, price }) => {
  return (
    <ProductDetailsLink to={`/product-details/${id}`}>
      <CardContainer key={id}>
        <Image src={shoeImage} />
        <Name>{name}</Name>
        <Price> € {price}</Price>
        <Button>BUY</Button>
      </CardContainer>
    </ProductDetailsLink>
  )
}

export default ProductCard
