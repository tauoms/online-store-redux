import { Container, Image } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.image} className="product-image" />
      <strong>{product.title}</strong>
      {/* <p>{product.description}</p> */}
      <p>Price: {product.price} €</p>
      <p>Rating: {product.rating.rate} / 5</p>
    </Container>
  );
};

export default Product;
