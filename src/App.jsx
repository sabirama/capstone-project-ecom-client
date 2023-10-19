import { RouteMapping } from "./components/lib/methods/mapping";
import mainroutes from "./components/lib/routes/mainroutes";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RememberToken from "./components/lib/methods/rememberToken";
import "./App.css";

function App() {
  RememberToken();
  console.log(RememberToken());

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <section>{RouteMapping(mainroutes, [])}</section>
      <footer className="footer py-1">
        <Footer />
      </footer>
    </>
  );
}

export default App;
