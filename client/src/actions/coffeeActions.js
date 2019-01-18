import { 
  FETCH_COFFEE_ITEMS } from './types';
import coffeeJson from "../assets/data/coffeeItems.json";

export const fetchCoffeeItems = () => dispatch => {
    let coffeeItemsArray = coffeeJson.coffeeItems;
    dispatch({
      type: FETCH_COFFEE_ITEMS,
      payload: coffeeItemsArray
    });
};
