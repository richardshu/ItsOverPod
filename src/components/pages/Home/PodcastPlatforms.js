import React, { Component } from "react";
import { PodcastPlatformsData } from "../../../data/podcast-platforms.js";
import "./PodcastPlatforms.css";

class PodcastPlatforms extends Component {
  render() {
    return (
      <div className="PodcastPlatforms">
        <p>Tune in on</p>
        <div className="podcast-platforms-container">
          {PodcastPlatformsData.map((p, key) => {
            return (
              <div key={key} className="podcast-platform">
                <a target="_blank" rel="noopener noreferrer" href={p.url}>
                  <img
                    src={
                      require(`../../../images/podcast-platforms/${p.id}.png`)
                        .default
                    }
                    alt={p.name}
                    className="podcast-platform-img"
                  />
                </a>
                <p>{p.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PodcastPlatforms;
