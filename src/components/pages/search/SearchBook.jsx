import { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Search from "../../subcomponents/Search";
import Get from "../../lib/http/get";
import BookDisplay from "../../subcomponents/BookDisplay";

const SearchBook = () => {
  const [searchVal, setSeatchVal] = useState("");
  const [searchBookResult, setSearchBookResult] = useState("");
  const [searchAuthorResult, setSearchAuthorResult] = useState("");

  Search(setSeatchVal);

  async function searchFor() {
    await Get(`search?val=${searchVal}`).then((e) => {
      setSearchAuthorResult(e.author.data);
      setSearchBookResult(e.books.data);
    });
    console.log(searchBookResult);
  }

  useEffect(() => {
    searchFor();
  }, [searchVal]);

  useEffect(() => {
    console.log(searchBookResult);
    console.log(searchAuthorResult);
  }, [searchAuthorResult, searchBookResult]);

  return (
    <>
      <div>{searchVal == "" ? <></> : <h3>Search results for keyword ({searchVal}).</h3>}</div>
      <Segment>
        {searchBookResult == [] ? (
          <>SEARCHING</>
        ) : (
          <>
            {/* {searchBookResult.map((book, index) => {
              return <BookDisplay key={index} book={book} />;
            })} */}
          </>
        )}
      </Segment>
      <Segment>{searchAuthorResult == [] ? <>SEARCHING</> : <>GOOD</>}</Segment>
    </>
  );
};

export default SearchBook;
