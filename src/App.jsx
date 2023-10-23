import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { RouteMapping } from "./components/lib/mapping";
import mainroutes from "./components/lib/routes/mainroutes";
import Post from "./components/lib/http/post";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import "./components/Components.css";
import Get from "./components/lib/http/get";

function App() {
  const [cartId, setCartId] = useState([]);
  const userId = sessionStorage.getItem("user_id");
  const [register, setRegister] = useState(sessionStorage.getItem("register"));

  async function createCart() {
    await Post("cart", { user_id: sessionStorage.getItem("user_id"), setCartId });
  }

  async function getCart() {
    const data = await Get(`cart-user/${userId}`);
    setCartId(data);
    sessionStorage.setItem("cart_id", cartId.id);
  }

  useEffect(() => {
    setRegister(sessionStorage.getItem("register"));
    if (register == "true") {
      setRegister(false);
      createCart();
    } else {
      getCart();
    }
  }, []);

  useEffect(() => {
    if (cartId == undefined) {
      getCart();
    }
    sessionStorage.setItem("cart_id", cartId.id);
  }, [cartId]);

  function logger() {
    console.log(cartId);
  }
  return (
    <>
      <header className="container">
        <Header />
      </header>

      <section>
        <Routes>{RouteMapping(mainroutes, [])}</Routes>
      </section>
      <button onClick={logger}>test</button>
      <footer className="footer py-1">
        <Footer />
      </footer>
    </>
  );
}

export default App;
