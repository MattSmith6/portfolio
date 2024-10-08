import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer navbar-fixed-bottom">
      <Row>
        <Col md="4" className="footer-copywright">
        </Col>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-body">
          <h3>Template by <a href="https://github.com/soumyajit4419/" style={{ textDecoration: 'none' }}>Soumyajit Behera</a></h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
