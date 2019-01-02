import { 
  FETCH_COFFEE_ITEMS,
  ADD_COFFEE_TO_CART } from './types';
import coffeeJson from "../assets/data/coffeeItems.json";

// we dispatch fetchCoffeeItems to the coffeeReducer.

export const fetchCoffeeItems = () => dispatch => {
    let coffeeItemsArray = coffeeJson.coffeeItems;
    dispatch({
      type: FETCH_COFFEE_ITEMS,
      payload: coffeeItemsArray
    });
};

export const addCoffeeToCart = (cartCoffeeItemId) => dispatch => {
  dispatch({
    type: ADD_COFFEE_TO_CART,
    payload: cartCoffeeItemId
  });
};