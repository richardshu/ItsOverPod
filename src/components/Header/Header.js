import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerLogo from "../../images/logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Toggle
              className="menu-icon"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={1} as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/episodes">
                  Episodes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="banner">
          <h1 className="borderx">
            <a href="/">
              <img src={BannerLogo} alt="logo" />
              It's Over!
            </a>
          </h1>
        </Container>
      </div>
    );
  }
}

export default Header;
