import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import SectionHeading from "../Common/SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/experience";

function Experience() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <Particle />
      <Container>
        <SectionHeading
          title="Professional"
          highlight="Experience"
          subtitle="Engineering timeline, production impact, and specialized AI/backend responsibilities."
        />

        <Row className="justify-content-center">
          <Col lg={10}>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
