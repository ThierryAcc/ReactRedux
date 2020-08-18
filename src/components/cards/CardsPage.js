import React from "react";
import { connect } from "react-redux";
import * as cardActions from "../../redux/actions/cardActions";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";

class CardsPage extends React.Component {
  state = {
    cards: {
      title: "",
    },
  };

  handleChange = (event) => {
    const card = { ...this.state.card, title: event.target.value };
    this.setState({ card });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(cardActions.createCard(this.state.card));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Cards</h2>
        <h3>Add Cards</h3>
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
  dispatch: PropTypes.func.isRequired,
};

// ownProps reference to the ownProps
// after mapStateToProps we have this.props.courses
function mapStateToProps(state) {
  return {
    cards: state.cards, // request only data your component needs
  };
}

function mapDispatchToProps() {}

export default connect(mapStateToProps)(CardsPage);
