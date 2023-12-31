/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { RouteMapping } from "../../lib/mapping";
import Get from "../../lib/http/get";
import BookPages from "./sections/BookPages";
import Pagination from "../../lib/pagination";
import IndividualBook from "../../subcomponents/IndividualBook/IndividualBook";

import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("books");

  const bookRoutes = books.map((book) => {
    return {
      path: `id/${book.id}`,
      element: <IndividualBook book={book} />,
    };
  });

  function sortBy(e) {
    setSort(e.target.value);
  }

  //get books from server
  async function getBooks() {
    const data = await Get(`${sort}?page=${pageValue}&page_size=12`);

    if (data.data) {
      setBooks(data.data);
      setPages(data.meta.links);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getBooks();
  }, [pageValue, sort]);

  return (
    <>
      <Routes>{RouteMapping(bookRoutes, [])}</Routes>
      <Segment className="container">
        <div className="container flex">
          <h1>Books</h1>
          <div className="px-1 check-group">
            <div className="ml-2">
              <input type="radio" name="display-by" value="books:name" onClick={sortBy} />
              <label className="ml-1">by Name</label>
            </div>
            <div className="ml-2">
              <input type="radio" name="display-by" value="books:latest" onClick={sortBy} />
              <label className="ml-1">by Latest</label>
            </div>
          </div>
        </div>
      </Segment>
      <div>
        {loading == true ? (
          <Segment>
            <img src="/loader.gif" alt="" className="loader" />
          </Segment>
        ) : (
          <>
            {books != [] ? (
              <>
                <Routes>
                  <Route path="*" element={<BookPages books={books} />} />
                  {RouteMapping}
                </Routes>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
      <Segment>{books != [] ? <>{Pagination(pages, "books", setPageValue)}</> : <>no links found</>}</Segment>
    </>
  );
};

export default Books;
