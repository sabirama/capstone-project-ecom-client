import LogIn from "../../../pages/authentication-form/forms/Login";
import Register from "../../../pages/authentication-form/forms/Register";

const authroute = [
  {
    name: "LOG-IN",
    path: "",
    element: <LogIn />,
  },
  {
    name: "REGISTER",
    path: "register",
    element: <Register />,
  },
];

export default authroute;
