import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer";
import historyReducer from "./History/history.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  history: historyReducer,
});

export default rootReducer;
