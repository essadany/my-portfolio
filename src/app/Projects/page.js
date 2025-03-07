"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../components/Particle";


function Projects() {
  const bontaz = "../../Assets/Projects/bontaz";
  const numerus21 = "../../Assets/Projects/numerus21.png";
  const elviga = "../../Assets/Projects/elviga.png";
  const deepLearning = "../../Assets/Projects/deep-learning.png";
  const j2ee = "../../Assets/Projects/j2ee.png";
  const javafx = "../../Assets/Projects/javafx.png";
  const bigData = "../../Assets/Projects/big-data.png";
  const chatbot = "../../Assets/Projects/chatbot.png";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bontaz}
              isBlog={false}
              title="bontaz"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/essadany/bontaz"
              demoLink="https://bontaz.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numerus21}
              isBlog={false}
              title="Numerus21"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Numerus21"
              demoLink="https://numerus21.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elviga}
              isBlog={false}
              title="Elviga"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Elviga"
              demoLink="https://elviga.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepLearning}
              isBlog={false}
              title="Deep Learning"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/DeepLearning"
              demoLink="https://deeplearning.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={j2ee}
              isBlog={false}
              title="J2EE"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/J2EE"
              demoLink="https://j2ee.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javafx}
              isBlog={false}
              title="JavaFX"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/JavaFX"
              demoLink="https://javafx.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigData}
              isBlog={false}
              title="Big Data"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/BigData"
              demoLink="https://bigdata.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Chatbot"
              demoLink="https://chatbot.com/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;