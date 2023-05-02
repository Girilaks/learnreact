import React from 'react'

function RenderListFC() {

    const students = [
        {
            name: "Giri",
            class: "12"
        },
        {
            name: "Priya",
            class: "10"
        },
        {
            name: "Dharani",
            class: "11"
        }
    ]

  return (
    <div>
        <h1>Render Array of students</h1>
        {students.map((student) => (
            <h2>{ student.name }</h2>
        ))}
    </div>
  )
}

export default RenderListFC