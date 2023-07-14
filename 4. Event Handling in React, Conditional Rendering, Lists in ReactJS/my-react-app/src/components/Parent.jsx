import React from "react";
import Child from "./Child";

const Parent = () => {
  const data = [
    {
      id: 1,
      name: "Tamanna bhaiya",
      address: "Sarjapur",
      qualification: "12th pass",
      interest: "Reading",
    },
    {
      id: 2,
      name: "Bhaiya Kareena",
      address: "Delhi",
      qualification: "Graduation",
      interest: "Pareshaan krna dusro ko",
    },
    {
      id: 3,
      name: "Chhotu",
      address: "Dharamshala",
      qualification: "10th Pass",
      interest: "Cricket",
    },
    {
      id: 4,
      name: "Ankita",
      address: "Delhi",
      qualification: "Graduated",
      interest: "Software Engineering",
    },
    {
      id: 5,
      name: "Neeraj",
      address: "Dharamshala",
      qualification: "12th Pass",
      interest: "Bhaiya Cricket",
    },
  ];
  return (
    <div
      style={{ display: "flex", gap: "2rem", flexWrap: "wrap", width: "80vw" }}
    >
      {/*
        data.map((object) => {
        return (
          <Child
            key={object.id}
            name={object.name}
            address={object.address}
            qualification={object.qualification}
            interest={object.interest}
          />
        );
      })*/}
      {data.map((object) => {
        return <Child key={object.id} {...object} />;
      })}
    </div>
  );
};

export default Parent;
