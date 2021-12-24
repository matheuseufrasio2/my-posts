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
    if (
      i === 1 ||
      i === currentPage ||
      i === totalPosts / postsPerPage ||
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
        } else if (number === currentPage + 2 && currentPage !== 23) {
          return (
            <>
              <li key={number}>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
              <p>&raquo;</p>
            </>
          );
        } else if (number === currentPage - 2 && currentPage !== 3) {
          return (
            <>
              <p>&laquo;</p>
              <li key={number}>
                <a onClick={() => paginate(number)}>{number}</a>
              </li>
            </>
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
