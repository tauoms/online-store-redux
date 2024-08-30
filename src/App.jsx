import { Button } from "react-bootstrap";
import { useAppSelector } from "./hooks/hooks";

function App() {
  const products = useAppSelector((state) => state.products.products);

  return (
    <>
      <div>App will be here</div>
      <Button style={{ width: "200px" }}>Click me</Button>
      <Button variant="secondary" size="lg">
        Click me
      </Button>
      {products.map((product) => (
        <>
          <div key={product.id}>{product.id}</div>
          <div key={product.id}>{product.description}</div>
        </>
      ))}
    </>
  );
}

export default App;
