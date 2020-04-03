import React from "react"

class Form extends React.Component{
  render (){
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Введите город ..."/>
        <button>Узнать погоду</button>
      </form>
    )
  }
}

export default Form;