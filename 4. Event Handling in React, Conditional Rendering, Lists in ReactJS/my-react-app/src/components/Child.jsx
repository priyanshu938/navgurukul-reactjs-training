import React from "react";

const Child = ({ name, address, qualification, interest }) => {
  return (
    <div style={{ border: "2px solid red" }}>
      <h1>Name : {name}</h1>
      <h2>Address : {address}</h2>
      <h3>Qualification : {qualification}</h3>
      <h4>Interest : {interest}</h4>
    </div>
  );
};

export default Child;
