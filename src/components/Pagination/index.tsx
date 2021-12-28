import React from "react";
import { Container } from "./styles";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (number: number) => void;
}

export function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}: PaginationProps) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === currentPage ||
      i === totalPages ||
      i === currentPage + 1 ||
      i === currentPage + 2 ||
      i === currentPage - 1 ||
      i === currentPage - 2
    ) {
      pageNumbers.push(i);
    }
  }

  return (
    <Container>
      {pageNumbers.map((number) => {
        if (currentPage === number) {
          return (
            <li className="isCurrentPage" key={number}>
              <a className="isCurrentPage" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        } else if (
          number === currentPage + 2 &&
          currentPage !== totalPages - 2 &&
          totalPages !== 3
        ) {
          return (
            <React.Fragment key={number}>
              <li>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
              <p>&raquo;</p>
            </React.Fragment>
          );
        } else if (number === currentPage - 2 && currentPage !== 3) {
          return (
            <React.Fragment key={number}>
              <p>&laquo;</p>
              <li>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={number}>
              <li>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
            </React.Fragment>
          );
        }
      })}
    </Container>
  );
}
