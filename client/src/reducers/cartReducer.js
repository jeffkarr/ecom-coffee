import { FETCH_CART_ITEMS, 
        ADD_COFFEE_TO_CART,
        CART_CHECKOUT,
        REMOVE_CART_ITEM } from "../actions/types";

const initialState = {
  cartItems: [],  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      console.log(action);
      if(state.cartItems.length > 0)  {
        return state
      }
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
    case REMOVE_CART_ITEM:
      let tempCart = state.cartItems.filter(cartTrxn => cartTrxn.cartId !== parseInt(action.payload));
      return {
        cartItems: tempCart,
      };
    case CART_CHECKOUT:
      return initialState;
      
    default:
      return state;
  }
}

