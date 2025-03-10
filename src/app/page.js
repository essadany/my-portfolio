'use client';
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./components/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Image from "next/image";

function Home() {
  return (
    <section>
      <Container fluid className="home-section"  id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bienvenue !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Je suis
                <strong className="main-name"> Yassine ES-SADANY</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Image
                src="/Assets/my-photo.png"
                width={400}
                height={400}
                alt="home pic"
                className="img-fluid rounded-circle"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;