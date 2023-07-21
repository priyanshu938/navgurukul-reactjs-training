import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div>
      404 not found
      <button onClick={handleClick}>Back to home</button>
    </div>
  );
};

export default NotFound;
