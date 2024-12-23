import React, { useCallback } from 'react';

const Hook_task4 = () => {

  const showAlert = useCallback(() => {
    alert("Button was clicked!");
  }, []);  

  return (
    <div>
      <button onClick={showAlert}>Click me</button>
    </div>
  );
};

export default Hook_task4;
