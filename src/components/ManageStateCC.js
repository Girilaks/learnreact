import React, { Component } from 'react'

class ManageStateCC extends Component {

    constructor(){
        super();
        this.state = {
            name: "Iron man",
            age: 40,
            power: 500
        }
    }

    changeData = () => {
        this.setState({ // update local state value
            name: "Hulk",
            age: 45,
            power: 600
        })
    }

  render() {
    return (
      <div>Manage State in class component
        <h2> Name: { this.state.name }</h2>
        <h2> Age: { this.state.age }</h2>
        <h2> Power: { this.state.power }</h2>
        <button onClick={this.changeData}> Update data</button>
      </div>
    )
  }
}

export default ManageStateCC