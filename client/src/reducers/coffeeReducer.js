import { FETCH_COFFEE_ITEMS } from "../actions/types";

const initialState = {
  coffeeItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COFFEE_ITEMS:
      return { 
        ...state, 
        coffeeItems: action.payload 
      };
    default:
      return state;
  }
}
