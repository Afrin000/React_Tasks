// HOOK -useRef  ==>keeps a value that doesn't change when your component update.
//               ==>it's useful for getting and changing tings in the HTML,like a textbox or button.


import React, { useRef } from 'react'

function Focusinput() {
    const InputRef=useRef(null);
    const handleFocus= ()=>{
        InputRef.current.focus();
    };
  return (
    <div>
        <h1>Focus Example</h1>
        <input ref={InputRef} type="text" placeolder="Click button to focus"/>
      <button onClick={handleFocus}>Focus the input</button>
        
        </div>
  );
}

export default Focusinput




