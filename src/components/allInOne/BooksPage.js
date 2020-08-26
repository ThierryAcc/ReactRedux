import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import createBook from "./bookAction";

const BooksPage = ({ dispatch, books }) => {
  const [book, setBook] = useState({ title: "" });

  const handleChange = (e) => {
    setBook({ ...book, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(book));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Books</h2>
      <h3>Add Book</h3>
      <input type="text" onChange={handleChange} value={book.title} />
      <input type="submit" value="Save" />

      {books.map((book) => (
        <div key={book.title}>{book.title}</div>
      ))}
    </form>
  );
};

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

//  connected to the store
export default connect(mapStateToProps)(BooksPage);
