import { ADDTOCART, REMOVEFROMCART } from "./cart.types";

const initState = {
  cartItems: [],
  cartTotal: 0,
  cartPayment: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADDTOCART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.product],
        cartTotal: state.cartTotal + 1,
        cartPayment: state.cartPayment + action.product.price,
      };

    case REMOVEFROMCART:
      return {
        ...state,
        cartItems: state.cartItems.filter((product) => {
          return product.id !== action.id;
        }),
        cartTotal: state.cartTotal - 1,
        cartPayment: state.cartPayment - action.price,
      };

    default:
      return state;
  }
};

export default reducer;
