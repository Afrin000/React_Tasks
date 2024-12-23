// HOOK-useEffect==>Handling side effects in functional components.
//               ==>Runs a function after the components renders.
//               ==>perform action like data fetching,modifying the DOM



import React, { useEffect, useState } from 'react';

function Timer() {
       const[seconds, setSeconds]= useState(0);

useEffect(() => {
    const timerId =setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds  -1);

    },1000);
    return ()  => clearInterval(timerId);
},[]);

  return (

    <div>
        <h1>Timer: {seconds} seconds</h1>

        </div>
  );
}

export default Timer;