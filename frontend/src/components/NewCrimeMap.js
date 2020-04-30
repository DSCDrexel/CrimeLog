import React, { Component } from "react";
import { Map, InfoWindow, GoogleApiWrapper, Marker } from "google-maps-react";
import "./crimeMap.css";

// Crime data
import crimeData from "../api/crimeData.json";

class MewCrimeMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.958715,
      lng: -75.188492,
    },
    zoom: 15,
  };

  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    stores: [],
    center: {
      lat: 39.958715,
      lng: -75.188492,
    },
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  async componentDidMount() {
      console.log("Called")
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

  renderMarkers() {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: store.latitude, lng: store.longitude }}
          name={store.crimeTitle}
        />
      );
    });
  }

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      // <div style={{ height: "100vh", width: "100%" }}>
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        initialCenter={this.state.center}
          style={{ height: '100%', width: '100%' }}
        zoom={14}
      >
        {this.renderMarkers()}

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        <InfoWindow position={this.state.center} visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAu1YfYc6mPuMlmjgP17cxFh-Un4td5vgQ",
})(MewCrimeMap);
