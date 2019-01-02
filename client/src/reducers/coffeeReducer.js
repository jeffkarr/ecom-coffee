import { FETCH_COFFEE_ITEMS, ADD_COFFEE_TO_CART } from "../actions/types";

const initialState = {
  coffeeItems: [],
  cartItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEE_ITEMS:
      return { 
        ...state, 
        coffeeItems: action.payload 
      };
    case ADD_COFFEE_TO_CART:
      let itemId = action.payload;
      for (let i = 0; i < state.coffeeItems.length; i++) {
        if (state.coffeeItems[i].id === itemId) {
          state.cartItems.push(state.coffeeItems[i]);
        }
      }
      return {
        ...state, 
        cartItems: state.cartItems
      };
    default:
      return state;
  }
}
