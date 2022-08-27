import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <section>
        <Content />
      </section>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
