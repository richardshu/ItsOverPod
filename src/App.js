import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Sidebar, Footer } from "./components";
import { Home, About, Episodes } from "./components/pages";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
  }

  toggleSidebar = (state) => {
    this.setState({ showSidebar: state });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          showSidebar={this.state.showSidebar}
          toggleSidebar={this.toggleSidebar}
        />
        <div
          className={
            this.state.showSidebar ? "wrapper sidebar-open" : "wrapper"
          }
          onClick={() => this.toggleSidebar(false)}
        >
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
