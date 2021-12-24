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

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
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
        } else {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          );
        }
      })}
    </Container>
  );
}
