/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "SteamDB Mobile",
  title: "iOS-додаток для глибокої аналітики Steam у знайомому форматі",
  email: "hello@steamdbmobile.app",
  appStore: "https://apps.apple.com/",
  steamdb: "https://steamdb.info",
  support: "https://steamdb.info/api/",
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} />
    </div>
  );
};

export default App;
