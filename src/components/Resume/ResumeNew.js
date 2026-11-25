import React, { useState } from "react";
import { Container, Row, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const resumePdfPath = process.env.PUBLIC_URL + "/Siddaarth_PT_Resume.pdf";

function ResumeNew() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div>
        <Container fluid className="resume-section" style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "70px" }}>
          <Particle />

            {/* Actions bar */}
            <Row style={{ justifyContent: "center", position: "relative", gap: "15px", marginBottom: "30px" }}>
              <Button
                variant="primary"
                href={resumePdfPath}
                download="Siddaarth_PT_Resume.pdf"
                style={{ maxWidth: "240px", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <AiOutlineDownload size={20} />
                <span>Download Resume</span>
              </Button>

              <Button
                variant="outline-light"
                href={resumePdfPath}
                target="_blank"
                rel="noreferrer"
                style={{ maxWidth: "240px", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
              >
                <FiExternalLink size={18} />
                <span>Open in New Tab</span>
              </Button>
            </Row>

        {/* Embedded viewer with fallback */}
        <Row className="resume" style={{ justifyContent: "center", position: "relative", padding: "0 15px" }}>
                <div
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "12px",
                    padding: "8px",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(199, 112, 240, 0.3)"
                  }}
          >
                <object
                  data={resumePdfPath}
                  type="application/pdf"
                  width="100%"
                  height="1000px"
                  style={{ borderRadius: "8px", background: "#fff", display: "block" }}
                  onLoad={() => setIframeLoaded(true)}
                >
                  <Alert variant="info" style={{ margin: "30px", background: "rgba(27, 26, 46, 0.95)", color: "#fff", border: "1px solid #c770f0" }}>
                    <h4>PDF Preview Unsupported in this Browser</h4>
                    <p>
                      Your browser does not support inline PDF rendering, or is viewing on a mobile screen.
                    </p>
                    <div style={{ marginTop: "15px" }}>
                      <Button
                        variant="primary"
                        href={resumePdfPath}
                        download="Siddaarth_PT_Resume.pdf"
                        style={{ marginRight: "10px" }}
                      >
                        Download PDF
                      </Button>
                      <Button
                        variant="outline-light"
                        href={resumePdfPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open in New Window
                      </Button>
                    </div>
                  </Alert>
                </object>
              </div>
            </Row>

              {/* Bottom download button */}
              <Row style={{ justifyContent: "center", position: "relative", marginTop: "35px" }}>
                <Button
                  variant="primary"
                  href={resumePdfPath}
                  download="Siddaarth_PT_Resume.pdf"
                  style={{ maxWidth: "240px", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  <AiOutlineDownload size={20} />
                  <span>Download Resume</span>
                </Button>
              </Row>
            </Container>
          </div>
          );
}

          export default ResumeNew;
