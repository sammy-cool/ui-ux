import React from "react";

import "./App.css";
import {
  Header,
  Features,
  Blog,
  Possibility,
  WhatUIUX,
  Footer,
} from "./containers/index";
import { Navbar, CTA, Brand } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatUIUX />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
