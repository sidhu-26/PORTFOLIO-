import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../Particle";
import TechBadge from "../Common/TechBadge";
import ProjectLink from "../Common/ProjectLink";
import { getProjectBySlug, projects } from "../../data/projects";
import { FiArrowLeft, FiCheckCircle, FiLayers, FiTarget, FiAlertCircle, FiCpu } from "react-icons/fi";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Container fluid className="project-section" style={{ minHeight: "100vh", paddingTop: "140px", color: "white" }}>
        <Particle />
        <Container style={{ textAlign: "center", maxWidth: "600px" }}>
          <FiAlertCircle size={64} color="#c770f0" style={{ marginBottom: "20px" }} />
          <h1 style={{ fontSize: "2.5em", fontWeight: "700" }}>Project Not Found</h1>
          <p style={{ color: "#a588c0", fontSize: "1.1em", margin: "20px 0 30px" }}>
            The case study you are looking for does not exist or has been relocated.
          </p>
          <Button as={Link} to="/project" variant="primary" style={{ padding: "10px 24px" }}>
            <FiArrowLeft /> &nbsp; Back to Projects
          </Button>
        </Container>
      </Container>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh", paddingTop: "110px", paddingBottom: "80px", color: "#e8e6e0" }}>
      <Particle />
      <Container style={{ maxWidth: "1000px", textAlign: "left" }}>
        {/* Navigation & Breadcrumbs */}
        <div style={{ marginBottom: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button
            variant="outline-light"
            onClick={() => navigate("/project")}
            style={{ borderRadius: "20px", padding: "6px 18px", fontSize: "0.9em" }}
          >
            <FiArrowLeft /> &nbsp; Back to Projects
          </Button>
          <span
            style={{
              fontSize: "0.82em",
              textTransform: "uppercase",
              fontWeight: "700",
              letterSpacing: "0.06em",
              color: "#c770f0",
              background: "rgba(199, 112, 240, 0.15)",
              padding: "4px 14px",
              borderRadius: "20px"
            }}
          >
            {project.categoryLabel}
          </span>
        </div>

        {/* Header Section */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "2.8em", fontWeight: "800", color: "#ffffff", marginBottom: "12px" }}>
            {project.title}
          </h1>
          {project.subtitle && (
            <p style={{ fontSize: "1.25em", color: "#c770f0", fontWeight: "500", marginBottom: "20px" }}>
              {project.subtitle}
            </p>
          )}

          {/* Status & Action Buttons */}
          <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginTop: "15px" }}>
            <span
              style={{
                fontSize: "0.85em",
                padding: "6px 14px",
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#a588c0",
                border: "1px solid rgba(255, 255, 255, 0.15)"
              }}
            >
              Status: <strong style={{ color: "#ffffff" }}>{project.status}</strong>
            </span>
            {project.links?.github && (
              <ProjectLink type="github" href={project.links.github} text="GitHub Repo" />
            )}
            {project.links?.demo && (
              <ProjectLink type="demo" href={project.links.demo} text="Live Demo" />
            )}
          </div>
        </div>

        {/* Tech Stack Bar */}
        <Card
          style={{
            background: "rgba(27, 26, 46, 0.7)",
            border: "1px solid rgba(199, 112, 240, 0.25)",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "40px"
          }}
        >
          <div style={{ fontSize: "0.85em", textTransform: "uppercase", fontWeight: "700", color: "#a588c0", marginBottom: "10px" }}>
            Technology Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="accent" />
            ))}
          </div>
        </Card>

        {/* Overview & Business Problem */}
        <Row className="mb-4">
          <Col md={12}>
            <Card
              style={{
                background: "rgba(18, 16, 32, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "28px",
                marginBottom: "25px"
              }}
            >
              <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                <FiTarget color="#c770f0" /> Project Overview
              </h2>
              <p style={{ color: "#d0c9df", fontSize: "1.05em", lineHeight: "1.7", margin: 0 }}>
                {project.overview}
              </p>
            </Card>

            <Card
              style={{
                background: "rgba(18, 16, 32, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                padding: "28px",
                marginBottom: "25px"
              }}
            >
              <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                <FiAlertCircle color="#c770f0" /> The Business Problem
              </h2>
              <p style={{ color: "#d0c9df", fontSize: "1.05em", lineHeight: "1.7", margin: 0 }}>
                {project.businessProblem}
              </p>
            </Card>
          </Col>
        </Row>

        {/* Objectives */}
        {project.projectObjectives && project.projectObjectives.length > 0 && (
          <Card
            style={{
              background: "rgba(18, 16, 32, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "25px"
            }}
          >
            <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
              <FiCheckCircle color="#c770f0" /> Project Objectives
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              {project.projectObjectives.map((obj, i) => (
                <li key={i} style={{ color: "#c8c5be", fontSize: "1em", lineHeight: "1.7", marginBottom: "10px", display: "flex", gap: "10px" }}>
                  <span style={{ color: "#c770f0", fontWeight: "700" }}>{i + 1}.</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* System Architecture */}
        {project.systemArchitecture && (
          <Card
            style={{
              background: "rgba(18, 16, 32, 0.8)",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "25px"
            }}
          >
            <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
              <FiLayers color="#c770f0" /> System Architecture & Components
            </h2>
            <p style={{ color: "#d0c9df", fontSize: "1.05em", lineHeight: "1.7", marginBottom: "20px" }}>
              {project.systemArchitecture.description}
            </p>
            {project.systemArchitecture.components && (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {project.systemArchitecture.components.map((comp, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(0, 0, 0, 0.35)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "8px",
                      padding: "14px 18px",
                      color: "#e0d7ed",
                      fontSize: "0.95em",
                      lineHeight: "1.6"
                    }}
                  >
                    {comp}
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        {/* Implementation & Engineering Responsibilities */}
        <Row className="mb-4">
          {project.implementationDetails && (
            <Col md={12} className="mb-4">
              <Card
                style={{
                  background: "rgba(18, 16, 32, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "28px",
                  height: "100%"
                }}
              >
                <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  <FiCpu color="#c770f0" /> Technical Implementation Highlights
                </h2>
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                  {project.implementationDetails.map((item, idx) => (
                    <li key={idx} style={{ color: "#c8c5be", fontSize: "0.98em", lineHeight: "1.7", marginBottom: "12px", display: "flex", gap: "10px" }}>
                      <FiCheckCircle color="#c770f0" style={{ flexShrink: 0, marginTop: "4px" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          )}

          {project.responsibilities && (
            <Col md={12}>
              <Card
                style={{
                  background: "rgba(18, 16, 32, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "28px"
                }}
              >
                <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  Individual Engineering Contributions
                </h2>
                <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ color: "#c8c5be", fontSize: "0.98em", lineHeight: "1.7", marginBottom: "12px", display: "flex", gap: "10px" }}>
                      <FiCheckCircle color="#c770f0" style={{ flexShrink: 0, marginTop: "4px" }} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          )}
        </Row>

        {/* Results & Measurable Outcomes */}
        {project.resultsAndOutcomes && (
          <Card
            style={{
              background: "rgba(18, 16, 32, 0.8)",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "40px"
            }}
          >
            <h2 style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", marginBottom: "18px" }}>
              Verified Results & Outcomes
            </h2>
            <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
              {project.resultsAndOutcomes.map((res, idx) => (
                <li key={idx} style={{ color: "#d0c9df", fontSize: "1em", lineHeight: "1.7", marginBottom: "10px", display: "flex", gap: "10px" }}>
                  <span style={{ color: "#c770f0" }}>✦</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div style={{ marginTop: "60px" }}>
            <h3 style={{ fontSize: "1.5em", fontWeight: "700", color: "#ffffff", marginBottom: "20px" }}>
              Related <span className="purple">Case Studies</span>
            </h3>
            <Row>
              {relatedProjects.map((rel) => (
                <Col md={6} key={rel.id} className="mb-3">
                  <Card
                    style={{
                      background: "rgba(27, 26, 46, 0.7)",
                      border: "1px solid rgba(199, 112, 240, 0.2)",
                      borderRadius: "10px",
                      padding: "20px"
                    }}
                  >
                    <h4 style={{ fontSize: "1.2em", color: "#fff", fontWeight: "600" }}>{rel.title}</h4>
                    <p style={{ color: "#a588c0", fontSize: "0.9em", margin: "8px 0 16px" }}>{rel.description}</p>
                    <Button as={Link} to={`/project/${rel.slug}`} variant="primary" size="sm" style={{ alignSelf: "flex-start" }}>
                      View Case Study
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default ProjectDetail;
