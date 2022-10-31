import {
  CardContainer,
  Image,
  Name,
  Price,
  Button,
  ProductDetailsLink,
} from './ProductCard.styles'
import { useCart } from 'react-use-cart'

type ProductType = {
  id: string
  name: string
  shoeImage: string
  price: number
}

const ProductCard: React.FC<ProductType> = (props: any) => {
  const { addItem } = useCart()

  return (
    <CardContainer key={props.id}>
      <ProductDetailsLink to={`/product-details/${props.id}`}>
        <Image src={props.shoeImage} />
        <Name>{props.name}</Name>
        <Price> € {props.price}</Price>
      </ProductDetailsLink>
      <Button onClick={() => addItem(props.item)}>ADD TO CART</Button>
    </CardContainer>
  )
}

export default ProductCard
