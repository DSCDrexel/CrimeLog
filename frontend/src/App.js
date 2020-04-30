import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

// Redux Setup
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "bootstrap/dist/css/bootstrap.min.css";

// Page Components
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <Route path="/" component={Home} />
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { test } = state;
  return { test };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // Actions go here
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
