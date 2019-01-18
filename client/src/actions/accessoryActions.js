import { FETCH_ACCESSORY_ITEMS } from './types';
import accessoryJson from "../assets/data/accessoryItems.json";

export const fetchAccessoryItems = () => dispatch => {
  let accessoryItemsArray = accessoryJson.accessoryItems;
  dispatch({
    type: FETCH_ACCESSORY_ITEMS,
    payload: accessoryItemsArray
  });
};
