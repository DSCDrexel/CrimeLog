import React from "react";
import CrimeMap from "./CrimeMap";
import NewCrimeMap from "./NewCrimeMap";
import { crimeDataAction } from "../actions/crimeDataAction";

//Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs">
          <li>
            <img
              src="https://drexel.edu/~/media/Images/identity/athletics/athletics_D1.ashx?la=en"
              width="50"
              height="50"
              alt="Drexel_Logo"
            />
            Crime Log
          </li>
          <li>
            <a href="https://www.phillypolice.com/forms/official-complaint-form/">
              Report a Crime
            </a>
          </li>
          <li>
            <a href="https://www.phillypolice.com/forms/submit-a-tip/">
              Submit a Crime tip
            </a>
          </li>
          <li>
            <a href="tel:+12158952222">Call Public Safety</a>
          </li>
        </ul>
        <br />
          <div className="mainContainer">
            <div className="crimeMapContainer">
              <NewCrimeMap />
            </div>
            <div className="crimeDataContainer"></div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { crimeData } = state;
  return { crimeData };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // Actions go here
      crimeDataAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
