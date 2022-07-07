import { ADDTOCART, REMOVEFROMCART } from "./cart.types";

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    product: product,
  };
};

export const removeFromCart = (id, price) => {
  return {
    type: REMOVEFROMCART,
    id: id,
    price: price
  };
};
