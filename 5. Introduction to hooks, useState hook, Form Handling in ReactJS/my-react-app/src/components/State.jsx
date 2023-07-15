import React, { useState } from "react";

const State = () => {
  //normal variable case
  //   let count = 0;
  //   const increment = () => {
  //     count++;
  //     console.log(count);
  //   };

  //using state variables

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={increment}> Increment Counter</button>
      <div>Counter value is : {count}</div>
      <button onClick={decrement}>Decrement Counter</button>
    </>
  );
};

export default State;
