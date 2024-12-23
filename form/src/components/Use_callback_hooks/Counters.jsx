//Counter.jsx
import React, { useEffect } from 'react';

const Counters = ({ increment }) => {
  // useEffect will run whenever the 'increment' function changes.
  useEffect(() => {
    console.log('Counter component rendered or increment function changed!');
  }, [increment]); // This dependency means the effect runs if increment changes.

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counters;