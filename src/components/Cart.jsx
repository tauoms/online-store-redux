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
    <Container fluid className="p-5">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price} €
            </li>
          ))}
        </ul>
      )}
      <h4>Total: {cartSum.toFixed(2)} €</h4>
      <Button onClick={() => dispatch(clearCart())}>Empty Cart</Button>
    </Container>
  );
};

export default Cart;
