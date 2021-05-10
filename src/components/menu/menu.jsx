import React, { useEffect, useState, useRef, memo } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import Particles from "react-particles-js";
import Particle from "../svg/particle";
import Dot from "../svg/dot";
import Line from "../svg/line";

const Menu = memo(({ Cursor }) => {
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [mCoordinate, setMCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const wrapRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      setCoordinate({
        ...coordinate,
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      });
      moveText();
    };
    const moveText = () => {
      setMCoordinate({
        x: (mCoordinate.x += (coordinate.x - mCoordinate.x) * 0.1),
        y: (mCoordinate.y += (coordinate.y - mCoordinate.y) * 0.1),
      });
      wrapRef.current.style.transform = `rotateX(${
        mCoordinate.y / 15
      }deg) rotateY(${-mCoordinate.x / 35}deg)`;
    };
    document.body.addEventListener("mousemove", onMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
  });

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
      <section className={styles.manifesto} ref={wrapRef}>
        <div className={styles.dimension}>
          <div className={styles.title}>
            인생이란 점이 모여 선이 되듯이, 과거의 일들이
            <br className={styles.space} />
            이어져 현재를 만듭니다.
            <br className={styles.space_m} /> 살면서 마주한 선택이 점이 되고
            <br className={styles.space} /> 점들이 이어져 지금의 나를 만듭니다.
            <br className={styles.space_m} /> <br className={styles.space_s} />
            나는 오늘도 개발자가 되기 위해
            <br className={styles.space} />
            최선을 다해 빛나는 점을 찍습니다.
          </div>
          <div className={styles.menu_wrap}>
            <Link className={styles.menu} to="/about">
              <Dot />
              About
            </Link>
            <Link className={styles.menu} to="/project">
              <Particle />
              Project
            </Link>
            <Link className={styles.menu} to="/contact">
              <Line />
              Contact
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
});

export default Menu;
