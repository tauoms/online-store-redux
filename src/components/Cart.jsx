import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { clearCart } from "../store/productSlice";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  const dispatch = useAppDispatch();

  // Group items by ID and count quantities
  const groupedItems = cartItems.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  // Calculate total cost
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
          {Object.values(groupedItems).map((item) => (
            <li key={item.id}>
              {item.title} - {item.price} € x {item.quantity}
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
