import React, { useState } from "react";
import styles from "./Welcome.module.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const Welcome = () => {
  const [stateVariable, setStateVariable] = useState("");

  return (
    <>
      <h1 className={styles.heading}>
        Welcome ReactJS&nbsp;
        <ThumbUpAltIcon className={styles.thumbIcon} />
      </h1>
    </>
  );
};

export default Welcome;
