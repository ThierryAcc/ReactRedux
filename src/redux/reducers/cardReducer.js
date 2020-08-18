import * as types from "../actions/actionTypes";

export default function cardReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_CARD:
      return [...state, { ...action.card }];
    default:
      return state;
  }
}
