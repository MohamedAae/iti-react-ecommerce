import { ADDTOHISTORY } from "./history.types";

export const addToHistory = (product) => {
  return {
    type: ADDTOHISTORY,
    product: product
  };
};
