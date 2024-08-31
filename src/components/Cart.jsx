import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { clearCart } from "../store/productSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  const dispatch = useAppDispatch();
  console.log("cartItems", cartItems);
  const cartSum = cartItems.reduce((accumulator, current) => {
    return accumulator + current.price;
  }, 0);

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price} €
          </li>
        ))}
      </ul>
      <h2>Total: {cartSum.toFixed(2)} €</h2>
      <Button onClick={() => dispatch(clearCart())}>Empty Cart</Button>
    </Container>
  );
};

export default Cart;
