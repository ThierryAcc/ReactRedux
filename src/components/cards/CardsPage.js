import React from "react";
import { connect } from "react-redux";
import * as cardActions from "../../redux/actions/cardActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CardsPage extends React.Component {
  state = {
    card: {
      title: "",
    },
  };

  handleChange = (event) => {
    const card = { ...this.state.card, title: event.target.value };
    this.setState({ card });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCard(this.state.card);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Cards</h2>
        <h3>Add Card</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.card.title}
        />

        <input type="submit" value="Save" />
        {this.props.cards.map((card) => (
          <div key={card.title}>{card.title}</div>
        ))}
      </form>
    );
  }
}

CardsPage.propTypes = {
  cards: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cards: state.cards,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cardActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage);
