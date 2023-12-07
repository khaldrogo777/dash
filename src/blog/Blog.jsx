import React from "react";
// import { Outlet } from "react-router-dom";

const Blog = () => {
  const array = ["1", "2", "3", "4", "5"];
  return (
    <>
      {array.map((key) => {
        return <h3>{key} </h3>;
      })}
    </>
  );
};

export default Blog;
