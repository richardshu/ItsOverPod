import React, { Component } from "react";
import { Card, Container, Modal } from "react-bootstrap";
import { EpisodesData } from "../../../data/episodes.js";
import "./Episodes.css";

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedEpisode: 0,
    };
  }

  openModal = (key) => {
    this.setState({ showModal: true });
    this.setState({ selectedEpisode: key });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <Container className="Episodes">
        <h1 className="page-title">Episodes</h1>
        <div className="cards-container">
          {EpisodesData.map((episode, key) => {
            return (
              <div>
                <Card
                  key={key}
                  style={{ width: "18rem" }}
                  onClick={() => this.openModal(key)}
                >
                  <Card.Img
                    variant="top"
                    src={
                      require(`../../../images/guests/${episode.id}.jpg`)
                        .default
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
              </div>
            );
          })}

          <Modal
            show={this.state.showModal}
            onHide={this.closeModal}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <iframe
                src={EpisodesData[this.state.selectedEpisode].anchor_url}
                height="auto"
                width="100%"
                frameBorder="0"
                scrolling="no"
                title={EpisodesData[this.state.selectedEpisode].title}
              ></iframe>
            </Modal.Header>
            <Modal.Body>
              {EpisodesData[this.state.selectedEpisode].description}
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    );
  }
}

export default Episodes;
