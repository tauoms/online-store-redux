import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "../store/productSlice";

const List = () => {
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => (
        <Container key={product.id}>Products will be here</Container>
      ))}
    </div>
  );
};

export default List;
