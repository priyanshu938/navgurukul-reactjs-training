import React, { useContext } from "react";
import B from "./B";
import { PassValuesContext } from "../contexts/PassValuesContext";

const A = () => {
  const { a } = useContext(PassValuesContext);
  return (
    <div>
      <h1>Hello {a} from A.</h1>
      <B />
    </div>
  );
};

export default A;
