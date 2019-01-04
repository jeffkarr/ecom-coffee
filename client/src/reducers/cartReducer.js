import { FETCH_CART_ITEMS, ADD_COFFEE_TO_CART } from "../actions/types";

const initialState = {
  cartItems: [],  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      console.log(state.cartItems);
      return {
        ...state,
        cartItems: state.cartItems
      };
    case ADD_COFFEE_TO_CART:
      state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems: state.cartItems,
      };
    default:
      return state;
  }
}