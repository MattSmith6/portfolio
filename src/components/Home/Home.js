import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SocialIcons from "./SocialIcons"

function Home() {
  return (
    <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" textAlign='center'>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Matthew Smith</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
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
            <Col md={12} className="home-about-social">
              <SocialIcons />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home;
