import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SectionHeading from "../Common/SectionHeading";
import { projects } from "../../data/projects";

function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "ai-ml", label: "AI & Machine Learning" },
    { key: "software-engineering", label: "Software Engineering" }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
      <Container fluid className="project-section" style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <Particle />
        <Container>
            <SectionHeading
              title="Engineering"
              highlight="Projects"
              subtitle="Production-grade AI systems, agentic architectures, and distributed backend platforms."
            />

            {/* Filter buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <Button
                  key={cat.key}
                  variant={filter === cat.key ? "primary" : "outline-light"}
                  onClick={() => setFilter(cat.key)}
                  style={{
                    borderRadius: "20px",
                    padding: "8px 20px",
                    fontSize: "0.95em",
                    fontWeight: filter === cat.key ? "600" : "400"
                  }}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {filteredProjects.map((project) => (
                <Col lg={4} md={6} className="project-card mb-4" key={project.id}>
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
        </Container>
      </Container>
      );
}

      export default Projects;
