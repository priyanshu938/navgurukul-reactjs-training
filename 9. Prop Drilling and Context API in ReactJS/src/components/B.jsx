import React, { useContext } from "react";
import C from "./C";
import { PassValuesContext } from "../contexts/PassValuesContext";

const B = () => {
  const { b } = useContext(PassValuesContext);
  return (
    <div>
      <h1>Hello {b} from B.</h1>
      <C />
    </div>
  );
};

export default B;
