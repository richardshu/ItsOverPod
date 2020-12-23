import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import { EpisodesData } from "../../../data/episodes.js";
import "./Episodes.css";

class Episodes extends Component {
  render() {
    return (
      <Container className="Episodes">
        <h1 className="page-title">Episodes</h1>
        <div className="card-container">
          {EpisodesData.map((episode, key) => {
            return (
              <Card key={key} style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    require(`../../../images/guests/${episode.id}.jpg`).default
                  }
                  alt={episode.guest}
                />
                <Card.Body>
                  <Card.Title>
                    {episode.title} -
                    <span className="guest-name"> {episode.guest}</span>
                  </Card.Title>
                  <Card.Text>{episode.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default Episodes;
