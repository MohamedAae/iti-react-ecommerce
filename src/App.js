import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import ScrollToTop from "./components/Wrappers/ScrollToTop";
import Home from "./components/Home";
import Category from "./components/Category";
import Product from "./components/Product";
import Account from "./components/Account";

import Header from "./components/Header/Header";
import ThumbsSlider from "./components/ThumbsSlider/ThumbsSlider";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App(props) {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="category">
            <Route path=":slug" element={<Category />} />
          </Route>
          <Route path="product">
            <Route path=":productSlug" element={<Product />} />
          </Route>
          <Route path="account" element={<Account />}></Route>
        </Routes>
        <ThumbsSlider history={true} slides={props.history} />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    history: state.history.history,
  };
};

export default connect(mapStateToProps)(App);
