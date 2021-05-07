import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";
import Particles from "react-particles-js";

const Menu = ({ Cursor }) => {
  return (
    <article className={styles.wrap}>
      <Cursor />
      <div className={styles.noise}></div>
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
              opacity: 0.02,
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
      <div className={styles.title}>
        인생이란 점이 모여 선이 되듯이,
        <br /> 과거의 일들이 이어져 현재를 만듭니다.
        <br />
        살면서 마주한 선택이 점이 되고 점들이
        <br /> 이어져 지금의 나를 만듭니다.
        <br />
        나는 오늘도 개발자가 되기 위해 최선을 <br />
        다해 빛나는 점을 찍습니다.
      </div>
      <section className={styles.manifesto}>
        <NavLink className={styles.about} to="/about">
          About
        </NavLink>
        <NavLink className={styles.project} to="/project">
          Project
        </NavLink>
        <NavLink className={styles.contact} to="/contact">
          Contact
        </NavLink>
        <svg width="360" height="363" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse
              ry="10.5"
              rx="10.5"
              id="svg_2"
              cy="85.18715"
              cx="17.01335"
              fill="#c3c3c3"
              className={styles.menu_blur}
            />
            <NavLink to="project" className={styles.project_dot}>
              <ellipse
                ry="15"
                rx="15"
                cy="136.17945"
                cx="142.00228"
                stroke="#c3c3c3"
                strokeWidth="1"
                fillOpacity="0"
                className={styles.c_project}
              />
              <ellipse
                ry="19"
                rx="19"
                id="svg_3"
                cy="136.17945"
                cx="142.00228"
                fill="#c3c3c3"
                className={styles.menu_blur}
              />
            </NavLink>
            <NavLink to="contact" className={styles.contact_dot}>
              <ellipse
                ry="7.5"
                rx="7.5"
                id="svg_4"
                cy="14.11212"
                cx="336.15183"
                stroke="#c3c3c3"
                strokeWidth="1"
                fillOpacity="0"
                className={styles.c_contact}
              />
              <ellipse
                ry="11.5"
                rx="11.5"
                id="svg_4"
                cy="14.11212"
                cx="336.15183"
                fill="#c3c3c3"
                className={styles.menu_blur}
              />
            </NavLink>
            <NavLink to="about" className={styles.about_dot}>
              <ellipse
                ry="12"
                rx="12"
                id="svg_1"
                cy="340.82935"
                cx="68.59445"
                stroke="#c3c3c3"
                strokeWidth="1"
                fillOpacity="0"
                className={styles.c_about}
              />
              <ellipse
                ry="16"
                rx="16"
                id="svg_1"
                cy="340.82935"
                cx="68.59445"
                fill="#c3c3c3"
                className={styles.menu_blur}
              />
            </NavLink>
            <line
              stroke="#c3c3c3"
              strokeWidth="2"
              id="svg_6"
              y2="20.10267"
              x2="325.72322"
              y1="126.23488"
              x1="158.54636"
              className={styles.menu_blur}
            />
            <line
              stroke="#c3c3c3"
              strokeWidth="2"
              id="svg_8"
              y2="128.77191"
              x2="124.51938"
              y1="89.3049"
              x1="26.63689"
              className={styles.menu_blur}
            />
            <line
              stroke="#c3c3c3"
              strokeWidth="2"
              id="svg_10"
              y2="325.84173"
              x2="74.80489"
              y1="153.88268"
              x1="134.95603"
              className={styles.menu_blur}
            />
          </g>
        </svg>
      </section>
    </article>
  );
};

export default Menu;
