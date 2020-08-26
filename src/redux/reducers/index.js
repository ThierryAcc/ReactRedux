import { combineReducers } from "redux";
import courses from "./courseReducer";
import cards from "./cardReducer";
import books from "../../components/allInOne/bookReducer";
import creditcards from "../../components/creditcard/creditcardReducer";

const rootReducer = combineReducers({
  courses,
  cards,
  books,
  creditcards,
});

export default rootReducer;
