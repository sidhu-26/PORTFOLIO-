import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SocioFitt — Social Fitness Platform"
              description="Engineered a scalable backend using Django REST Framework with 200+ RESTful APIs. Designed PostgreSQL schemas, leveraged Redis caching and Celery. Implemented JWT authentication and built an SEO-optimized frontend using Next.js and React.js. Deployed on AWS."
              ghLink="https://github.com/sidhu-26"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="2nd Project — Template"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brief one-liner about what the project does and the problem it solves. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Key technical decision or notable implementation detail. Ut enim ad minim veniam, quis nostrud exercitation. Outcome, metric, or impact if available."
              ghLink="https://github.com/sidhu-26"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="3rd Project — Template"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Brief one-liner about what the project does and the problem it solves. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Key technical decision or notable implementation detail. Ut enim ad minim veniam, quis nostrud exercitation. Outcome, metric, or impact if available."
              ghLink="https://github.com/sidhu-26"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
