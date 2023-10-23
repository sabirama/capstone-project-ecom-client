import { Link } from "react-router-dom";

const Pagination = (pages, prefix, pageSetter) => {
  function setPage(e) {
    pageSetter(e.target.name);
  }
  return (
    <div className="container flex">
      {pages.map((page, index) => {
        if (index == 0) {
          return;
        } else {
          return (
            <Link
              key={index}
              to={`/${prefix}/${index}`}
              name={page.label}
              onClick={setPage}
              className="pagination-link box-accent"
            >
              {index}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
