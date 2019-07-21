import React from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "1a1a1b798dbee214ab3fd073784f6705";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      maxTemp: undefined,
      minTemp: undefined,
      error: undefined
    };
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await apiCall.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        maxTemp: undefined,
        minTemp: undefined,
        error: "You should indicate city and the country."
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="right">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
            maxTemp={this.state.maxTemp}
            minTemp={this.state.minTemp}
          />
        </div>
      </div>
    );
  }
}

export default App;
