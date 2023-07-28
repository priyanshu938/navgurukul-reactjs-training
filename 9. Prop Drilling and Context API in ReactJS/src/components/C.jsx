import React, { useContext } from "react";
import { PassValuesContext } from "../contexts/PassValuesContext";

const C = () => {
  const { c } = useContext(PassValuesContext);
  return (
    <div>
      <h1>Hello {c} from C.</h1>
    </div>
  );
};
export default C;
