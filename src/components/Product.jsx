import { Container, Image } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} fluid />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating.rate} / 5</p>
    </Container>
  );
};

export default Product;
