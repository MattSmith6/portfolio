import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import { GiSpy, GiAxeSword } from "react-icons/gi";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Cool <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few <strong className="purple">public</strong> projects that I am allowed to share. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              icon={<GiSpy className='project-icons' />}
              isBlog={false}
              title="Spy Game"
              description="An app elimination game designed to be played on CSUN's campus. I created database schemas, user authentication with SRP-6, and encrypted communication channels."
              ghLink="https://github.com/MattSmith6/spygame-server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              icon={<GiAxeSword className='project-icons' />}
              isBlog={false}
              title="MMORPG Game Mods"
              description="Worked on a configurable item database to support custom skill progression for: combat, cooking, fishing, mining, and woodcutting, with per-player interactive world regeneration."
              demoLink="https://www.youtube.com/playlist?list=PL3D2uACHJTnvf49bMGNcLggRYUJmolAEt"         
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
