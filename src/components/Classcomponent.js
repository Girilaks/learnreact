import React, { Component } from 'react'

class Classcomponent extends Component {
  render() {
    return (
      <div>This is my first class Component
       <h3> Name: {this.props.name} </h3>
       <h4> Age: {this.props.age} </h4>

      </div>
    )
  }
}

export default Classcomponent

