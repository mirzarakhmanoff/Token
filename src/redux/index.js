import { combineReducers, legacy_createStore } from "redux";
import wishlist from "./wishlist";
import cart from "./cart";
import token from "./token";
import profile from "./profile";
export const reducer = combineReducers({
  wishlist,
  cart,
  token,
  profile,
});
export const store = legacy_createStore(reducer);
