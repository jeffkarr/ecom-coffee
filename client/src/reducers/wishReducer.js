import {
  FETCH_WISH_ITEMS,
  ADD_COFFEE_TO_WISH,
  ADD_TEA_TO_WISH,
  ADD_ACCESSORY_TO_WISH,
  ADD_DEAL_TO_WISH,
  WISH_CHECKOUT,
  REMOVE_WISH_ITEM
} from "../actions/types";

const initialState = {
  wishItems: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_WISH_ITEMS:
      if (state.wishItems.length > 0) {
        return state;
      }
      return { ...state, wishItems: state.wishItems };
    case ADD_COFFEE_TO_WISH:
      state.wishItems.push(action.payload);
      return { ...state, wishItems: state.wishItems };
    case ADD_TEA_TO_WISH:
      state.wishItems.push(action.payload);
      return { ...state, wishItems: state.wishItems };
    case ADD_ACCESSORY_TO_WISH:
      state.wishItems.push(action.payload);
      return { ...state, wishItems: state.wishItems };
    case ADD_DEAL_TO_WISH:
      state.wishItems.push(action.payload);
      return { ...state, wishItems: state.wishItems };
    case REMOVE_WISH_ITEM:
      let tempWishItems = state.wishItems.filter(wishTrxn => wishTrxn.wishId !== parseInt(action.payload));
      return { wishItems: tempWishItems };
    case WISH_CHECKOUT:
      return initialState;

    default:
      return state;
  }
}

