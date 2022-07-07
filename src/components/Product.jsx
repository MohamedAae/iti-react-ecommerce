import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { addToCart, removeFromCart } from "../redux/Cart/cart.actions";
import { addToHistory } from "../redux/History/history.actions";
import {
  BadgeCheckIcon,
  CashIcon,
  RefreshIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";

let products = require("../api/products.json"),
  product;

const Product = (props) => {
  useEffect(() => {
    props.addToHistory(product);
  }, []);

  const { productSlug } = useParams(),
    product = getProduct(productSlug),
    inCart = checkIfAdded(props.cartItems, product.id),
    addToCartStyle = inCart
      ? "bg-transparent border border-green-500 text-green-700"
      : "bg-fuchsia-900 hover:bg-fuchsia-700 text-white";

  const [src, setSrc] = useState(product.thumbnail);

  const preview = product.preview;
  return (
    <>
      <div
        className={
          "container mx-auto grid gap-0 mt-5 p-5 bg-white rounded-lg grid-cols-2 font-sans"
        }
      >
        <div
          className={
            "bg-grey-50 text-center flex flex-col items-center col-start-1 col-end-3 md:col-start-auto md:col-end-auto gap-y-4"
          }
        >
          <div
            className={
              "mb-5 w-full h-80 flex flex-col md:flex-row items-start justify-between"
            }
          >
            <div
              className={
                "flex flex-row flex-wrap md:flex-col gap-y-2 gap-x-2 w-full md:w-1/5"
              }
            >
              {preview.map((image) => {
                let imageSrce = image;
                return (
                  <img
                    src={process.env.PUBLIC_URL + imageSrce}
                    className={"p-2 h-20 w-20 border rounded-md cursor-pointer"}
                    onClick={(image) => setSrc(imageSrce)}
                  />
                );
              })}
            </div>
            <img
              src={process.env.PUBLIC_URL + src}
              className={"h-80 w-full md:w-4/5 object-contain mt-4 md:m-0"}
            />
          </div>
          <div
            className={"w-full flex flex-row justify-center items-center mt-10"}
          >
            <div
              className={
                "px-3 w-36 flex flex-col items-center justify-between gap-y-2 border-r border-r-gray-200"
              }
            >
              <CashIcon
                className={"text-bold h-6 text-green-500"}
                aria-hidden="true"
              />
              <p className={"text-sm capitalize"}>Pay on delivery</p>
              <span className={"capitalize text-gray-500 font-light text-sm"}>
                Cash or card
              </span>
            </div>
            <div
              className={
                "px-3 w-36 flex flex-col items-center justify-between gap-y-2 border-r border-r-gray-200"
              }
            >
              <BadgeCheckIcon
                className={"text-bold h-6 text-green-500"}
                aria-hidden="true"
              />
              <p className={"text-md capitalize"}>5 Years warranty</p>
              <span className={"capitalize text-gray-500 font-light text-sm"}>
                Full coverage
              </span>
            </div>
            <div
              className={
                "px-3 w-36 flex flex-col justify-between items-center gap-y-2"
              }
            >
              <RefreshIcon
                className={"text-bold h-6 text-green-500"}
                aria-hidden="true"
              />
              <p className={"text-md capitalize"}>Return for free</p>
              <span className={"capitalize text-gray-500 font-light text-sm"}>
                Up to 30 days
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            "flex flex-col gap-y-5 col-start-1 col-end-3 md:col-start-auto md:col-end-auto"
          }
        >
          <span>{product.brand}</span>
          <h1 className={"text-2xl font-light"}>{product.name}</h1>
          <p className={"text-gray-400 text-sm"}>{product.description}</p>
          <div>
            <h1 className={"text-3xl font-black inline-block mr-1"}>
              {product.price}
            </h1>
            <span>LE</span>
          </div>
          {product.installment ? (
            <button
              className={
                "w-full flex flex-row items-center justify-start bg-transparent text-violet-800 text-center font-medium py-4 px-4 border border-slate-500 rounded-lg outline-none"
              }
            >
              {product.installment} LE/mo with minicash installments
            </button>
          ) : (
            ""
          )}
          <button
            className={
              "w-full flex flex-row items-center justify-center text-center font-medium py-4 px-4 rounded-lg outline-none " +
              addToCartStyle
            }
            onClick={function () {
              if (!inCart) {
                props.addToCart(product);
              } else {
                props.removeFromCart(product.id, product.price);
              }
            }}
          >
            <ShoppingCartIcon
              className={"h-6 text-white mr-2"}
              aria-hidden="true"
            />
            {inCart ? (
              <>
                Added to Cart
                <CheckIcon
                  className={"text-bold h-6 text-green-500 ml-2"}
                  aria-hidden="true"
                />
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
          {product.installment ? (
            <button
              className={
                "w-full flex flex-row items-center justify-center bg-slate-900 text-white text-center font-bold py-4 px-4 rounded-lg outline-none"
              }
            >
              Buy With Installments
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

const getProduct = (productSlug) => {
  const currentProduct = products.filter(
    (product) => product.slug === productSlug
  );
  return currentProduct.length === 1 ? currentProduct[0] : false;
};

const checkIfAdded = (cartItems, productId) => {
  const currentProduct = cartItems.filter(
    (cartProduct) => cartProduct.id === productId
  );
  return currentProduct.length === 1 ? true : false;
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (id, price) => dispatch(removeFromCart(id, price)),
    addToHistory: (product) => dispatch(addToHistory(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
