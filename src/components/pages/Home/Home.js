import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <h1>It's Over!</h1>
        <p>
          Join Rich and Pat as they navigate college-adult life in LA and bring
          on their friends to share their stories and grand projects with the
          world. New episode every Wednesday!
        </p>
        <p>
          Tune in on:{" "}
          <a
            target="_blank"
            href="https://open.spotify.com/show/0JZYJLnK05lPg8juByyu5W"
          >
            Spotify
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://podcasts.apple.com/podcast/id1522523593"
          >
            Apple Podcasts
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yYTdmOWE4NC9wb2RjYXN0L3Jzcw=="
          >
            Google Podcasts
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://www.iheart.com/podcast/269-its-over-69193527/"
          >
            iHeartRadio
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://tunein.com/podcasts/Media--Entertainment-Podcasts/Its-Over-p1347138/"
          >
            TuneIn
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://castbox.fm/channel/It's-Over!-id3101911?country=us"
          >
            Castbox
          </a>{" "}
          |{" "}
          <a
            target="_blank"
            href="https://overcast.fm/itunes1522523593/its-over"
          >
            Overcast
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://pca.st/f12gfjo9">
            Pocket Casts
          </a>{" "}
          |
          <a target="_blank" href="https://www.stitcher.com/podcast/its-over">
            {" "}
            Stitcher
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://radiopublic.com/its-over-WeNQPJ">
            RadioPublic
          </a>{" "}
          |{" "}
          <a target="_blank" href="https://www.breaker.audio/its-over">
            Breaker
          </a>
        </p>
      </Container>
    );
  }
}

export default Home;
