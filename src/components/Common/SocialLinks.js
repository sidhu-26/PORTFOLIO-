import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { socialLinks } from "../../data/socialLinks";

const iconMap = {
  AiFillGithub: AiFillGithub,
  FaLinkedinIn: FaLinkedinIn,
  SiLeetcode: SiLeetcode,
  AiOutlineMail: AiOutlineMail
};

function SocialLinks({ className = "", iconClassName = "home-social-icons", showLabel = false }) {
  return (
    <ul className={`home-about-social-links ${className}`} style={{ paddingLeft: 0, margin: 0 }}>
      {socialLinks.map((item) => {
        const IconComponent = iconMap[item.icon] || AiOutlineMail;
        return (
          <li className="social-icons" key={item.name} style={{ display: "inline-block", margin: "0 10px" }}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`icon-colour ${iconClassName}`}
              aria-label={item.label}
              title={item.name}
            >
              <IconComponent />
              {showLabel && <span style={{ marginLeft: "6px" }}>{item.name}</span>}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
