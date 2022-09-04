import { combineReducers } from "redux";
import { ADD_ITEM, DELETE_ITEM } from "./types";

const initialState = {
  listOfItems: []
};

function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        listOfItems: state.listOfItems.concat(action.payload)
      };
    case DELETE_ITEM:
      return {
        ...state,
        listOfItems: state.listOfItems.filter(
          (item, index) => index !== action.payload
        )
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({ items: itemsReducer });
