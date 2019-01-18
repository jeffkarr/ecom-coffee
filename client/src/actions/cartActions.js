import { FETCH_CART_ITEMS, 
        ADD_COFFEE_TO_CART,
        ADD_TEA_TO_CART,
        ADD_ACCESSORY_TO_CART,
        ADD_DEAL_TO_CART,
        REMOVE_CART_ITEM, 
        CART_CHECKOUT,
        WISH_CHECKOUT } from "./types";

export const fetchCartItems = () => dispatch => {
  dispatch({
    type: FETCH_CART_ITEMS
  });
};

export const addCoffeeToCart = cartCoffeeItemId => dispatch => {
  dispatch({
    type: ADD_COFFEE_TO_CART,
    payload: cartCoffeeItemId
  });
};

export const addTeaToCart = cartTeaItemId => dispatch => {
  dispatch({
    type: ADD_TEA_TO_CART,
    payload: cartTeaItemId
  });
};

export const addAccessoryToCart = cartAccessoryItemId => dispatch => {
  dispatch({
    type: ADD_ACCESSORY_TO_CART,
    payload: cartAccessoryItemId
  });
};

export const addDealToCart = cartDealItemId => dispatch => {
  dispatch({
    type: ADD_DEAL_TO_CART,
    payload: cartDealItemId
  });
};

export const removeCartItem = removeCartId => dispatch => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: removeCartId
  });
};

export const sendOrder = () => dispatch => {
  dispatch({
    type: CART_CHECKOUT
  });
  dispatch({
    type: WISH_CHECKOUT
  });
};
