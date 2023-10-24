import { useState, useEffect } from "react";
import { Form, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Post from "../../../lib/http/post";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [remember, setRemember] = useState(false);
  const [authorize, setAuthorize] = useState(true);
  const postData = {
    first_name: firstname,
    last_name: lastname,
    username: username,
    email: email,
    gender: gender,
    birthdate: birthday,
    password: password,
    password_confirmation: confirmPassword,
  };

  function rememberMe() {
    setRemember(!remember);
  }

  async function logIn() {
    await post();
    setIsLoggingIn(true);
    setAuthorize(false);
  }

  async function post() {
    await Post("register", postData, setGetData);
  }

  useEffect(() => {
    if (getData.user != null) {
      if (remember == true) {
        localStorage.setItem("token", getData.token);
        localStorage.setItem("user_id", getData.user.id);
        sessionStorage.setItem("token", getData.token);
        sessionStorage.setItem("user_id", getData.user.id);
      } else if (remember == false) {
        sessionStorage.setItem("token", getData.token);
        sessionStorage.setItem("user_id", getData.user.id);
      }
      sessionStorage.setItem("register", true);
      window.dispatchEvent(new Event("loggedIn"));
      window.location.href = "/";

      setIsLoggingIn(false);
    }
  }, [isLoggingIn]);

  return (
    <Segment>
      <h1>Register</h1>
      <Form className="form register">
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="First name"
            placeholder="First name"
            required={true}
            onChange={(e) => setfirstName(e.target.value)}
          />
          <Form.Field
            control={Input}
            label="Last name"
            placeholder="Last name"
            required={true}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Username"
            placeholder="Create a username"
            required={true}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Field
            control={Input}
            label="Email"
            type="email"
            placeholder="Email"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Birthday"
            type="date"
            required={true}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>

        <strong>Gender</strong>
        <Form.Group widths="equal">
          <span className="form-element">
            <input
              type="radio"
              name="gender"
              value="male"
              required={true}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Male</label>
          </span>
          <span className="form-element">
            <input
              type="radio"
              name="gender"
              value="Female"
              required={true}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Female</label>
          </span>
          <span className="form-element">
            <input
              type="radio"
              name="gender"
              value="others"
              required={true}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Others</label>
          </span>
          <span className="form-element">
            <input type="radio" name="gender" value="prefer not to say" onChange={(e) => setGender(e.target.value)} />
            <label>Prefer not to say</label>
          </span>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            type="password"
            label="Password"
            placeholder="Password"
            required={true}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
          <Form.Field
            control={Input}
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setconfirmPassword(e.target.value)}
            autoComplete="on"
          />
        </Form.Group>

        <Form.Group className="form-submit">
          <span className="form-element">
            <input type="checkbox" onChange={rememberMe} />
            <span>Remember me</span>
          </span>
          <button className="form-button form-element" onClick={logIn}>
            Register
          </button>
        </Form.Group>
      </Form>
      <span>
        Already have an account? <Link to="/log-in/">Log-in.</Link>
      </span>

      <Segment className="container">
        {authorize == true ? (
          <>Please input your username and password</>
        ) : (
          <>Wrong credentials. Please input your details again.</>
        )}
      </Segment>
    </Segment>
  );
};

export default Register;
