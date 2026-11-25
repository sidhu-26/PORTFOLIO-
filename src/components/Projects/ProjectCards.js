import React from "react";
import Card from "react-bootstrap/Card";
import TechBadge from "../Common/TechBadge";
import ProjectLink from "../Common/ProjectLink";

  function ProjectCards({ project }) {
    const { title, subtitle, description, technologies, categoryLabel, links, slug } = project;

    return (
            <Card className="project-card-view h-100" style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
              <Card.Body style={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "0.78em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      color: "#c770f0",
                      background: "rgba(199, 112, 240, 0.12)",
                      padding: "3px 10px",
                      borderRadius: "4px"
                    }}
                  >
                    {categoryLabel}
                  </span>
                  {project.featured && (
                    <span style={{ fontSize: "0.75em", color: "#ffd700", fontWeight: "600" }}>
                      ★ Featured
                    </span>
                  )}
                </div>

                <Card.Title style={{ fontSize: "1.4em", fontWeight: "700", color: "#ffffff", marginTop: "6px" }}>
                  {title}
                </Card.Title>
                {subtitle && (
                  <div style={{ fontSize: "0.88em", color: "#a588c0", marginBottom: "12px", fontStyle: "italic" }}>
                    {subtitle}
                  </div>
                )}

                <Card.Text style={{ color: "#c8c5be", fontSize: "0.95em", lineHeight: "1.6", flexGrow: 1, textAlign: "left" }}>
                  {description}
                </Card.Text>

                <div style={{ margin: "14px 0 20px" }}>
                  {technologies.slice(0, 5).map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                  {technologies.length > 5 && (
                    <span style={{ fontSize: "0.8em", color: "#a588c0", marginLeft: "4px" }}>
                      +{technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "auto" }}>
                  <ProjectLink to={`/project/${slug}`} text="Case Study" />
                  {links && links.github && (
                    <ProjectLink type="github" href={links.github} text="GitHub" />
                  )}
                  {links && links.demo && (
                    <ProjectLink type="demo" href={links.demo} text="Demo" />
                  )}
                </div>
              </Card.Body>
            </Card>
            );
}

            export default ProjectCards;
