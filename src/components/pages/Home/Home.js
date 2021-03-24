import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Episodes from "../Episodes/Episodes";
import PodcastPlatforms from "../../PodcastPlatforms/PodcastPlatforms";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <p>
          Join Rich and Pat as they navigate college-adult life in LA and bring
          on their friends to share their stories and grand projects with the
          world. New episode every Wednesday!
        </p>

        <div className="recent-guests-section">
          <h1>Recent Guests</h1>
          <Episodes numEpisodes={3} />
          <div className="btn-container">
            <Link to="/episodes">
              <Button variant="outline-dark" size="lg">
                See all episodes
              </Button>
            </Link>
          </div>
        </div>

        <PodcastPlatforms />
      </Container>
    );
  }
}

export default Home;
