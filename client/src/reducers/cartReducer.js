import { FETCH_CART_ITEMS, 
        ADD_COFFEE_TO_CART,
        ADD_TEA_TO_CART,
        ADD_ACCESSORY_TO_CART,
        ADD_DEAL_TO_CART,
        CART_CHECKOUT,
        REMOVE_CART_ITEM } from "../actions/types";

const initialState = {
  cartItems: [],  
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART_ITEMS:
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
    case ADD_TEA_TO_CART:
      state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case ADD_ACCESSORY_TO_CART:
      state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case ADD_DEAL_TO_CART:
      state.cartItems.push(action.payload);
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case REMOVE_CART_ITEM:
      let tempCart = state.cartItems.filter(cartTrxn => cartTrxn.cartId !== parseInt(action.payload));
      if(tempCart === null) {
        tempCart = [];
      }
      return {
        cartItems: tempCart,
      };
    case CART_CHECKOUT:
      return initialState;
      
    default:
      return state;
  }
}
