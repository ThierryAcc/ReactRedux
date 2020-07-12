import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  // class field instead of constructor
  state = {
    course: {
      title: "",
    },
  };

  // would work in constructor but easier version: this.handleChange = this.handleChange.bind(this);

  // arrow function inherit this
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // dispatch the create course action
    //this.props.createCourse((this.state.course);
    this.props.actions.createCourse(this.state.course);
    //this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      // onSubmit on Form and not on input => press enter works
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange} // bind(this) within render causes a new function to be created on each render
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />

        {/* can omit return keyword because of => */}
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

// we want dispatch to be passed in to the CoursesPage component
// it will be passed in by connect (because we omit mapDispatchToProps)
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// ownProps reference to the ownProps
// after mapStateToProps we have this.props.courses
function mapStateToProps(state) {
  return {
    courses: state.courses, // request only data your component needs
  };
}

// let us decide which action to pass to our components
function mapDispatchToProps(dispatch) {
  return {
    // action creators must be called with dispatch
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch), // wraps all the actions into dispatch, so if we had multiple actions it takes all actions
    // not only createCourse action
  };
}

// we can omit mapDispatchToProps. Than it gets a dispatchproperty
//export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
