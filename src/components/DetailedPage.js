import React from "react";
import { useParams } from "react-router-dom";
const DetailedPage = () => {
  const params = useParams();
  return <div>DetailedPage - {params.id}</div>;
};

export default DetailedPage;
