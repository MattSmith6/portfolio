import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ alignItems: 'center', justifyContent: "center", paddingTop: "10px", paddingBottom: "20px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ display: 'inline-block' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ display: 'inline-block' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ display: 'inline-block' }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className='tech-icon-images' />
      </Col>
    </Row>
  );
}

export default Techstack;
