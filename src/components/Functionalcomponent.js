import React from 'react'

// const Functionalcomponent = (props) => {
const Functionalcomponent = ({ name, age }) => { // Using es6 destructuring
  return (
    <div>
      <h2>this is function Component</h2>
      <h3>Name: {name} &nbsp; Age {age}</h3>
    </div>
  )
}

export default Functionalcomponent