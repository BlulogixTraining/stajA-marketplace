import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Pagination({ current, pages, onPageChange }) {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= pages; i++) {
      paginationItems.push(
        <li key={i} className={`page-item ${current === i ? "active" : ""}`}>
          <button
            className={`page-link ${
              current === i ? "bg-dark text-light" : "text-dark"
            }`} // Change color based on current page
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination d-flex justify-content-center gap-2">
        <li className="page-item">
          <button
            className="page-link text-dark align-items-center d-flex gap-1"
            onClick={() => handlePageChange(current - 1)}
            disabled={current === 1}
          >
            {" "}
            <FaArrowLeft className="fs-6" />
            Previous
          </button>
        </li>
        {renderPaginationItems()}
        <li className="page-item">
          <button
            className="page-link text-dark align-items-center d-flex gap-1"
            onClick={() => handlePageChange(current + 1)}
            disabled={current === pages}
          >
            Next
            <FaArrowRight className="fs-6" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
