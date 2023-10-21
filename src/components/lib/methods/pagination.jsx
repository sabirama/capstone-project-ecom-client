import { Link } from "react-router-dom";

const Pagination = (pages, prefix, pagesetter) => {
  return (
    <div className="container flex">
      {pages.map((page, index) => {
        if (index == 0) {
          return (
            <Link key={index} to={`/${prefix}`}>
              1
            </Link>
          );
        } else {
          return (
            <div key={index}>
              <Link to={`/${prefix}/${index + 1}`} value={index} onClick={pagesetter}>
                {index + 1}
              </Link>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
