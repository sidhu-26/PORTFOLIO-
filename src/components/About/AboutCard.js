import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Siddaarth PT</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I’m currently working as the{" "}
            <span className="purple">Director of Software Engineering</span> at{" "}
            <span className="purple">FluentX</span>.
            <br />I hold a Bachelor of Engineering in{" "}
            <span className="purple">Mechanical Engineering</span> from{" "}
            <span className="purple">SRM Easwari Engineering College</span>.
            <br />
            <br />
            Outside of coding, I'm an active athlete competing in multiple sports:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Volleyball 🏐
            </li>
            <li className="about-activity">
              <ImPointRight /> Football ⚽
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming 🏊‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Handball 🤾‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build scalable systems from first principles."{" "}
          </p>
          <footer className="blockquote-footer">Siddaarth PT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
