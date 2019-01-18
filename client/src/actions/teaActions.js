import {
  FETCH_TEA_ITEMS,
  ADD_TEA_TO_CART
} from './types';
import teaJson from "../assets/data/teaItems.json";

export const fetchTeaItems = () => dispatch => {
  let teaItemsArray = teaJson.coffeeItems;
  dispatch({
    type: FETCH_TEA_ITEMS,
    payload: teaItemsArray
  });
};

export const addTeaToCart = (cartTeaItemId) => dispatch => {
  dispatch({
    type: ADD_TEA_TO_CART,
    payload: cartTeaItemId
  });
};