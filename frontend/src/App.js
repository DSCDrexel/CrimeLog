import React from "react";
import { HashRouter, Route } from "react-router-dom";

// Redux Setup
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Page Components
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Home} />
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  const { test } = state;
  return { test };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // Actions go here
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
