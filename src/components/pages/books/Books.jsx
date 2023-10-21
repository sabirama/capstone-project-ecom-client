import { Routes, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { RouteMapping } from "../../lib/methods/mapping";
import Pagination from "../../lib/methods/pagination";
import IndividualBook from "./sections/IndividualBook";
import BooksMain from "./sections/BooksMain";
import Get from "../../lib/http/get";

import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageLinks, setPageLinks] = useState([]);
  const [bookPage, setBookPage] = useState(1);
  const [booksCollection, setBooksCollection] = useState([]);

  //get books from server
  async function getBooks() {
    const { data } = await Get("books?page_size=20");
    setPageLinks(data.meta.links);
    setBooks(data.data);
  }

  async function bookPages() {
    const { data } = await Get(`books?page=${bookPage}&page_size=20`);
    setBooksCollection(data.data);
  }

  const bookRoutes = books.map((book) => {
    return {
      path: book.title,
      element: <IndividualBook book={book} />,
    };
  });

  const pagesRoutes = pageLinks.map((page, index) => {
    if (index == 0) {
      return {
        name: "0",
      };
    } else {
      return {
        path: `${index + 1}`,
        element: <BooksMain books={booksCollection} pages={pageLinks} />,
      };
    }
  });

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    bookPages();
    console.log(booksCollection);
  }, [bookPage]);

  useEffect(() => {
    console.log(books);
    console.log(pageLinks);
  }, [books]);

  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<BooksMain books={books} pages={pageLinks} />} />
        </Routes>
        {RouteMapping(bookRoutes, [])}
        {RouteMapping(pagesRoutes, ["0"])}
      </>
      {/* <button onClick={}> Test </button> */}
      <Segment>{Pagination(pageLinks, "books", setBookPage)}</Segment>
    </div>
  );
};

export default Books;
