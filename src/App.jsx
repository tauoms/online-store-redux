import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
