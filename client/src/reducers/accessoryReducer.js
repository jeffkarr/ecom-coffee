import { FETCH_ACCESSORY_ITEMS } from "../actions/types";

const initialState = {
  accessoryItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCESSORY_ITEMS:
      return {
        ...state,
        accessoryItems: action.payload
      };
    default:
      return state;
  }
}
