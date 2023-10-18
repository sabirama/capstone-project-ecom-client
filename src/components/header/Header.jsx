import { Menu, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [request, setRequest] = useState("");

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
  }

  return (
    <>
      <Menu className="container">
        <Menu.Item as={Link} to="/" className="home links">
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
      <Menu className="container nav-links">
        <Menu.Item as={Link} to="/about" className="links">
          About
        </Menu.Item>

        <Menu.Item as={Link} to="/cart" className="links">
          Cart
        </Menu.Item>

        <Menu.Item as={Link} to="/log-in" className="links">
          Log-in
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
