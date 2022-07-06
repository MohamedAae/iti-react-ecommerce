import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../redux/Cart/cart.actions";
import { BadgeCheckIcon, CashIcon, RefreshIcon } from "@heroicons/react/solid";
import { ShoppingCartIcon } from "@heroicons/react/outline";

let product = require("../api/products.json")[0];
const Product = (props) => {
  return (
    <>
      <div
        className={
          "container mx-auto grid gap-0 mt-5 p-5 bg-white shadow-md rounded-lg grid-cols-2 font-sans"
        }
      >
        <div className={"bg-grey-50 text-center flex flex-col items-center"}>
          <div
            className={
              "mb-5 w-full h-80 flex flex-row items-start justify-between"
            }
          >
            <div className={"flex flex-col gap-y-2 w-1/5"}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/products/samsung-galaxy-m12-140x140.png"
                }
                className={"p-2 h-20 w-20 border rounded-md"}
              />
            </div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/products/samsung-galaxy-m12-140x140.png"
              }
              className={"h-80 w-4/5 object-contain"}
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
        <div className={"flex flex-col gap-y-5"}>
          <span>{product.brand}</span>
          <h1 className={"text-2xl font-light"}>{product.name}</h1>
          <div>
            <h1 className={"text-3xl font-black inline-block mr-1"}>
              {product.price}
            </h1>
            <span>LE</span>
          </div>
          {product.installment ? (
            <button
              className={
                "w-full flex flex-row items-center justify-start bg-transparent text-violet-800 text-center font-medium py-4 px-4 border border-slate-500 rounded-lg"
              }
            >
              {product.installment} LE/mo with minicash installments
            </button>
          ) : (
            ""
          )}
          <button
            className={
              "w-full flex flex-row items-center justify-center bg-fuchsia-900 hover:bg-fuchsia-700 text-white text-center font-medium py-4 px-4 rounded-lg"
            }
            onClick={() => props.increaseCounter()}
          >
            <ShoppingCartIcon
              className={"h-6 text-white mr-2"}
              aria-hidden="true"
            />
            Add to Cart
            {props.count}
          </button>
          {product.installment ? (
            <button
              className={
                "w-full flex flex-row items-center justify-center bg-slate-900 text-white text-center font-bold py-4 px-4 rounded-lg"
              }
            >
              Buy With Installments
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={
          "container mx-auto grid gap-0 mt-5 p-5 bg-white shadow-md rounded-lg grid-cols-2"
        }
      ></div>
      <div
        className={
          "container mx-auto grid gap-0 mt-5 p-5 bg-white shadow-md rounded-lg grid-cols-2"
        }
      ></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.cart.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
