export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_CREDITCARD":
      return [...state, { ...action.creditcard }];
    case "LOAD_CREDITCARDS_SUCCESS":
      return action.creditcards;
    default:
      return state;
  }
}
