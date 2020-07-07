import * as types from "./actionTypes";

// creates an action
export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
