import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { RouteMapping } from "../../lib/methods/mapping";
import IndividualBook from "./sections/IndividualBook";
import BooksGrid from "./sections/BooksGrid";
import Get from "../../lib/http/get";

import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [pageLinks, setPageLinks] = useState([]);

  //get books from server
  async function getBooks() {
    const { data } = await Get("books?page_size=20");
    setPageLinks(data.meta.links);
    setBooks(data.data);
  }

  const bookRoutes = books.map((book) => {
    return {
      path: book.title,
      element: <IndividualBook book={book} />,
    };
  });

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    console.log(books);
    console.log(pageLinks);
  }, [books]);

  return (
    <div>
      <>
        <Routes>
          <Route path="" element={<BooksGrid books={books} />} />
        </Routes>
        {RouteMapping(bookRoutes, [])}
      </>
    </div>
  );
};

export default Books;
