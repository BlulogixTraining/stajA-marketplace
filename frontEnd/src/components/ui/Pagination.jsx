import React from "react";

function Pagination({ current, pages, onPageChange }) {
  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= pages; i++) {
      paginationItems.push(
        <li key={i} className={`page-item ${i === current ? "active" : ""}`}>
          <button
            className={`page-link ${i === current ? "active" : ""}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination d-flex justify-content-center gap-2">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Previous
          </button>
        </li>
        {renderPaginationItems()}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
