import "./App.css";
import React from "react";
import { Signup } from "./page/signup";
import { Login } from "./page/login";
import { Profiles } from "./page/profile";
import { Footer } from "./footer";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <header>
        <h1>Hello</h1>

        <Nav />
      </header>
      <Profiles />
      <Signup />
      <Login />
      <Footer />
    </>
  );
};

export default App;
