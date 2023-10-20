import Home from "../../pages/home/Home";
import User from "../../pages/user/User";
import About from "../../pages/about/About";
import Books from "../../pages/books/Books";
import Authentication from "../../pages/authentication-form/Authentication";

const mainroutes = [
  {
    name: "HOME",
    path: "/",
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
];

export default mainroutes;
