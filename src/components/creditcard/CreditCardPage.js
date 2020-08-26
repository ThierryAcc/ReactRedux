import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import createCreditcard from "./creditcardAction";

const CreditCardPage = ({ dispatch, creditcards }) => {
  const [creditcard, setCreditcard] = useState({ title: "" });

  const handleChange = (e) => {
    setCreditcard({ ...creditcard, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCreditcard(creditcard));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Credit Cards</h2>
      <h3>Add Credit Card</h3>
      <input type="text" onChange={handleChange} value={creditcard.title} />
      <input type="submit" value="Save" />

      {creditcards.map((creditcard) => (
        <div key={creditcard.title}>{creditcard.title}</div>
      ))}
    </form>
  );
};

CreditCardPage.propTypes = {
  creditcards: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    creditcards: state.creditcards,
  };
};

//  connected to the store
export default connect(mapStateToProps)(CreditCardPage);
