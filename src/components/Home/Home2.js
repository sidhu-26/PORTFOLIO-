import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Full-stack engineer who loves transforming ideas into scalable 
              systems. With experience across backend, frontend, databases, and cloud, 
              I focus on building reliable products in fast-paced environments.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, JavaScript, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working end-to-end to deliver complete solutions.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, System Architecture,{" "}
                </b>
              </i>
              and exploring AI-driven Feature Development.
              <br />
              <br />
              Whenever possible, I love building scalable backends with
              <b className="purple"> Django </b> and modern frontends using{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
