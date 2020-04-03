import React from 'react';
import Info from './components/Info'
import Form from "./components/Form";
import Weather from "./components/Weather";
//import logo from './logo.svg';
import './App.css';

const APi_KEY = "e3b78c65f60cf633187a2d1495e4b72b";

class App extends React.Component{

  constructor () {
    super()
    this.state ={
      temp: undefined,
      name: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
    }
  }


  gettingWeather = async (event) => {
    event.preventDefault();
    var city = event.target.elements.city.value;
    // https://samples.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${APi_KEY}

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},ua&appid=${APi_KEY}&units=metric`)
      const data = await api_url.json();

      try {
        var sunrise = data.sys.sunrise;
        //var sunset = data.sys.sunset;
        //var date2 = new Date();
        //date1.setTime(sunrise);
        //var date1 = new Date();
        var date = new Date();
        //date2.setTime(sunset);
        date.setTime(sunrise);
        var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        //var sunrise_date = date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds();
        //var sunset_date = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();

        this.setState({
          temp: data.main.temp,
          name: data.name,
          country: data.sys.country,
          sunrise: sunrise_date,
          sunset: undefined,
          error: undefined
        });
      } catch (e) {

        console.log(e.name, e.message, e.stack);
        this.setState({
          temp: undefined,
          name: undefined,
          country: undefined,
          //sunrise: undefined,
          sunset: undefined,
          error: undefined
        });
      }

    }
  };

  render() {
    return (
      <section>
        <div className="mainWrap">
          <Info />
          <Form getWeather={this.gettingWeather}/>
          <Weather weather={this.state}/>
        </div>

      </section>
    )
  }
}

export default App;
