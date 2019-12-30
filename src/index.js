import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <h1>Привет мир!</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        <li>dfgdfg</li>
        <li>dfgdfg</li>
        <li>dfgdfg</li>
      </ul>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
