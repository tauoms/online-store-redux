import { useAppSelector } from "../hooks/hooks";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);
  console.log("cartItems", cartItems);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
