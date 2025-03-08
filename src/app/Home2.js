import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
            Motivé et passionné par le développement web et l’intelligence artificielle, je suis curieux, adaptable, ponctuel et doté d’un excellent esprit d’équipe. 
            Je suis à la recherche de mon premier emploi dès que possible. 
              <br />
              <br />Je maitrise les classiques comme
              <i>
                <b className="purple"> Python, Java, Php </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création de nouvelles &nbsp;
              <i>
                <b className="purple">technologies web et produits </b> et
                aussi dans des domaines liés à{" "}
                <b className="purple">
                  l'IA.
                </b>
              </i>
              <br />
              <br />
              Chaque fois que possible, j'applique également ma passion pour le développement de produits
              avec <b className="purple">Php Laravel ou Java JEE</b> et
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques et frameworks Javascript modernes
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js et Vue.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <Image src="/Assets/home-main.svg" width={500} height={500} className="img-fluid " alt="home-main" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/essadany"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yassine-es-sadany-7046b9181/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;