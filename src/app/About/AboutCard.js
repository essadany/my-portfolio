import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImPointUp } from "react-icons/im";
import { SiPointy } from "react-icons/si";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je suis <span className="purple">Yassine ES-SADANY </span>
            de <span className="purple"> Zagora, Maroc.</span>
            <br />
            Je suis actuellement jeune diplômé en France en génie informatique. Je suis à la recherche active de mon premier emploi en tant que développeur web full-stack ou backend.
            <br />
            <br />
          </p>
        </blockquote>
        <h5>            Voici mon parcours scolaire :          </h5>
        <table style={{ width: "100%", textAlign: "left",  }}>
          <tbody>
            <tr>
              <td><ImPointRight /></td>
              <td>Diplôme d'ingénieur en génie informatique et IA <br /> CY Tech (ex-EISTI)</td>
              <td>2021 – 2024 | Cergy, France</td>
            </tr>
            <br></br>
            <tr>
              <td><ImPointRight /></td>
              <td>Classes préparatoires aux grandes écoles<br />CPGE IBN TAHIR</td>
              <td>2019 – 2021 | Errachidia, Maroc</td>
            </tr>
            <br></br>
            <tr>
              <td><ImPointRight /></td>
              <td>Baccalauréat Filière Sciences Mathématiques <br /> Lycée technique Ibn Al Haitam</td>
              <td>2018 – 2019 | Ouarzazate, Maroc</td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;