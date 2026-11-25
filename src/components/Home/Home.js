import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SocialLinks from "../Common/SocialLinks";
import { profile } from "../../data/profile";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFileText } from "react-icons/fi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
            <Row className="align-items-center">
              <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 10 }} className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                      👋🏻
                    </span>
                  </h1>

                  <h1 className="heading-name">
                    I'M
                    <strong className="main-name"> {profile.name.toUpperCase()}</strong>
                  </h1>

                    <div style={{ padding: "20px 0 30px", textAlign: "left", minHeight: "80px" }}>
                      <Type />
                    </div>

                    <p style={{ color: "#d0c9df", fontSize: "1.15em", textAlign: "left", lineHeight: "1.7", maxWidth: "620px" }}>
                      {profile.summary}
                    </p>

                    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "30px", justifyContent: "flex-start" }}>
                      <Button as={Link} to="/project" variant="primary" style={{ padding: "12px 28px", fontSize: "1.05em" }}>
                        Explore Projects &nbsp; <FiArrowRight />
                      </Button>
                      <Button as={Link} to="/resume" variant="outline-light" style={{ padding: "12px 28px", fontSize: "1.05em" }}>
                        View Resume &nbsp; <FiFileText />
                      </Button>
                    </div>
                  </Col>

                    <Col md={5} style={{ paddingBottom: 20 }} className="text-center">
                      <img
                        src={homeLogo}
                        alt="AI Engineer Illustration"
                        className="img-fluid"
                        style={{ maxHeight: "420px" }}
                      />
                    </Col>
                  </Row>
                </Container>
              </Container>

              <Home2 />

              <Container>
                  <Row style={{ paddingTop: "50px", paddingBottom: "70px" }}>
                    <Col md={12} className="home-about-social">
                      <h1>FIND ME ON</h1>
                      <p>
                        Feel free to <span className="purple">connect </span>with me
                      </p>
                      <SocialLinks />
                    </Col>
                  </Row>
              </Container>
            </section>
            );
}

            export default Home;
