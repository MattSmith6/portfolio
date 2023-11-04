import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I'm 
                <strong className="main-name"> Matthew Smith</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ paddingLeft: '45px', fontSize: '25px' }}>Find me at:</p>
              <div className="home-about-social">
                <ul className="home-about-social-links">
                  <li className="social-icons">
                  <a
                      href="https://github.com/MattSmith6"
                      className="icon-colour  home-social-icons"
                      onClick={() => alert('Clicked')}
                  >
                      <AiFillGithub />
                  </a>
                  </li>
                  <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/matthew-smith-67952a179/"
                      className="icon-colour  home-social-icons"
                      onClick={() => alert('Clicked')}
                  >
                      <FaLinkedinIn />
                  </a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home;
