"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../components/Particle";
import { SiApachekafka, SiDataiku, SiDocker, SiGooglecolab, SiHibernate, SiIntellijidea, SiKeras, SiLangchain, SiMediapipe, SiMysql, SiOpenai, SiPython, SiRoboflow, SiStreamlit } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiJava, DiVisualstudio } from "react-icons/di";
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
              pdfPath={j2ee}
              isBlog={false}
              title="Projet Java EE"
              description=" Développement d’un site web e-commerce de vêtements "
              ghLink="https://github.com/essadany/CY-SHOP"
              techIcons={[SiIntellijidea,FaJava,SiHibernate,SiMysql]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={javafx}
              isBlog={false}
              title="Projet JavaFX"
              description="Programmation d’une application de bibliothèque numérique pour la gestion d’emprunt des livres "
              ghLink="https://github.com/essadany/Library4J"
              techIcons={[SiIntellijidea,FaJava,SiMysql]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={pfe}
              isBlog={false}
              title="Projet de fin d'études"
              description="Prédiction météorologique (température) avec LSTM"
              ghLink="https://github.com/essadany/Weather-prediction"
              techIcons={[SiGooglecolab,SiPython,SiKeras]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={bigData}
              isBlog={false}
              title="Projet Big Data"
              description="Prédiction d’un visiteur de site web (sera-t-il client à l’avenir ou pas)"
              ghLink="https://github.com/essadany/Projet-Big-Data"
              demoLink="https://drive.google.com/drive/folders/1hBGTp8yPxxNM9qTYzdl2u7nDlqagoK16?usp=sharing"
              techIcons={[DiVisualstudio,SiPython,SiDocker,SiStreamlit,SiDataiku,SiApachekafka]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={chatbot}
              isBlog={false}
              title="Projet NLP (RAG)"
              description="Création d’un chatbot de recommandation de films utilisant la technique du RAG sur un dataset de films (fichier CSV), avec deux LLMs (Llama2 
et GPT d’OpenAI) "
              ghLink="https://github.com/essadany/NLP-ChatBot-de-recommendation-de-films"
              techIcons={[SiGooglecolab,SiPython,SiLangchain,SiOpenai]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={deepLearning}
              isBlog={false}
              title="Projet Deep Learning"
              description="Détection de visage (input: image/caméra) avec du transfert learning "
              ghLink="https://github.com/essadany/faceDetector"
              techIcons={[SiGooglecolab,SiPython,SiRoboflow,SiMediapipe]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;