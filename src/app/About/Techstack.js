import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaVuejs } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiLaravel,
} from "react-icons/di";
import {
  SiMysql ,
  SiNextdotjs,
  SiDocker,
  SiOcaml,
  SiBootstrap,
  SiWordpress,
  SiDataiku,
  SiGitlab,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {[
        DiPython, DiJava, DiPhp, DiLaravel, CgCPlusPlus, DiJavascript1, DiNodejs, DiReact, FaVuejs, SiNextdotjs, SiBootstrap, SiWordpress, SiOcaml, DiMongodb, SiMysql, DiGit, SiDocker, SiDataiku
      ].map((Icon, index) => (
        <Col key={index} xs={2} md={1} className="tech-icons">
          <Icon />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;