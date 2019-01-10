import { combineReducers } from "redux";
import coffeeReducer from "./coffeeReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  coffee: coffeeReducer,
  cart: cartReducer
});

export const getCartItems = state => {
  let cartItems = state.cart.cartItems;
  return cartItems;
};

export const getCartCosts = state => {
  let subtotalCost = 0;
  let totalCost = 0;
  let shippingFee = 10.00;
  state.cart.cartItems.forEach(trxn => {
    let trxnCost = trxn.quantity * trxn.price;
    subtotalCost += trxnCost;
  });
  totalCost = subtotalCost + shippingFee;
  let cartCosts = {
    subtotal: subtotalCost,
    total: totalCost
  }
  return cartCosts;
};