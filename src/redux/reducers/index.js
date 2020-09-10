import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import cards from "./cardReducer";
import books from "../../components/allInOne/bookReducer";
import creditcards from "../../components/creditcard/creditcardReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  cards,
  books,
  creditcards,
});

export default rootReducer;
