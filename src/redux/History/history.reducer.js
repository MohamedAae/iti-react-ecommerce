import { ADDTOHISTORY } from "./history.types";

const initState = {
  history: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADDTOHISTORY:
      const currentProduct = action.product,
        exist = state.history.some(
          (product) => product.id === currentProduct.id
        );

      if (exist) return state;
      return {
        ...state,
        history: [...state.history, currentProduct],
      };

    default:
      return state;
  }
};

export default reducer;
