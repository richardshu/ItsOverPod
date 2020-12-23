import React, { Component } from "react";
import { Container } from "react-bootstrap";
import RichAndPat from "../../../images/rich_and_pat.jpg";
import "./About.css";

class About extends Component {
  render() {
    return (
      <Container className="About">
        <h1 className="page-title">About</h1>
        <div className="profile-container">
          <span className="profile-pic-container">
            <img src={RichAndPat} alt="Rich and Pat" />
          </span>
          <div className="profile-description">
            <p>
              What's up fam. Richard Shu and Patrick Ma go <em>way</em> back to
              elementary school. We met each other in 5th grade and did a lot of
              activities together including swim, tennis, debate, trombone, Team
              Fortress 2, and Monday book club.
            </p>
            <p>
              We started this podcast as a fun side project to reconnect with
              our buddies and meet new friends. Every episode, we'll have a
              rotating guest with a unique story to share. Hope you'll join us
              for the ride!
            </p>
            <p>
              Fun facts: Richard likes pineapple on pizza and Patrick does his
              own laundry.
            </p>
            <p>--</p>
            <p>
              <em>
                Pictured: literally the only decent picture we have together
              </em>
            </p>
          </div>
        </div>
      </Container>
    );
  }
}

export default About;
