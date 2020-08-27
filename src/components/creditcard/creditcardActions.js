// ACTION CREATOR -> action.book
export function createCreditcard(creditcard) {
  return {
    type: "CREATE_CREDITCARD",
    creditcard,
  };
}

export function loadCreditcardSuccess(creditcards) {
  return { type: "LOAD_COURSES_SUCCESS", creditcards };
}

export function loadCreditcardError(creditcards) {
  return { type: "LOAD_COURSES_ERROR", creditcards };
}

/* export function loadCreditcard() {
  return function (dispatch) {
    return creditcardApi
      .getCreditcards()
      .then((creditcards) => {
        dispatch(loadCreditcardSuccess(creditcards));
      })
      .catch((error) => {
        dispatch(loadCreditcardError(error))
      });
  };
} */
