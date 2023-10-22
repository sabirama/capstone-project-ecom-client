import { Link } from "react-router-dom";

const Pagination = (pages, prefix, pageSetter) => {
  function setPage(e) {
    pageSetter(e.target.name);
  }
  return (
    <div className="container flex">
      {pages.map((page, index) => {
        if (index == 0) {
          return (
            <Link key={index} to={`/${prefix}`} name={index} onClick={setPage} className="pagination-link box-accent">
              1
            </Link>
          );
        } else {
          return (
            <Link
              key={index}
              to={`/${prefix}/${index + 1}`}
              name={index}
              onClick={setPage}
              className="pagination-link box-accent"
            >
              {index + 1}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
