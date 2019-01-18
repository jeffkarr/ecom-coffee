import { FETCH_DEAL_ITEMS } from "../actions/types";

const initialState = {
  dealItems: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DEAL_ITEMS:
      return {
        ...state,
        dealItems: action.payload
      };
    default:
      return state;
  }
}
