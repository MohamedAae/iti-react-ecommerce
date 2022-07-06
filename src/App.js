import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Account from "./components/Account";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="category">
          <Route path=":slug" element={<Category />}></Route>
        </Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="account" element={<Account />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
