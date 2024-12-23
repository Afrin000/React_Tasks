// Hooks -useState==>lets you add and manage a state in your component.
//                ==>It provide a way to update this value and re-render the components when it change.

import React, { useState } from 'react'

function Counter() {
    
    const[count, setCount ] =useState(10);

    // Increment
    const handleIncrement =() => {
        setCount(prevCount => prevCount + 10);
    };

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>

        </div>
  );
}

export default Counter;