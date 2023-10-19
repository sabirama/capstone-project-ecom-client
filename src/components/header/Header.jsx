import { Menu, Input, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [request, setRequest] = useState("");
  const [visible, setVisible] = useState("hidden");

  function toggleNav() {
    if (visible == "show") {
      setVisible("hidden");
    } else if (visible == "hidden") {
      setVisible("show");
    }
  }

  function changeHandler(e) {
    setRequest(e.target.value);
  }

  //adding event trigger on enter
  // eslint-disable-next-line no-unused-vars
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setRequest(e.target.value);
    }
  };

  //store data to session storage for other object element to use
  function sendData() {
    // eslint-disable-next-line react/prop-types
    sessionStorage.setItem("search", request);
    window.dispatchEvent(new Event("search"));
    console.log(request);
  }

  return (
    <>
      <button className="nav-button ui" onClick={toggleNav}>
        <Icon name="bars" />
      </button>
      <Menu className="container">
        <Menu.Item as={Link} to="/" className="home links" onClick={toggleNav}>
          Home
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
        <Menu.Item as={Link} to="/books" className="links" onClick={toggleNav}>
          Books
        </Menu.Item>
        <Menu.Item as={Link} to="/about" className="links" onClick={toggleNav}>
          About
        </Menu.Item>

        <Menu.Item as={Link} to="/user/cart" className="links" onClick={toggleNav}>
          Cart
        </Menu.Item>

        <Menu.Item as={Link} to="/user" className="links" onClick={toggleNav}>
          User
        </Menu.Item>

        <Menu.Item as={Link} to="/log-in" className="links" onClick={toggleNav}>
          Log-in
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
