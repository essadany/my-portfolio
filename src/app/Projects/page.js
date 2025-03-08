"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../components/Particle";
import { SiGooglecolab, SiHibernate, SiIntellijidea, SiMediapipe, SiMysql, SiPython, SiRoboflow } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { BiLogoJava } from "react-icons/bi";


function Projects() {
  const bontaz = "../../Assets/Projects/bontaz.pdf";
  const numerus21 = "../../Assets/Projects/numerus21.pdf";
  const elviga = "../../Assets/Projects/elviga.pdf";
  const deepLearning = "../../Assets/Projects/faceDetection.pdf";
  const j2ee = "../../Assets/Projects/javaEE.pdf";
  const javafx = "../../Assets/Projects/javaFx.pdf";
  const bigData = "../../Assets/Projects/bigData.pdf";
  const chatbot = "../../Assets/Projects/chatbot.pdf";
  const pfe = "../../Assets/Projects/pfe.pdf";
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">académiques </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={deepLearning}
              isBlog={false}
              title="Deep Learning"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/faceDetector"
              techIcons={[SiGooglecolab,SiPython,SiRoboflow,SiMediapipe]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={j2ee}
              isBlog={false}
              title="J2EE"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/CY-SHOP"
              techIcons={[SiIntellijidea,DiJava,SiHibernate,SiMysql]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={javafx}
              isBlog={false}
              title="JavaFX"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Library4J"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={bigData}
              isBlog={false}
              title="Big Data"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Projet-Big-Data"
              demoLink="https://github.com/essadany/Projet-Big-Data"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={chatbot}
              isBlog={false}
              title="Chatbot"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/NLP-ChatBot-de-recommendation-de-films"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={pfe}
              isBlog={false}
              title="PFE"
              description="A website for a company that provides services in the field of digital marketing, web development, and graphic design. The website is built using React.js, Material-UI, and Firebase."
              ghLink="https://github.com/essadany/Weather-prediction"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;