import React from "react";
import Svg from "../svg/svg";
import styles from "./nav_m.module.css";
import { NavLink } from "react-router-dom";
import Particles from "react-particles-js";

const NavM = ({ open, menuClose }) => {
  return (
    <div className={`${open ? styles.menu_wrap_m : styles.hide}`}>
      <div className={styles.menu_m}>
        <NavLink to="/menu" className={styles.text_wrap}>
          <p className={styles.text_m}>Home</p>
        </NavLink>
        <NavLink to="/about" className={styles.text_wrap}>
          <p className={styles.text_m}>About</p>
        </NavLink>
        <NavLink to="/project" className={styles.text_wrap}>
          <p className={styles.text_m}>Project</p>
        </NavLink>
        <NavLink to="/contact" className={styles.text_wrap}>
          <p className={styles.text_m}>Contact</p>
        </NavLink>
      </div>
      <div className={styles.close} onClick={menuClose}>
        Close
      </div>
      <div className={styles.logo}>
        <Svg />
      </div>
      <Particles
        className={styles.particle}
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: "#C3C3C3",
            },

            line_linked: {
              enable: true,
              opacity: 0.3,
            },
            move: {
              direction: "right",
              speed: 0.5,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
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
      />
    </div>
  );
};

export default NavM;
