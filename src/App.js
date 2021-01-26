import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

function PageRouter() {
  return (
    <BrowserRouter>
      <div style={{ width: "100%", height: "100%" }}>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default PageRouter;
