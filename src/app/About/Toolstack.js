import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiIntellijidea ,
  SiVercel,
  SiEclipseide ,
  SiPycharm ,
  SiXampp,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

function Toolstack() {
  const tools = [
    { icon: <FaWindows />, key: "windows" },
    { icon: <FcLinux />, key: "linux" },
    { icon: <BiLogoVisualStudio />, key: "vscode" },
    { icon: <SiPostman />, key: "postman" },
    { icon: <SiIntellijidea />, key: "intellij" },
    { icon: <SiEclipseide />, key: "eclipse" },
    { icon: <SiPycharm />, key: "pycharm" },
    { icon: <SiXampp />, key: "xampp" },
    { icon: <SiVercel />, key: "vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={2} md={1} className="tech-icons" key={tool.key}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;