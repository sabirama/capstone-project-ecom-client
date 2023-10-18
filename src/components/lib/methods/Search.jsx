//search fucntion

import { useEffect } from "react";

const Search = (setter) => {
  useEffect(() => {
    //Add event listener to get value from session storage with key search
    window.addEventListener("search", function () {
      setter(sessionStorage.getItem("search"));
    });

    return () => {
      //Remove the event listener for seesion storage
      window.removeEventListener("search", function () {});
    };
  }, [setter]); // The empty dependency array ensures it runs only once on mount
};

export default Search;
