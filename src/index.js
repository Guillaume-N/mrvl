import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "rbx/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
import Header from "./components/Header";
import CharacterDetails from "./components/CharacterDetails";

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/character/:id" component={CharacterDetails} />
          <Route exact path="/" component={App} />
          <Route component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
