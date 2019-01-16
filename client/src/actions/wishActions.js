import {
  FETCH_WISH_ITEMS,
  ADD_COFFEE_TO_WISH,
  REMOVE_WISH_ITEM,
  WISH_CHECKOUT
} from "./types";

export const fetchWishItems = () => dispatch => {
  dispatch({
    type: FETCH_WISH_ITEMS
  });
};

export const addToWishList = newWishItem => dispatch => {
  dispatch({
    type: ADD_COFFEE_TO_WISH,
    payload: newWishItem
  });
};

export const removeWishItem = removeWishId => dispatch => {
  dispatch({
    type: REMOVE_WISH_ITEM,
    payload: removeWishId
  });
};

export const sendOrder = () => dispatch => {
  dispatch({
    type: WISH_CHECKOUT
  });
};