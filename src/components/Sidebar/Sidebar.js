import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          onClick={this.props.toggleSidebar}
          className="sidebar-icon"
          icon={faBars}
        />

        <nav className={this.props.sidebarOpen ? "sidebar active" : "sidebar"}>
          <Container>
            <FontAwesomeIcon
              onClick={this.props.toggleSidebar}
              className="sidebar-icon"
              icon={faTimes}
            />
            <h2 className="sidebar-title">Menu</h2>
            <ul>
              <li className="sidebar-item">
                <Link to="/" onClick={this.props.toggleSidebar}>
                  Home
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/about" onClick={this.props.toggleSidebar}>
                  About
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/episodes" onClick={this.props.toggleSidebar}>
                  Episodes
                </Link>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
