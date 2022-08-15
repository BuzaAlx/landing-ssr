import React, { useState, useEffect } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
  };
};

const usePagination = (givenData, perPage) => {
  const [curentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(perPage);

  const numberOfPages = Math.ceil(givenData.length / postsPerPage);
  let paginationArray = Array(numberOfPages).fill("");

  let paginatedDataMarkUp;

  if (!givenData) {
    return <h1>loading..</h1>;
  }

  if (givenData) {
    paginatedDataMarkUp = givenData.slice(
      (curentPage - 1) * postsPerPage,
      curentPage * postsPerPage - 1
    );
  }

  const handleDecrease = () => {
    setCurrentPage((page) => page - 1);
  };

  const handleIncrease = () => {
    setCurrentPage((page) => page + 1);
  };

  return [
    paginatedDataMarkUp,
    curentPage,
    handleDecrease,
    handleIncrease,
    numberOfPages,
    paginationArray,
    setCurrentPage,
  ];
};

export default usePagination;
