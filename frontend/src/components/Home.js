import React from "react";
import Map from "./Map";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Crime Log Home Page</h1>
        <Map></Map>
      </div>
    );
  }
}

export default Home;
