//2

// import React, { useState, useEffect, useRef } from 'react';

// const Toggle = () => {
//   // State to track the visibility of the div
//   const [isVisible, setIsVisible] = useState(true);
  
//   // Create a ref for the div element
//   const divRef = useRef(null);

//   // Function to toggle the visibility of the div
//   const toggle = () => {
//     setIsVisible(prevState => !prevState); // Toggle the state between true and false
//   };

//   // useEffect to show an alert every time the component state changes
//   useEffect(() => {
//     alert('Component has been updated');
//   }, [isVisible]); // Dependency array watches the isVisible state

//   return (
//     <div>
//       <button onClick={toggle}>Toggle Visibility</button>
//       <div
//         ref={divRef}
//         style={{ display: isVisible ? 'block' : 'none', marginTop: '10px', padding: '10px', background: '#f0f0f0' }}
//       >
//         This is the content that can be toggled.
//       </div>
//     </div>
//   );
// };

// export default Toggle;
