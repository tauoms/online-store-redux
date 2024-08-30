import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      <Container fluid>
        <Row className="align-content-md-center">
          {products.map((product) => (
            <Col xs={6} sm={5} md={4} key={product.id}>
              <Product key={product.id} product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default List;
