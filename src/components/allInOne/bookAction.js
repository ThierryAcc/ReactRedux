// ACTION CREATOR -> action.book
export default function createBook(book) {
  return {
    type: "CREATE_BOOK",
    book,
  };
}
