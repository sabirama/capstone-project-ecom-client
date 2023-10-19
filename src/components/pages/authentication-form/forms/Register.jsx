import { useState, useEffect } from "react";
import { Form, Input, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Post from "../../../lib/http/post";

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [getData, setGetData] = useState([]);
  const [remember, setRremember] = useState(false);

  function firstnameChange(e) {
    setfirstName(e.target.value);
  }

  function lastnameChange(e) {
    setlastName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function userChange(e) {
    setUsername(e.target.value);
  }

  function genderChange(e) {
    setGender(e.target.value);
  }

  function birthChange(e) {
    setBirthday(e.target.value);
  }

  function passChange(e) {
    setPassword(e.target.value);
  }

  function confirmpassChange(e) {
    setconfirmPassword(e.target.value);
  }

  function rememberMe() {
    setRremember(!remember);
  }

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

  useEffect(() => {}, [remember, getData]);

  function post() {
    console.log(postData);
    Post("register", postData, setGetData).then((e) => {
      if (e) {
        console.log(getData);
        if (remember == true) {
          localStorage.setItem("token", e.token);
          localStorage.setItem("user_id", e.user.id);
        } else if (remember == false) {
          sessionStorage.setItem("token", e.token);
          sessionStorage.setItem("user_id", e.user.id);
        }
      } else {
        console.log("wrong credentials");
      }
    });
  }

  return (
    <Segment>
      <h1>Register</h1>
      <Form className="form register">
        <Form.Group widths="equal">
          <Form.Field control={Input} label="First name" placeholder="First name" onChange={firstnameChange} />
          <Form.Field control={Input} label="Last name" placeholder="Last name" onChange={lastnameChange} />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field control={Input} label="Username" placeholder="Create a username" onChange={userChange} />
          <Form.Field control={Input} label="Email" placeholder="Email" onChange={emailChange} />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field control={Input} label="Birthday" type="date" onChange={birthChange} />
        </Form.Group>

        <strong>Gender</strong>
        <Form.Group widths="equal">
          <span className="form-element">
            <input type="radio" name="gender" value="male" onChange={genderChange} />
            <label>Male</label>
          </span>
          <span className="form-element">
            <input type="radio" name="gender" value="Female" onChange={genderChange} />
            <label>Female</label>
          </span>
          <span className="form-element">
            <input type="radio" name="gender" value="others" onChange={genderChange} />
            <label>Others</label>
          </span>
          <span className="form-element">
            <input type="radio" name="gender" value="prefer not to say" onChange={genderChange} />
            <label>Prefer not to say</label>
          </span>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            type="password"
            label="Password"
            placeholder="Password"
            onChange={passChange}
            autoComplete="on"
          />
          <Form.Field
            control={Input}
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            onChange={confirmpassChange}
            autoComplete="on"
          />
        </Form.Group>

        <Form.Group className="form-submit">
          <span className="form-element">
            <input type="checkbox" onChange={rememberMe} />
            <span>Remember me</span>
          </span>
          <button className="form-button form-element" onClick={post}>
            Register
          </button>
        </Form.Group>
      </Form>
      <span>
        Already have an account? <Link to="/log-in/">Log-in.</Link>
      </span>
    </Segment>
  );
};

export default Register;