import React, { useState } from 'react'

function Counter() {
    
    const[count, setCount ] =useState(10000);

    // Decrement
    const handleDecrement =() => {
        setCount(prevCount => prevCount - 1);
    };

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>

        </div>
  );
}

export default Counter;