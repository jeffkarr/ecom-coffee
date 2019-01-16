import { ADD_COFFEE_TO_CART } from "./types";
import { removeWishItem } from "./wishActions";

export function addWishToCartSuccess(newCartItem) {
  return {
    type: ADD_COFFEE_TO_CART,
    payload: newCartItem
  };
};

export function addWishToCart(newCartItem, wishId) {
  return function(dispatch) {
    dispatch(addWishToCartSuccess(newCartItem));
    dispatch(removeWishItem(wishId));
  };
};
