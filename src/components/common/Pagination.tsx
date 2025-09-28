import "../styles/paginationStyles.css";

import type { ReactElement } from "react";

type PaginationProps = {
  page: number;
  handlePage: (type: string) => void;
  pages: number;
};
export default function Pagination({
  page,
  handlePage,
  pages,
}: PaginationProps): ReactElement {
  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-btn"
        onClick={() => handlePage("prev")}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="page-text">
        &nbsp;&nbsp;Page {page} of {pages}
      </span>
      <button
        className="pagination-btn"
        onClick={() => handlePage("next")}
        disabled={page === pages}
      >
        Next
      </button>
    </div>
  );
}
