import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { addToCart, fetchProducts } from "../store/productSlice";
import Product from "./Product";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Container fluid className="p-5">
        <h1>Products List</h1>
        <Row className="g-4">
          {" "}
          {/* g-4 adds spacing between cards */}
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={2} key={product.id}>
              <Card className="h-100 d-flex flex-column">
                <Card.Body>
                  <Product product={product} />
                </Card.Body>
                <Card.Footer className="mt-auto text-center">
                  {" "}
                  {/* Pushes the footer to the bottom */}
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default List;
