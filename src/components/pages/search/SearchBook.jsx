import { useEffect, useState } from "react";
import Search from "../../subcomponents/Search";
import Get from "../../lib/http/get";

const SearchBook = () => {
  const [searchVal, setSeatchVal] = useState("");
  const [searchResult, setSearchResult] = useState("");

  Search(setSeatchVal);

  async function searchFor() {
    await Get(`search?val=${searchVal}`).then((e) => {
      setSearchResult(e);
    });
  }

  useEffect(() => {
    searchFor();
    setSeatchVal("");
    console.log(searchResult);
  }, [searchVal]);

  return <div>{searchVal == "" ? <></> : <h3>Search results for keyword ({searchVal}).</h3>}</div>;
};

export default SearchBook;
