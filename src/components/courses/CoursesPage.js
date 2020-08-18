import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions
      .loadCourses()
      .catch((e) => alert("loading courses failed" + e));
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </>
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
    courses: state.courses, // request only data your component needs, only rerenders when props you need is updated
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

// ALTERNATIVES
function mapStateToPropsDestructured({ courses }) {
  return {
    courses,
  };
}

// binds each property to dispatch
const mapDispatchToPropsObject = {
  createCourse: courseActions.createCourse,
};

// we can omit mapDispatchToProps. Than it gets a dispatchproperty
// export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// RESELECT MEMOIZE FOR PERFORMANCE, SELECTORS ARE EFFICIENT AND ONLY COMPUTED WHEN ONE OF THE ARGUMENT IS CHANGED
