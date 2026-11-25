import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { skillCategories } from "../../data/skills";
import TechBadge from "../Common/TechBadge";

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <Row className="justify-content-center">
        {skillCategories.map((cat, idx) => (
          <Col lg={6} md={12} key={cat.category} className="mb-4">
            <Card
              style={{
                background: "rgba(27, 26, 46, 0.7)",
                border: "1px solid rgba(199, 112, 240, 0.22)",
                borderRadius: "14px",
                height: "100%",
                backdropFilter: "blur(8px)",
                textAlign: "left"
              }}
            >
              <Card.Body style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "1.15em",
                    fontWeight: "700",
                    color: "#ffffff",
                    marginBottom: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ color: "#c770f0" }}>▸</span> {cat.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
