import User from "../../pages/user/User";
import About from "../../pages/about/About";
import Books from "../../pages/books/Books";
import Authentication from "../../pages/authentication-form/Authentication";
import SearchBook from "../../pages/search/SearchBook";
import Home from "../../pages/home/Home";

const mainroutes = [
  {
    name: "HOME",
    path: "*",
    element: <Home />,
  },
  {
    name: "LOG-IN/SIGN-UP",
    path: "/log-in/*",
    element: <Authentication />,
  },
  {
    name: "ABOUT",
    path: "/about/*",
    element: <About />,
  },
  {
    name: "BOOKS",
    path: "/books/*",
    element: <Books />,
  },
  {
    name: "USER",
    path: "/user/*",
    element: <User />,
  },
  {
    name: "SEARCH",
    path: "/search/*",
    element: <SearchBook />,
  },
];

export default mainroutes;
