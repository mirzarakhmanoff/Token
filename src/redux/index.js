import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
import wishlist from "./wishlist";
import cart from "./cart";
import token from "./token";
export const reducer = combineReducers({
  wishlist,
  counter,
  cart,
  token,
});
export const store = legacy_createStore(reducer);
