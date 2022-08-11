import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql
} from "react-icons/di";

import { SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        HTML
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        CSS
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Bootstrap
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        JavaScript
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        React
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Typescript
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Python
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        Git
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SQL
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
