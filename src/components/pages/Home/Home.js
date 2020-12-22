import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PodcastPlatforms from "./PodcastPlatforms";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <h1 className="page-title">It's Over!</h1>
        <p>
          Join Rich and Pat as they navigate college-adult life in LA and bring
          on their friends to share their stories and grand projects with the
          world. New episode every Wednesday!
        </p>
        <PodcastPlatforms />
      </Container>
    );
  }
}

export default Home;
