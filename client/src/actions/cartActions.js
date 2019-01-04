import { FETCH_CART_ITEMS, ADD_COFFEE_TO_CART  } from './types';

// we dispatch fetchCartItems to the cartReducer.

export const fetchCartItems = () => dispatch => {
	dispatch({
		type: FETCH_CART_ITEMS
	});
};

export const addToCart = (newCartItem) => dispatch => {
	dispatch({
		type: ADD_COFFEE_TO_CART,
		payload: newCartItem
	});
};