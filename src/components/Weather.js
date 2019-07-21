import React from "react";

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>
          {this.props.city} {this.props.country}
        </h3>
        <h3>{this.props.temperature}</h3>
        <h3>{this.props.humidity}</h3>
        <h3>{this.props.description}</h3>
        <h3>{this.props.maxTemp}</h3>
        <h3>{this.props.minTemp}</h3>
      </div>
    );
  }
}

export default Weather;
