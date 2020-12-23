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

  toggleModal = (state, key = null) => {
    this.setState({ showModal: state });
    if (state) {
      this.setState({ selectedEpisode: key });
    }
  };

  render() {
    return (
      <Container className="Episodes">
        {this.props.numEpisodes === EpisodesData.length ? (
          <h1 className="page-title">Episodes</h1>
        ) : (
          <span></span>
        )}

        <div className="episode-cards-container">
          {EpisodesData.slice(0, this.props.numEpisodes).map((episode, key) => {
            return (
              <Card key={key} onClick={() => this.toggleModal(true, key)}>
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

          <Modal
            show={this.state.showModal}
            onHide={() => this.toggleModal(false)}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <iframe
                src={EpisodesData[this.state.selectedEpisode].spotify_url}
                title={EpisodesData[this.state.selectedEpisode].title}
                width="100%"
                height="232"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </Modal.Header>
          </Modal>
        </div>
      </Container>
    );
  }
}

Episodes.defaultProps = {
  numEpisodes: EpisodesData.length,
};

export default Episodes;
