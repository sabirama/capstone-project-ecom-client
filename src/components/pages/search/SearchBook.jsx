import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { RouteMapping } from "../../lib/mapping";
import Get from "../../lib/http/get";
import Search from "./components/Search";
import BookDisplay from "../../subcomponents/BookDisplay";
import IndividualBook from "../../subcomponents/IndividualBook/IndividualBook";

const SearchBook = () => {
  const [searchVal, setSeatchVal] = useState("");
  const [books, setBooks] = useState([]);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  const bookRoutes = books.map((book) => {
    return {
      path: `id/${book.id}`,
      element: <IndividualBook book={book} />,
    };
  });

  Search(setSeatchVal);

  async function searchFor() {
    setSearching(true);
    try {
      const data = await Get(`search?val=${searchVal}&page_size=30`);
      setBooks(data.books);
    } catch (e) {
      setError(e);
    }
    setSearching(false);
  }

  useEffect(() => {
    searchFor();
  }, [searchVal]);

  return (
    <>
      {searching == true ? (
        <>
          <div>
            Searching for books with keyword <strong>{searchVal}</strong>.
          </div>
          <div className="flex content-center">
            <img src="/loader.gif" alt="" className="loader" />
          </div>
        </>
      ) : books ? (
        <>
          <Routes>{RouteMapping(bookRoutes, [])}</Routes>
          <Grid stackable columns={5}>
            <Grid.Row className="book-row">
              {books.map((book, index) => {
                return <BookDisplay key={index} book={book} />;
              })}
            </Grid.Row>
          </Grid>
        </>
      ) : error ? (
        <>Sorry Were Having Trouble With Your Search Request.</>
      ) : null}
    </>
  );
};

export default SearchBook;
