import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paginate = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(props.pages / 10) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Pagination>
        <Pagination.First onClick={() => props.nextPage(1)} />
        {props.currentPage > 1 && (
          <Pagination.Prev
            onClick={() => props.nextPage(props.currentPage - 1)}
          />
        )}
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === props.currentPage}
            onClick={() => props.nextPage(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        {props.currentPage < pageNumbers.length && (
          <Pagination.Next
            onClick={() => props.nextPage(props.currentPage + 1)}
          />
        )}
        <Pagination.Last onClick={() => props.nextPage(pageNumbers.length)} />
      </Pagination>
    </div>
  );
};

export default Paginate;
