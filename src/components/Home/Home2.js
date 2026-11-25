import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";
import { getFeaturedProjects } from "../../data/projects";
import TechBadge from "../Common/TechBadge";
import { FiArrowRight, FiFileText } from "react-icons/fi";

function Home2() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
          <Row className="align-items-center">
            <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.5em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                  <p className="home-about-body" style={{ textAlign: "left" }}>
                    {profile.about.intro}
                    <br />
                    <br />
                    Currently engineering AI systems, agentic workflows, and high-performance services as an{" "}
                    <b className="purple">{profile.title}</b> at{" "}
                    <b className="purple">{profile.company.name}</b>.
                    <br />
                    <br />
                    My core areas of specialization include:
                    <br />
                    <span style={{ display: "block", marginTop: "10px" }}>
                      {profile.about.specializations.map((spec) => (
                        <span key={spec} style={{ display: "block", padding: "4px 0" }}>
                          ▹ <b className="purple">{spec}</b>
                        </span>
                      ))}
                    </span>
                    <br />
                    Philosophy: <i>"{profile.about.philosophy}"</i>
                  </p>

                  <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "25px" }}>
                    <Button as={Link} to="/project" variant="primary" style={{ padding: "10px 24px", fontSize: "1.05em" }}>
                      Explore Projects &nbsp; <FiArrowRight />
                    </Button>
                    <Button as={Link} to="/experience" variant="outline-light" style={{ padding: "10px 24px", fontSize: "1.05em" }}>
                      View Experience &nbsp; <FiArrowRight />
                    </Button>
                    <Button as={Link} to="/resume" variant="outline-light" style={{ padding: "10px 24px", fontSize: "1.05em" }}>
                      Resume &nbsp; <FiFileText />
                    </Button>
                  </div>
                </Col>
                  <Col md={4} className="myAvtar text-center">
                    <Tilt>
                      <img src={myImg} className="img-fluid" alt="Siddaarth PT Avatar" style={{ maxHeight: "300px" }} />
                    </Tilt>
                  </Col>
                </Row>

                {/* Featured Projects Highlight */}
                <Row style={{ marginTop: "70px", textAlign: "left" }}>
                  <Col md={12}>
                    <h2 style={{ fontSize: "2em", fontWeight: "700", marginBottom: "25px" }}>
                      Featured <span className="purple">AI & ML Systems</span>
                    </h2>
                  </Col>
                  {featuredProjects.map((proj) => (
                    <Col md={4} key={proj.id} className="mb-4">
                      <div
                        style={{
                          background: "rgba(27, 26, 46, 0.7)",
                          border: "1px solid rgba(199, 112, 240, 0.25)",
                          borderRadius: "12px",
                          padding: "24px",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          backdropFilter: "blur(8px)"
                        }}
                      >
                        <div style={{ color: "#c770f0", fontSize: "0.85em", fontWeight: "600", textTransform: "uppercase", marginBottom: "8px" }}>
                          {proj.categoryLabel}
                        </div>
                        <h3 style={{ fontSize: "1.35em", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                          {proj.title}
                        </h3>
                        <p style={{ color: "#c8c5be", fontSize: "0.95em", lineHeight: "1.6", flexGrow: 1, marginBottom: "15px" }}>
                          {proj.description}
                        </p>
                        <div style={{ marginBottom: "18px" }}>
                          {proj.technologies.slice(0, 4).map((tech) => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                        </div>
                        <Button
                          as={Link}
                          to={`/project/${proj.slug}`}
                          variant="primary"
                          style={{ width: "100%", marginTop: "auto" }}
                        >
                          Case Study &nbsp; <FiArrowRight />
                        </Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Container>
            );
}

            export default Home2;
