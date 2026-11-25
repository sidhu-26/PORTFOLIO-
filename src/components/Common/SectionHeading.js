import React from "react";

function SectionHeading({ title, highlight, subtitle, className = "" }) {
  return (
    <div className={`section-heading-container ${className}`} style={{ textAlign: "center", marginBottom: "40px" }}>
      <h1 className="project-heading" style={{ fontSize: "2.4em", fontWeight: "700" }}>
        {title} {highlight && <strong className="purple">{highlight}</strong>}
      </h1>
      {subtitle && (
        <p style={{ color: "#a588c0", fontSize: "1.1em", marginTop: "10px", maxWidth: "700px", margin: "10px auto 0" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
