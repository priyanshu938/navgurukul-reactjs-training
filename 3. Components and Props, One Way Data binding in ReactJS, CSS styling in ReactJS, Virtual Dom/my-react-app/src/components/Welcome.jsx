import React from "react";
import styles from "./Welcome.module.css";

const Welcome = ({ name, roll, children }) => {
  return (
    <>
      <h1 className={styles.heading}>Name : {name}!</h1>
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
