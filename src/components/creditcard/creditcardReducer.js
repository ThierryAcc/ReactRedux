export default function booksReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_CREDITCARD":
      return [...state, { ...action.creditcard }];
    default:
      return state;
  }
}
