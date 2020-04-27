import React from "react";
import CrimeMap from "./CrimeMap";
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
      <div>
        <div className="navbar">
          <div className="HomePageTitle"> Drexel Crime Log</div>
          <div className="spaceDivider"></div>
          <div
            onClick={() =>
              (window.location.href =
                "https://drexel.edu/publicsafety/forms/complaint/")
            }
            className="policeReportContainer"
          >
            File Police Report
          </div>
        </div>
        <div className="mainContainer">
          <div className="crimeMapContainer">
            <CrimeMap crimeData={this.props.crimeData} />
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
