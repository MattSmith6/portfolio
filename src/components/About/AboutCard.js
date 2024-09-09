import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a master's student studying <span className="purple">Computer Science</span> at California State University, Northridge. I received by B.S. in Computer Science and a minor in Mathematics with honors in May 2024.
            <br />
            <br />
            I am a:
          </p>
          <ul style={{ textAlign: "left" }}>
            <li><span className="purple">Developer</span> &mdash; years of experience in the game development industry </li>
            <li><span className="purple">Researcher</span> &mdash; three active research projects, three publications</li>
            <li><span className="purple">Leader</span> &mdash; in project management and club event planning</li>
          </ul>
          <br />
          <p style={{ textAlign: "justify" }}>
            I enjoy backend development and learning new languages and algorithms.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

/*

            Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
           */
