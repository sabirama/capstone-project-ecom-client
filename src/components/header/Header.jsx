import { Menu, Input, Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import Post from "../lib/http/post";

const Header = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [visible, setVisible] = useState("hidden");
  const [loggedIn, setLoggedIn] = useState("link-hidden");
  const [logOutlink, setLogOutLink] = useState("Link-show");
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  function isLoggedIn() {
    if (
      sessionStorage.getItem("token") == null ||
      sessionStorage.getItem("token") == "null" ||
      sessionStorage.getItem("token") == "undefined"
    ) {
      setLoggedIn("link-hidden");
      setLogOutLink("link-show");
    } else {
      setLoggedIn("link-show");
      setLogOutLink("link-hidden");
    }
  }

  async function logOut() {
    await Post("logout").then(() => {
      sessionStorage.clear();
      setLogOutLink("link-show");
      setLoggedIn("link-hidden");
      navigate("/");
      console.log(token);
      console.log("log out");
    });
  }

  function toggleNav() {
    if (visible == "show") {
      setVisible("hidden");
    } else if (visible == "hidden") {
      setVisible("show");
    }
  }

  function closeNav() {
    setVisible("hidden");
  }

  //search bar value handler
  function changeHandler(e) {
    setSearchRequest(e.target.value);
  }

  //adding event trigger on enter
  // eslint-disable-next-line no-unused-vars
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchRequest(e.target.value);
    }
  };

  //store data to session storage for other object element to use
  function sendData() {
    // eslint-disable-next-line react/prop-types
    sessionStorage.setItem("search", searchRequest);
    window.dispatchEvent(new Event("search"));
    console.log(searchRequest);
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  useEffect(() => {
    //listen to event log in
    window.addEventListener("loggedIn", function () {
      setLoggedIn("link-show");
      setLogOutLink("link-hidden");
    });

    return () => {
      //Remove the event listener for seesion storage
      window.removeEventListener("LoggedIn", function () {});
    };
  }, []);

  return (
    <>
      <button className="nav-button ui" onClick={toggleNav}>
        <Icon name="bars" />
      </button>
      <Menu className="container">
        <Menu.Item as={Link} to="/" className="home links" onClick={closeNav}>
          <Icon name="home" />
        </Menu.Item>
      </Menu>
      <Menu>
        <Input placeholder="Search..." className="search" onChange={changeHandler}>
          <input type="text" />
          <button className="search-button" onClick={sendData}>
            <i className="search icon" />
          </button>
        </Input>
      </Menu>

      <Menu className={`container nav-links nav-bar ${visible}`}>
        <Menu.Item as={Link} to="/books" className="links" onClick={closeNav}>
          <Icon name="leanpub" />
          Books
        </Menu.Item>
        <Menu.Item as={Link} to="/about" className="links" onClick={closeNav}>
          <Icon name="info" />
          About
        </Menu.Item>

        <Menu.Item as={Link} to="/user/cart" className={`links ${loggedIn}`} onClick={closeNav}>
          <Icon name="cart" />
          Cart
        </Menu.Item>

        <Menu.Item as={Link} to="/user" className={`links ${loggedIn}`} onClick={closeNav}>
          <Icon name="user circle outline" />
          User
        </Menu.Item>

        <Menu.Item as={Link} to="/log-in" className={`links ${logOutlink}`} onClick={closeNav}>
          Log-in
        </Menu.Item>
        <Menu.Item as={Link} className={`links ${loggedIn}`} onClick={logOut}>
          Log-out
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
