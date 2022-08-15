import React from "react";
import * as Styled from "./pagination.styles";

const Pagination = ({
  curentPage,
  handleDecrease,
  paginationArray,
  setCurrentPage,
  numberOfPages,
  handleIncrease,
}) => (
  <nav className="pagination">
    <Styled.PaginationList>
      {curentPage > 1 && (
        <Styled.PageLink onClick={handleDecrease}>
          <a>Prev</a>
        </Styled.PageLink>
      )}
      {paginationArray.map((_, i) => {
        return (
          <Styled.PageLink
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            active={curentPage === i + 1}
          >
            <a>{i + 1}</a>
          </Styled.PageLink>
        );
      })}
      {curentPage < numberOfPages && (
        <Styled.PageLink onClick={handleIncrease}>
          <a>Next</a>
        </Styled.PageLink>
      )}
    </Styled.PaginationList>
  </nav>
);

export default Pagination;
