import { FETCH_TEA_ITEMS } from "../actions/types";

const initialState = {
  teaItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TEA_ITEMS:
      return {
        ...state,
        teaItems: action.payload
      };
    default:
      return state;
  }
}