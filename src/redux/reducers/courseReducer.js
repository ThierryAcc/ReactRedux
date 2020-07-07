import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }]; // push action.course -> clone state and clone course
    default:
      return state; // return old state if nothing was done on reducer
  }
}
