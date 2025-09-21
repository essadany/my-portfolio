"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../components/Particle";
import { DiVisualstudio } from "react-icons/di";
import { SiAngular, SiDjango, SiDocker, SiGitlab, SiGooglecolab, SiLangchain, SiLaravel, SiMysql, SiOllama, SiPhpmyadmin, SiPostgresql, SiPython, SiReact, SiReactbootstrap, SiVuedotjs, SiXampp } from "react-icons/si";


function Projects() {
  const bontaz = "../../Assets/Projects/bontaz.pdf";
  const numerus21 = "../../Assets/Projects/numerus21.pdf";
  const elviga = "../../Assets/Projects/elviga.pdf";
  const uness = "../../Assets/Projects/uness.pdf";

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
              //pdfPath={uness}
              isBlog={false}
              title="GIP UNESS.fr | Développeur full-stack"
              description="Mise à jour de l'application UNESS Compétences pour l'évaluation des stages des étudiants en santé :
              - Développement frontend et participation au backend de l'application web
              - Maintenance évolutive, respect des bonnes pratiques de développement et rédaction de la documentation
              - Participation à la définition de l'architecture et veille technologique
              Résultat : mise en production de la nouvelle interface UNESS Compétences pour l'évaluation des stages"
              ghLink=""
              techIcons={[DiVisualstudio,SiAngular,SiDjango,SiPostgresql,SiGitlab,SiDocker]}
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={elviga}
              isBlog={false}
              title="Elviga | Alternance développeur web & IA"
              description="Développement d’une application web basée sur l’IA pour informatiser le processus des interventions des techniciens :
              - Développement front-end d’une application web de gestion des interventions des techniciens 
              - Développement d’un chatbot capable de faire des appels aux fonctions du backend en local "
              ghLink="https://github.com/essadany/alternance_ES-SADANY_YASSINE"
              techIcons={[DiVisualstudio,SiVuedotjs,SiGooglecolab,SiPython,SiLangchain,SiOllama]}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={bontaz}
              isBlog={false}
              title="Bontaz | Stage de mobilité développeur full-stack"
              description="Automatisation de la procédure de traitement des réclamations (sous Excel) des clients de Bontaz pour des pièces automobiles défectueuses :
              - Conception et développement frontend et back-end de l’application web de gestion de réclamations "
              ghLink="https://github.com/essadany/gestion-de-reclamations"
              techIcons={[DiVisualstudio,SiReact,SiLaravel,SiMysql,SiPhpmyadmin,SiXampp]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              pdfPath={numerus21}
              isBlog={false}
              title="Numerus21 | Stage en développement informatique et réseaux"
              description="- Développement front-end d’une application Web de gestion du personnel (non complète) 
              - Support technique en fibre optique : Répondre aux appels des techniciens sur les terrains et la gestion des tickets de mise en place de la fibre à 
l’aide des logiciels dédiés. "
              ghLink="https://github.com/essadany/Gestion-du-personnel"
              techIcons={[DiVisualstudio,SiReact,SiMysql,SiPhpmyadmin,SiXampp]}
            />
          </Col>
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
