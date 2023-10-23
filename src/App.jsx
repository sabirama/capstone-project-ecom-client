import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";
import { RouteMapping } from "./components/subcomponents/mapping";
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

  async function getCart() {
    const data = await Get(`cart-user/${userId}`);
    setCartId(data);
  }

  async function createCart() {
    await Post("cart", { user_id: sessionStorage.getItem("user_id"), setCartId });
  }

  useEffect(() => {
    if (register == true) {
      createCart();
      setRegister(false);
    } else {
      getCart();
    }
  }, [cartId]);

  return (
    <>
      <header className="container">
        <Header />
      </header>

      <section>
        <Routes>{RouteMapping(mainroutes, [])}</Routes>
      </section>

      <footer className="footer py-1">
        <Footer />
      </footer>
    </>
  );
}

export default App;
