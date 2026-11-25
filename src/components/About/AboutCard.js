import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { profile } from "../../data/profile";

function AboutCard() {
  const { about, company } = profile;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify", lineHeight: "1.8" }}>
              Hi everyone! I’m <span className="purple">{profile.name}</span>{" "}
              from <span className="purple">{profile.location}</span>.
              <br />
              I’m working as an <span className="purple">{profile.title}</span> at{" "}
              <span className="purple">{company.name}</span>.
              <br />
              <br />
              {about.intro}
              <br />
              <br />
              I hold a <span className="purple">{about.education.degree}</span> from{" "}
              <span className="purple">{about.education.institution}</span> ({about.education.period}).
              <br />
              <small style={{ color: "#a588c0", display: "block", marginTop: "6px" }}>
                {about.education.notes}
              </small>
              <br />
              Outside of engineering and AI systems, I am an active competitor in athletics:
            </p>

            <ul>
              {about.interests.map((item) => (
                <li className="about-activity" key={item.name}>
                  <ImPointRight /> {item.name} {item.icon}
                </li>
              ))}
            </ul>

              <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
                "{about.philosophy}"
              </p>
              <footer className="blockquote-footer">{profile.name}</footer>
            </blockquote>
          </Card.Body>
        </Card>
        );
}

        export default AboutCard;
