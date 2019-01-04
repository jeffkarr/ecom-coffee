import { combineReducers } from "redux";
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  coffeeItemsArray: coffeeReducer,
  cartStuff: cartReducer
});