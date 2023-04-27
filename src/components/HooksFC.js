import React, { useState } from 'react'

function HooksFC() {

    let [count, setCount] = useState(0);

    return (
        <div>Manage state with Hooks
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1000)}>UP value</button>
        </div>
    )
}

export default HooksFC