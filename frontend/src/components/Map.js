import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

  
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.952583,
      lng: 	-75.165222,
    },
    zoom: 11,
  };
  constructor(props) {
    super(props);
  }

  render() {
    return(<div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAu1YfYc6mPuMlmjgP17cxFh-Un4td5vgQ' }}
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}
    >
      <AnyReactComponent
        lat={39.952583}
        lng={-75.165222}
        text="Crime Marker"
      />
    </GoogleMapReact>
  </div>)
  }
}

export default Map;
