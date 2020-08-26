import { combineReducers } from "redux";
import courses from "./courseReducer";
import cards from "./cardReducer";
import books from "../../components/allInOne/bookReducer";

const rootReducer = combineReducers({
  courses,
  cards,
  books,
});

export default rootReducer;
