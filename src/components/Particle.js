import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 65,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1.2,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
            },
              onhover: {
                enable: false,
              },
            },
          },
          retina_detect: true,
        }
      }
        />
  );
}

export default Particle;
