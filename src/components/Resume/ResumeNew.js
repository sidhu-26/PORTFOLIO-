import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

const resumeLink = "https://drive.google.com/uc?id=1UlBPmsOS3vO-AaCsh0Yx8Mrk50XOuP-9&export=download";
const previewLink = "https://drive.google.com/file/d/1UlBPmsOS3vO-AaCsh0Yx8Mrk50XOuP-9/preview";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", position: "relative" }}>
          <iframe
            src={previewLink}
            width="100%"
            height="1100px"
            title="Resume Preview"
            style={{ 
              border: "none", 
              borderRadius: "10px", 
              maxWidth: "800px", 
              background: "white", 
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)" 
            }}
          ></iframe>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
