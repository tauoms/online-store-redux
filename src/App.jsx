import { Button } from "react-bootstrap";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const products = useAppSelector((state) => state.products.products);
  // console.log("products", products);

  return (
    <>
      <div>App will be here</div>
      <Button style={{ width: "200px" }}>Click me</Button>
      <Button variant="secondary" size="lg">
        Click me
      </Button>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.description}</div>
        </div>
      ))}
    </>
  );
}

export default App;
