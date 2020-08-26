import * as types from "../actions/actionTypes";

export default function cardReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_CARD:
      return [...state, { ...action.card }]; // push action.card -> clone state and clone card
    default:
      return state; // return old state if nothing was done on reducer
  }
}
