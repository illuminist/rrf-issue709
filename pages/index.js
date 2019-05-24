import React from "react";
// import Button from "../components/CustomButtons/Button.jsx";

import { compose } from 'redux'
import { connect } from 'react-redux'
// import { testOperations } from '../redux/test'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

// import aboutUsStyle from "../assets/jss/material-kit-pro-react/views/aboutUsStyle.jsx";

class AboutUsPage extends React.Component {
  render() {
    const { classes, category, firebase, auth } = this.props;

    return (
      <main>
        <button onClick={() => firebase.login({ provider: 'google', type: 'popup' })}>Login</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // category: state.test.category,
    auth: state.firebase.auth,
  }
};

const actionCreators = {
  // selectCategory: testOperations.selectCategory
};

// var styledPage = withStyles(aboutUsStyle)(AboutUsPage);

export default compose(
  firebaseConnect(), // withFirebase can also be used
  connect(mapStateToProps, actionCreators)
)(AboutUsPage)