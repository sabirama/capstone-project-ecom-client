import { Form, Input, Segment } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../../lib/http/post";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);
  const [remember, setRremember] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function userChange(e) {
    setUsername(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
  }
  function rememberMe() {
    setRremember(!remember);
  }

  function reRoute() {
    if (loggedIn == true) {
      navigate("/");
    }
  }

  const postData = {
    username: username,
    password: password,
  };

  useEffect(() => {}, [remember, getData]);

  function post() {
    Post("login", postData, setGetData).then((e) => {
      console.log(e.data);
      setLoggedIn(true);
      if (remember == true) {
        localStorage.setItem("token", e.data.token);
        localStorage.setItem("user_id", e.data.user.id);
        console.log(e.user);
        return e.user;
      } else if (remember == false) {
        sessionStorage.setItem("token", e.data.token);
        sessionStorage.setItem("user_id", e.data.user.id);
        console.log(e.user);

        return e.user;
      }

      console.log("error");
    });
  }
  useEffect(() => {
    reRoute();
  }, [loggedIn]);

  return (
    <Segment>
      <h1>Log In</h1>

      <Form className="form log-in">
        <Form.Field control={Input} label="Username" placeholder="Create a username" onChange={userChange} />

        <Form.Field
          control={Input}
          type="password"
          label="Password"
          placeholder="Password"
          autoComplete="on"
          onChange={passChange}
        />

        <Form.Group className="form-submit">
          <span className="form-element">
            <input type="checkbox" onClick={rememberMe} value={remember} />
            <span>Remember me</span>
          </span>
          <Link className="form-element">Forgot password?</Link>
          <button className="form-button form-element" onClick={post}>
            Log-in
          </button>
        </Form.Group>
      </Form>
      <span>
        Don`t have an account? <Link to="/log-in/register">Register</Link>
      </span>
    </Segment>
  );
};

export default LogIn;
