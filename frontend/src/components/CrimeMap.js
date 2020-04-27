import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./crimeMap.css";

// Crime data
import crimeData from "../api/crimeData.json";
import Geocode from "react-geocode";

//Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

Geocode.setApiKey("AIzaSyAu1YfYc6mPuMlmjgP17cxFh-Un4td5vgQ");

// set response language. Defaults to english.
Geocode.setLanguage("en");

const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "12px 12px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)",
      border: "1px solid yellow",
    }}
  >
    {text}
  </div>
);

class CrimeMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.958715,
      lng: -75.188492,
    },
    zoom: 15,
  };
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
      ],
      testStore: [],
      loading: true,
    };
  }

  displayMarkers = () => {
    // debugger
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          lat={store.latitude}
          lng={store.longitude}
          text={"Crime Spot"}
        />
      );
    });
  };

  async componentDidMount() {
    var crimeStore = [];
    crimeData.map((crime, store) => {
      var crimeData = {
        crimeTitle: crime["Incident/Offenses:"],
        latitude: Number(crime["General Location"].split(",")[0]),
        longitude: Number(crime["General Location"].split(",")[1]),
      };
      crimeStore.push(crimeData);
    });

    await this.setState({ loading: false, stores: crimeStore });

    console.log(crimeStore);
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAu1YfYc6mPuMlmjgP17cxFh-Un4td5vgQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.displayMarkers()}
        </GoogleMapReact>
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
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CrimeMap);
