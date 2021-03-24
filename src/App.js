import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Episodes } from "./components/pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/episodes" component={Episodes} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
