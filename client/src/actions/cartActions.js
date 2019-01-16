import { FETCH_CART_ITEMS, 
        ADD_COFFEE_TO_CART,
        REMOVE_CART_ITEM, 
        CART_CHECKOUT,
        WISH_CHECKOUT } from "./types";

export const fetchCartItems = () => dispatch => {
  dispatch({
    type: FETCH_CART_ITEMS
  });
};

export const addToCart = newCartItem => dispatch => {
  dispatch({
    type: ADD_COFFEE_TO_CART,
    payload: newCartItem
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
