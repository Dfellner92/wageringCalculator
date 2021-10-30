import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Exacta from "./components/Exacta/Exacta";
import Trifecta from "./components/Trifecta/Trifecta";
import Superfecta from "./components/Superfecta/Superfecta";

import PickBets from "./components/Picks/PickBets";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Exacta} />
          <Route exact path="/trifecta" component={Trifecta} />
          <Route exact path="/superfecta" component={Superfecta} />
          <Route exact path="/picks" component={PickBets} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
