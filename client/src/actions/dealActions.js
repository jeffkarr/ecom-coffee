import { FETCH_DEAL_ITEMS } from './types';
import dealJson from "../assets/data/dealItems.json";

export const fetchDealItems = () => dispatch => {
  let dealItemsArray = dealJson.dealItems;
  dispatch({
    type: FETCH_DEAL_ITEMS,
    payload: dealItemsArray
  });
};
