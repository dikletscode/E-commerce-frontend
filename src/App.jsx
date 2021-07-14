import "./App.css";
import React, { useContext, createContext, useReducer } from "react";
import { Signup } from "./page/signup";
import { Login } from "./page/login";
import { Profiles } from "./page/profile";
import { Footer } from "./footer";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading } from "./components/loading/loading";
import { authInit } from "./reducer/authInit";
import init from "./reducer/init";
import Home from "./page/home";
import { ErrorPage } from "./page/errorPage";
import PublicRoute from "./Routes/public";
import PrivateRoute from "./Routes/private";

export const GlobContext = createContext({});

const App = () => {
  const [stateAuth, dispatchAuth] = useReducer(authInit, init);
  // console.log(stateAuth);

  return (
    <>
      <GlobContext.Provider value={{ stateAuth, dispatchAuth }}>
        <Router>
          <header>
            <h1>Hello</h1>

            <div className="b-seller">
              <i class="fa fa-shopping-bag" id="icon-shop"></i>
              <p style={{ fontSize: "20px" }}>Become seller</p>
            </div>
            <Nav />
          </header>

          <Switch>
            <Route component={Signup} path="/signup" />
            <PublicRoute restricted={false} component={Home} path="/" exact />
            <Route path="/accessdenied" component={ErrorPage} />

            <PublicRoute
              restricted={true}
              component={Login}
              path="/login"
              exact
            />
            <PrivateRoute component={Profiles} path="/profile" exact />
            <Route component={Login} />
          </Switch>

          <Footer />
        </Router>
      </GlobContext.Provider>

      {/* </GlobProvider> */}
    </>
  );
};

export default App;
