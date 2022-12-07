import React from "react";
import { useParams } from "react-router-dom";

const Videos = () => {
  const { keyword } = useParams();
  return <div>{keyword ? `${keyword}` : "Popular vidoes"}</div>;
};

export default Videos;
