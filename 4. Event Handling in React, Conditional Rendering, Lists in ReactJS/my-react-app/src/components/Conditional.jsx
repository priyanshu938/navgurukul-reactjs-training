import React from "react";

const Conditional = ({ type }) => {
  return (
    <>
      {/*type === "Odd" ? <h1>I am odd</h1> : <h1>I am even</h1>*/}
      {type === "both" && <h1>Hello I am both</h1>}
    </>
  );
};

export default Conditional;
