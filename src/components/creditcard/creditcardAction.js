// ACTION CREATOR -> action.book
export default function createCreditcard(creditcard) {
  return {
    type: "CREATE_CREDITCARD",
    creditcard,
  };
}
