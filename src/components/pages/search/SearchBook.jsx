import { useEffect, useState } from "react";
import { Segment, Grid } from "semantic-ui-react";
import Search from "../../subcomponents/Search";
import Get from "../../lib/http/get";
import BookDisplay from "../../subcomponents/BookDisplay";

const SearchBook = () => {
  const [searchVal, setSeatchVal] = useState("");
  const [searchBookResult, setSearchBookResult] = useState("");
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  Search(setSeatchVal);

  async function searchFor() {
    setSearching(true);
    try {
      const data = await Get(`search?val=${searchVal}&page_size=30`);
      setSearchBookResult(data.books);
      console.log(data);
    } catch (e) {
      setError(e);
    }
    setSearching(false);
  }

  useEffect(() => {
    searchFor();
  }, [searchVal]);

  useEffect(() => {
    console.log(["books", searchBookResult]);
  }, [searchBookResult]);

  return (
    <>
      <div>
        <Segment>
          {searching ? (
            <>
              Searching for books with keyword <strong>{searchVal}</strong>.
            </>
          ) : searchBookResult ? (
            <Grid stackable columns={4}>
              <Grid.Row className="book-row">
                {searchBookResult.map((book, index) => {
                  return <BookDisplay key={index} book={book} />;
                })}
              </Grid.Row>
            </Grid>
          ) : error ? (
            <>Sorry Were Having Trouble With Your Search Request.</>
          ) : null}
        </Segment>
      </div>
    </>
  );
};

export default SearchBook;
