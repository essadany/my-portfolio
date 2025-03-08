"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../components/Particle";


function Projects() {
  const bontaz = "../../Assets/Projects/bontaz.pdf";
  const numerus21 = "../../Assets/Projects/numerus21.pdf";
  const elviga = "../../Assets/Projects/elviga.pdf";
  const deepLearning = "../../Assets/Projects/faceDetection.pdf";
  const j2ee = "../../Assets/Projects/javaEE.pdf";
  const javafx = "../../Assets/Projects/javaFx.pdf";
  const bigData = "../../Assets/Projects/big-data.mkv";
  const chatbot = "../../Assets/Projects/chatbot.pdf";
  const pfe = "../../Assets/Projects/pfe.pdf";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes expériences <strong className="purple">professionnelles </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={elviga}
              isBlog={false}
              title="Elviga | Alternance développeur web & IA"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/alternance_ES-SADANY_YASSINE"
              demoLink="https://elviga.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={bontaz}
              isBlog={false}
              title="bontaz"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/essadany/frontend"
              demoLink="https://github.com/essadany/backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={numerus21}
              isBlog={false}
              title="Numerus21"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Gestion-du-personnel"
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;