import React from "react";

import "./resources/css/reset.css";
import "./resources/css/Style.css";
import Header from "./components/Layout/Header";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";
import "font-awesome/css/font-awesome.min.css";
function App() {
  return (
    <>
      <Header />

      <Content />
      <Footer />
    </>
  );
}

export default App;
