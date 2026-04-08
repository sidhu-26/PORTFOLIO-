import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blog() {
  return (
    <Container fluid className="project-section" style={{ color: "white" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={10}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <style>
              {`
                .blog-body p, .blog-body ul, .blog-body li, .blog-body strong {
                  color: white !important;
                }
                .purple {
                  color: #c770f0 !important;
                }
              `}
            </style>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", color: "white" }}>
              🧩 <strong className="purple">Designing Scalable Django Project Structures</strong>
            </h1>
            <div className="blog-body" style={{ textAlign: "justify", fontSize: "1.1em", color: "white" }}>
              <p>
                <strong>Introduction</strong>
                <br />
                Building a Django app is easy. Scaling it is where things break.
              </p>
              <p>
                Most developers start with Django’s default structure — but as features grow, files become messy, logic gets duplicated, and debugging becomes painful.
              </p>
              <p>
                A well-structured Django project acts like a blueprint for scalability, not just a folder arrangement.
              </p>

              <h3 className="purple">🧠 1. Django Architecture (Mental Model)</h3>
              <p>
                Django follows the MVT (Model-View-Template) pattern:
                <ul>
                  <li><strong>Model</strong> → database layer</li>
                  <li><strong>View</strong> → handles logic & requests</li>
                  <li><strong>Template</strong> → UI rendering</li>
                </ul>
                This separation improves modularity and maintainability.
              </p>

              <h3 className="purple">📁 2. Default Structure (Where Problems Start)</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`myproject/
 ├── settings.py
 ├── urls.py
 ├── app/
 │   ├── models.py
 │   ├── views.py`}
              </pre>
              <p>
                👉 Works for small apps
                <br />
                👉 Breaks for real-world systems
              </p>
              <p>
                <strong>Problems:</strong>
                <ul>
                  <li>Fat views.py</li>
                  <li>Mixed responsibilities</li>
                  <li>Hard to scale</li>
                </ul>
              </p>

              <h3 className="purple">🏗️ 3. Scalable Project Structure</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`project/
├── config/
├── apps/
├── static/
├── templates/
├── manage.py`}
              </pre>
              <p>
                <strong>Why this works:</strong>
                <ul>
                  <li>Separates core vs features</li>
                  <li>Supports team development</li>
                  <li>Easier debugging</li>
                </ul>
              </p>

              <h3 className="purple">⚙️ 4. Config Layer (Brain of Project)</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`config/
 ├── settings/
 │    ├── base.py
 │    ├── dev.py
 │    └── prod.py
 ├── urls.py`}
              </pre>
              <p>
                <strong>Key Insight:</strong>
                <br />
                👉 Never keep everything in one settings.py
              </p>
              <p>
                This enables environment-based configs and safer deployments.
              </p>

              <h3 className="purple">🧩 5. Apps = Features (Core Scaling Principle)</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`apps/
 ├── users/
 ├── chat/
 ├── payments/`}
              </pre>
              <p>
                👉 <strong>Each app = independent module</strong>
                <br />
                This follows modular design → improves maintainability.
              </p>

              <h3 className="purple">🔥 6. Inside Each App (Real Engineering Structure)</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`users/
├── models/
├── api/
│    ├── views.py
│    ├── serializers.py
├── services/
├── utils/`}
              </pre>

              <h3 className="purple">⚠️ 7. Critical Concept: Services Layer</h3>
              <p>
                Instead of putting everything in <code>views.py</code>:
                <ul>
                  <li><strong>views</strong> → request handling</li>
                  <li><strong>services</strong> → business logic</li>
                  <li><strong>models</strong> → data</li>
                </ul>
              </p>
              <p>
                <strong>Why this matters:</strong>
                <ul>
                  <li>Easier testing</li>
                  <li>Reusable logic</li>
                  <li>Cleaner codebase</li>
                </ul>
                This pattern separates business logic from views for better maintainability.
              </p>

              <h3 className="purple">📦 8. Static, Templates, Media</h3>
              <pre style={{ background: "#2d1950", padding: "15px", borderRadius: "10px", color: "#be6adf" }}>
{`static/     → CSS, JS
templates/  → HTML
media/      → uploads`}
              </pre>
              <p>
                👉 Can be global or app-specific depending on scale.
              </p>

              <h3 className="purple">🧠 9. Final Architecture Flow</h3>
              <p>
                <strong>Request Flow:</strong>
                <br />
                <code>Client → URL → View → Service → Model → DB</code>
                <br />
                <code>Response ← Template/API</code>
              </p>

              <h3 className="purple">🎯 10. Key Takeaways</h3>
              <ul>
                <li>Structure ≠ folders → it's architecture</li>
                <li>Apps should be independent</li>
                <li>Views should be thin</li>
                <li>Business logic belongs in services</li>
                <li>Design for scale from day one</li>
              </ul>

              <p style={{ fontStyle: "italic", marginTop: "30px" }}>
                “Bad structure slows you down. Good structure disappears.”
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
