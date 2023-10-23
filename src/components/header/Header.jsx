import { useEffect, useState } from "react";
import { Menu, Input, Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../lib/http/post";

import "./Header.css";
const Header = () => {
  const [searchRequest, setSearchRequest] = useState("");
  const [visible, setVisible] = useState("hidden");
  const [loggedIn, setLoggedIn] = useState("link-hidden");
  const [logOutlink, setLogOutLink] = useState("Link-show");
  const navigate = useNavigate();

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
    navigate("/search");
  }

  useEffect(() => {
    isLoggedIn();

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
    <div className="header-container">
      <button className="nav-button ui" onClick={toggleNav}>
        <Icon name="bars" />
      </button>
      <Menu className="container home">
        <Menu.Item as={Link} to="/" className="links" onClick={closeNav}>
          <Icon name="home" />
          <p className="hover-color-primary">Home</p>
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

      {/* Navigation responsive */}
      <Menu className={`container nav-links nav-bar ${visible}`}>
        <Menu.Item as={Link} to="/books" className="links" onClick={closeNav}>
          <Icon name="leanpub" />
          <p className="hover-color-primary">Books</p>
        </Menu.Item>
        <Menu.Item as={Link} to="/about" className="links" onClick={closeNav}>
          <Icon name="info" />
          <p className="hover-color-primary">About</p>
        </Menu.Item>

        <Menu.Item as={Link} to="/user/cart" className={`links ${loggedIn}`} onClick={closeNav}>
          <Icon name="cart" />
          <p className="hover-color-primary">Cart</p>
        </Menu.Item>

        <Menu.Item as={Link} to="/user" className={`links ${loggedIn}`} onClick={closeNav}>
          <Icon name="user circle outline" />
          <p className="hover-color-primary">User</p>
        </Menu.Item>

        <Menu.Item as={Link} to="/log-in" className={`links ${logOutlink}`} onClick={closeNav}>
          <p className="hover-color-primary">Log in</p>
        </Menu.Item>
        <Menu.Item as={Link} className={`links ${loggedIn}`} onClick={logOut}>
          <p className="hover-color-primary">Log out</p>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
