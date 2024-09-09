import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResearchCard from "./ResearchCards";
import Particle from "../Particle";

function Research() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Research</strong>
        </h1>
        <p style={{ color: "white" }}>
          As an <strong className="purple">ARCS Research Fellow</strong> and <strong className="purple">NSF REU Participant</strong>
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
              bullets={["Migrate test suite from C++ to Swift", "Create unit and end-to-end tests", "Track and resolve bugs in compiler", "Transpile Proteus to QP/C library (in C)"]}
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          <strong className="purple">Publications</strong>
        </h2>
        <ol className="publications">
          <li><b className="purple">M. Smith</b>, L. Zhao, J. Cordova, X. Jiang, and M. Ebrahimi, “Energy-efficient gpu-intensive workload scheduling for data centers,” in <span className="italic">22nd International Conference on Machine Learning and Applications (ICMLA)</span>, Dec. 2023, pp. 1735–1740. doi: <a href="https://doi.org/10.1109/ICMLA58977.2023.00263">10.1109/ICMLA58977.2023.00263</a>.</li>
          <li><b className="purple">M. Smith</b>, L. Zhao, J. Cordova, X. Jiang, and M. Ebrahimi, “Machine learning-based energy-efficient workload management for data centers,” in <span className="italic">2024 IEEE 21st Consumer Communications & Networking Conference (CCNC)</span>, Jan. 2024, pp. 799–802. doi: <a href="https://doi.org/10.1109/CCNC51664.2024.10454842">10.1109/CCNC51664.2024.10454842</a>.</li>
          <li>C. A. Dimalanta, <b className="purple">M. Smith</b>, K. Bonakdar, X. Jiang, N. Ho, and T. Dung, “Poster - Boracle: An Open Data Platform For Health Condition Prognostics,” in <span className="italic">2024 IEEE/ACM Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE)</span>, Jun. 2024, pp. 200–201. doi: <a href="https://doi.org/10.1109/CHASE60773.2024.00038">10.1109/CHASE60773.2024.00038</a>.</li>
        </ol>

        <h2 className="project-heading">
          <strong className="purple">Presentations</strong>
        </h2>
        <ul className="publications">
          <li>Machine Learning-based Energy-efficient Workload Management for Data Centers</li>
          <ul>
            <li><span className="italic">2024 Networking Track</span>, January 7, 2024, CCNC 2024, Las Vegas, NV.</li>
            <li><span className="italic">2023 Symposium for Undergraduate Research in Data Science, Systems, and Security</span>, December 13, 2023, ICMLA 2023, Jacksonville, FL.</li>
            <li><span className="italic">Applying Data Science on Energy-efficient Computing and Applications Workshop</span>, November 13, 2023, California State University, Northridge, Northridge, CA.</li>
            <li><span className="italic">SoCal REU Symposium 2023</span>, July 26, 2023, University of Southern California, Los Angeles, LA.</li>
          </ul>
          <li>BORACLE: The Oracle for Your Body</li>
          <ul>
            <li><span className="italic">ARCS STEAMH Nexus 2024</span>, November 6, 2024, California State University, Northridge, Northridge, CA.</li>
            <li><span className="italic">Democratize Accessibility to Human Body Information: Opportunities and Challenges</span>, January 3, 2024, HICSS 2024 Conference, Honolulu, HI.</li>
            <li><span className="italic">ARCS STEAMH Nexus 2023</span>, December 1, 2023, California State University, Northridge, Northridge, CA.</li>
            <li><span className="italic">ARCS JPL Poster Presentation</span>, November 10, 2023, NASA Jet Propulsion Laboratory, Pasadena, CA.</li>
          </ul>
        </ul>
      </Container>
      <Particle />
    </Container>
  );
}

export default Research;
