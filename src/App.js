import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Sidebar, Footer } from "./components";
import { Home, About, Episodes } from "./components/pages";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Sidebar
          sidebarOpen={this.state.sidebarOpen}
          toggleSidebar={this.toggleSidebar}
        />
        <div
          className={this.state.sidebarOpen ? "wrapper" : ""}
          onClick={this.closeSidebar}
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
