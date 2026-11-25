import React from "react";
import Card from "react-bootstrap/Card";
import TechBadge from "../Common/TechBadge";
import { calculateDuration } from "../../data/experience";
import { FiCalendar, FiMapPin, FiBriefcase, FiCheckCircle } from "react-icons/fi";

function ExperienceCard({ experience }) {
  const duration = calculateDuration(experience.startDate, experience.endDate);

  return (
    <Card
      className="experience-card mb-4"
      style={{
        background: "rgba(27, 26, 46, 0.75)",
        border: "1px solid rgba(199, 112, 240, 0.28)",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(10px)",
        textAlign: "left",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #c770f0, #8a3ab9, #6a11cb)"
        }}
      />
      <Card.Body style={{ padding: "30px" }}>
        <div className="d-flex flex-wrap justify-content-between align-items-start mb-3">
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "4px 12px",
                background: "rgba(199, 112, 240, 0.15)",
                borderRadius: "20px",
                color: "#c770f0",
                fontSize: "0.85em",
                fontWeight: "600",
                marginBottom: "8px"
              }}
            >
              {experience.employmentType}
            </div>
            <h2 style={{ fontSize: "1.7em", fontWeight: "700", color: "#ffffff", margin: "4px 0" }}>
              {experience.role}
            </h2>
            <h3 style={{ fontSize: "1.25em", color: "#c770f0", fontWeight: "600", marginBottom: "8px" }}>
              {experience.company}
            </h3>
          </div>

          <div
            style={{
              textAlign: "right",
              color: "#a588c0",
              fontSize: "0.95em",
              display: "flex",
              flexDirection: "column",
              gap: "4px"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FiCalendar /> {experience.startDateFormatted} – {experience.endDateFormatted}
            </span>
            <span style={{ fontWeight: "600", color: "#c770f0" }}>
              {duration} (2+ yrs overall)
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <FiMapPin /> {experience.location}
            </span>
          </div>
        </div>

        <p style={{ color: "#d0c9df", fontSize: "1.05em", lineHeight: "1.6", marginBottom: "20px" }}>
          {experience.summary}
        </p>

        <h4 style={{ fontSize: "1.1em", color: "#ffffff", fontWeight: "600", marginBottom: "12px" }}>
          Key Technical Contributions & Responsibilities:
        </h4>
        <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "25px" }}>
          {experience.responsibilities.map((resp, idx) => (
            <li
              key={idx}
              style={{
                color: "#c8c5be",
                fontSize: "0.98em",
                lineHeight: "1.65",
                marginBottom: "10px",
                display: "flex",
                alignItems: "flex-start",
                gap: "10px"
              }}
            >
              <FiCheckCircle style={{ color: "#c770f0", flexShrink: 0, marginTop: "4px" }} />
              <span>{resp}</span>
            </li>
          ))}
        </ul>

        {experience.technologies && (
          <div>
            <h4 style={{ fontSize: "0.95em", color: "#a588c0", fontWeight: "600", textTransform: "uppercase", marginBottom: "10px" }}>
              Technologies & Methodologies
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {experience.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} variant="accent" />
              ))}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
