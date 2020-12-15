import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/Menu";
import ProductList from "./components/pages/ProductList";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Menu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
