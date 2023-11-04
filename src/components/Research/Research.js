import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Research() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research</strong>
        </h1>
        <p style={{ color: "white" }}>
          As an <strong className="purple">ARCS Associate</strong> and <strong className="purple">NSF REU Participant</strong>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResearchCard
              title="Boracle"
              affiliation="ARCS Center"
              dates="Jan 2023 &mdash; Now"
              projectLink="https://arcs.center/boracle-the-oracle-for-your-body/"
              description="Using smart tech to improve health outcomes."
              bullets={["Subteam leader for ReactJS webapp", "Compile smart-earbud market research", "Storyboarding, use cases, UI design", "Qualitative coding and data visualizations"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ResearchCard
              title="Workload Balancing"
              affiliation="CSUN REU"
              dates="Jun 2023 &mdash; Now"
              projectLink="https://www.csun.edu/reu/research-projects"
              description="Distributing tasks across a simulated network."
              bullets={["Use ML to predict GPU temperature", "Model GPU-intensive server workloads", "Reduce datacenter energy consumption", "Lead writer of two research papers"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ResearchCard
              title="Proteus"
              affiliation="ARCS Center"
              dates="Sep 2023 &mdash; Now"
              projectLink="https://arcs.center/design-and-development-of-a-domain-specific-language-dsl-based-on-hierarchical-state-machines-hsm-for-model-based-programming-mbp/"
              description="New prog. language to natively support HSMs."
              bullets={["Migrate test suite from C++ to Swift", "Create unit and end-to-end tests", "Track and resolve bugs in compiler", "Transpile Proteus to QPC library (in C)"]}
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          <strong className="purple">Publications</strong>
        </h2>
        <ol className="publications">
          <li>M. Smith, L. Zhao, J. Cordova, X. Jiang, and M. Ebrahimi, “Energy-efficient gpu-intensive workload scheduling for data centers,” <span className="italic">IEEE International Conference on Machine Learning and Applications</span>, 2023, in press.</li>
          <li>M. Smith, L. Zhao, J. Cordova, X. Jiang, and M. Ebrahimi, “Machine learning-based energy-efficient workload management for data centers,” <span className="italic">IEEE Consumer Communications & Networking Conference</span>, 2024, in press.</li>
        </ol>
      </Container>
    </Container>
  );
}

export default Research;
