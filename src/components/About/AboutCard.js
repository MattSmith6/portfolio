import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a senior studying <span className="purple">Computer Science </span> 
            and Mathematics at California State University, Northridge. I am currently applying to <span className="purple">grad school</span> to pursue a master's degree.
            <br />
            <br />
            I am a:
          </p>
          <ul style={{ textAlign: "left" }}>
            <li><span className="purple">Developer</span> &mdash; years of experience in the game development industry </li>
            <li><span className="purple">Researcher</span> &mdash; three active research projects, two publications</li>
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
