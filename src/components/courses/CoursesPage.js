import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import { PropTypes } from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "../../../react-redux-react-router-es6/10/demos/after/src/components/courses/CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((e) => alert("loading courses failed" + e));
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((e) => alert("loading authors failed" + e));
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

// we want dispatch to be passed in to the CoursesPage component
// it will be passed in by connect (because we omit mapDispatchToProps)
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// ownProps reference to the ownProps
// after mapStateToProps we have this.props.courses
function mapStateToProps(state) {
  return {
    // courses: state.courses, // request only data your component needs, only rerenders when props you need is updated
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

// let us decide which action to pass to our components
function mapDispatchToProps(dispatch) {
  return {
    // action creators must be called with dispatch
    //createCourse: (course) => dispatch(courseActions.createCourse(course)),
    //actions: bindActionCreators(courseActions, dispatch), // wraps all the actions into dispatch, so if we had multiple actions it takes all actions

    // to select the exact actions from different files
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },

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
