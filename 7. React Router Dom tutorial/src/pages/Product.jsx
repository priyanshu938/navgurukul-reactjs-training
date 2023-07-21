import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id, name } = useParams();
  return (
    <div>
      Product :{id}&nbsp;
      {name}
    </div>
  );
};

export default Product;
