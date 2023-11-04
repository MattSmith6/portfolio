import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Matthew Smith</span>, a senior <span className="purple">Computer Science</span> student at California State University, Northridge.
            <br />
            <br />
            I serve as a <span className="purple">leader</span> in clubs and various projects. I participate in three <span className="purple">research</span> projects at CSUN. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
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
