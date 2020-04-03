import React from "react"

class Weather extends React.Component {

  render() {
    const result = this.props.weather;
    console.log(result)
    return (
      <div>
        {result.name ?
          <div>
            <p>Местоположения: {result.name} , {result.country}</p>
            <p>Teмпература: {result.temp}</p>
            <p>Восход восход: {result.sunrise}</p>
            <p>Заход соднца: {result.sunset}</p>
          </div> :
          <p>
            Введите назнавиния города или город введен не коректно
           </p>
        }

      </div>
    )
  }
}

export default Weather;