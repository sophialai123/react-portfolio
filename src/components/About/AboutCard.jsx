import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sophia Lai </span>
            from <span className="purple"> Sydney, Australia.</span>
            <br />I am a junior Software Developer.
            <br />
            <br />
            Apart from programming, I also love to
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cook healthy food
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel everywhere
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
