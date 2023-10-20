import { Form, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../../lib/http/post";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [remember, setRremember] = useState(false);

  function userChange(e) {
    setUsername(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
  }
  function rememberMe() {
    setRremember(!remember);
  }

  async function logIn() {
    await post();
    setIsLoggedIn(true);
  }

  //go to homepage after log-in/register

  const postData = {
    username: username,
    password: password,
  };

  async function post() {
    await Post("login", postData, setGetData);
  }

  useEffect(() => {
    if (isLoggedIn == true) {
      if (remember == true) {
        localStorage.setItem("token", getData.token);
        sessionStorage.setItem("token", getData.token);
      } else if (remember == false) {
        sessionStorage.setItem("token", getData.token);
      }
      if (getData.token != null) {
        window.dispatchEvent(new Event("loggedIn"));
        window.location.href = "/";
      }
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  return (
    <Segment>
      <h1>Log In</h1>

      <Form className="form log-in">
        <Form.Field control={Input} label="Username" placeholder="Username" onChange={userChange} />

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
          <button className="form-button form-element" onClick={logIn}>
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
