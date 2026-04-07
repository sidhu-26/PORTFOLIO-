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
              ghLink="https://sociofitt.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DevAsk Developer Q&A Platform (Stack Overflow-inspired)"
              description="Tech: Python, Django, PostgreSQL, Redis, Bootstrap, jQuery. Built a scalable Q&A platform replicating core Stack Overflow features including question/answer workflows, reputation engine with badges/privileges, moderation system, bounty system, and real-time notifications using Redis. Engineered asynchronous workflows with Django signals and Celery."
              ghLink="https://github.com/sidhu-26/DevAsk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SyncSpace – Real-Time Communication Platform"
              description="Tech: Python, Django, Django Channels, Redis, Agora SDK, Bootstrap. Developed a real-time messaging platform supporting one-to-one chats, public rooms, and group video calling via Agora SDK. Features include a social graph (friend system), real-time notifications, and secure authentication. Subdivided into modular apps for scalability."
              ghLink="https://github.com/sidhu-26/SyncSpace"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
