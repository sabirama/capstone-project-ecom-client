import { RouteMapping } from "./components/lib/methods/mapping";
import mainroutes from "./components/lib/routes/mainroutes";

import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <section>{RouteMapping(mainroutes, [])}</section>
    </>
  );
}

export default App;
