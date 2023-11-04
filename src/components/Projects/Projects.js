import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Cool <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I can publicly talk about.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spy Game"
              description="An app elimination game designed to be played on campus at CSUN with friends. I created backend frameworks for authentication and encrypted player to server communciation."
              ghLink="https://github.com/MattSmith6/spygame-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MMORPG Game Mods"
              description="Worked on a configurable item database to support custom world regeneration and skill progression mechanics for: combat, cooking, fishing, mining, and woodcutting."
              demoLink="https://www.youtube.com/playlist?list=PL3D2uACHJTnvf49bMGNcLggRYUJmolAEt"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
