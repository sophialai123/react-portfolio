import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      height="50vh" width='50vw'
      id="tsparticles"
      params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": false
            }
          },
          "size": {
            "value": 10,
            "random": true
          },
          "move": {
            "direction": "bottom",
            "out_mode": "out"
          },
          "line_linked": {
            "enable": false
          }
        },
        "interactivity": {
          "events": {
            "onclick": {
              "enable": true,
              "mode": "remove"
            }
          },
          "modes": {
            "remove": {
              "particles_nb": 10
            }
          }
        }
      }} />
  );
}

export default Particle;


/* <Particles
      id="tsparticles"
      params={{
        particles: {
          color: {
            value: "#000000"
          },
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 1,
          },
          move: {
            direction: "right",
            speed: 0.15,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    /> */