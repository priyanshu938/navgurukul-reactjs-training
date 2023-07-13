import React from "react";

const Welcome = ({ name, roll, children }) => {
  return (
    <>
      <h1>Name : {name}!</h1>
      <p>Roll no : {roll}</p>
      {children}
    </>
  );
};
Welcome.defaultProps = {
  name: "Anzum",
  roll: "1",
};
export default Welcome;
