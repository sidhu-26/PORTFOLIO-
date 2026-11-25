import React from "react";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProjectLink({ type, href, to, text, className = "", style = {} }) {
  if (to) {
    return (
      <Button
        as={Link}
        to={to}
        variant="primary"
        className={`project-action-btn ${className}`}
        style={style}
      >
        {text || "View Case Study"} &nbsp; <FiArrowRight />
      </Button>
    );
  }

  if (!href) return null;

  const isGithub = type === "github";

  return (
    <Button
      variant={isGithub ? "outline-light" : "primary"}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`project-action-btn ${className}`}
      style={style}
      aria-label={text || (isGithub ? "GitHub Repository" : "Live Demo")}
    >
      {isGithub ? <BsGithub /> : <CgWebsite />} &nbsp;
      {text || (isGithub ? "GitHub" : "Live Demo")}
    </Button>
  );
}

export default ProjectLink;
