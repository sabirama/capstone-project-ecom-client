import { Form, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../../lib/http/post";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [remember, setRremember] = useState(false);
  const [authorize, setAuthorize] = useState(true);
  const postData = {
    username: username,
    password: password,
  };

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

    setIsLoggingIn(true);
  }

  async function post() {
    await Post("login", postData, setGetData);
    setAuthorize(false);
  }

  useEffect(() => {
    if (getData.user != null) {
      if (remember == true) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        sessionStorage.setItem("token", getData.token);
        sessionStorage.setItem("user_id", getData.user.id);
      } else if (remember == false) {
        sessionStorage.setItem("token", getData.token);
        sessionStorage.setItem("user_id", getData.user.id);
      }
      window.dispatchEvent(new Event("loggedIn"));
      window.location.href = "/";
      setIsLoggingIn(false);
    } else {
      return () => {};
    }
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
  }, [isLoggingIn]);

  return (
    <Segment>
      {localStorage.getItem("username") ? (
        <>
          <div className="flex">
            <button className="m-0" onClick={logIn}>
              Log in as <strong>{username}?</strong>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
      <Segment>
        <h1>Log In</h1>

        <Form className="form log-in">
          <Form.Field control={Input} label="Username" placeholder="Username" required={true} onChange={userChange} />

          <Form.Field
            control={Input}
            type="password"
            label="Password"
            placeholder="Password"
            autoComplete="on"
            required={true}
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

      <Segment className="container">
        {authorize == true ? (
          <>Please input your username and password</>
        ) : (
          <>Wrong username or password. Please input your username and password again.</>
        )}
      </Segment>
    </Segment>
  );
};

export default LogIn;
