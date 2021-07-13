import React from "react";
import ReactDOM from "react-dom";
import axios from "./axiosInstance";

import App from "./App";

const title = "React with Webpack and Babel";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
