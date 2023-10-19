import { Form, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "../../../lib/http/post";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getData, setGetData] = useState([]);
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

  const postData = {
    username: username,
    password: password,
  };

  useEffect(() => {}, [remember, getData]);

  function post() {
    Post("login", postData, setGetData).then((e) => {
      setGetData(e);
      if (e) {
        console.log(getData);
        if (remember == true) {
          localStorage.setItem("token", e.token);
          localStorage.setItem("user_id", e.user.id);
        } else if (remember == false) {
          sessionStorage.setItem("token", e.token);
          sessionStorage.setItem("user_id", e.user.id);
        }
      }
      console.log("wrong username or password");
    });
  }

  useEffect(() => {}, [remember]);

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