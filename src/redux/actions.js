import { ADD_ITEM, DELETE_ITEM } from "./types";

export function addItem(item) {
  return { type: ADD_ITEM, payload: item };
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, payload: id };
}
