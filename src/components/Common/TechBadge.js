import React from "react";

function TechBadge({ name, variant = "default" }) {
  const isAccent = variant === "accent";
  return (
    <span
      className="tech-badge"
      style={{
        display: "inline-block",
        padding: "4px 10px",
        margin: "3px 4px",
        fontSize: "0.82em",
        fontWeight: "500",
        borderRadius: "6px",
        backgroundColor: isAccent ? "rgba(199, 112, 240, 0.25)" : "rgba(255, 255, 255, 0.08)",
        color: isAccent ? "#c770f0" : "#e0d7ed",
        border: isAccent ? "1px solid rgba(199, 112, 240, 0.5)" : "1px solid rgba(255, 255, 255, 0.12)",
        letterSpacing: "0.02em"
      }}
    >
      {name}
    </span>
  );
}

export default TechBadge;
