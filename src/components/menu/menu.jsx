import React, { useEffect, useState, useRef, memo } from "react";
import { NavLink } from "react-router-dom";
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
  const [mobile, setMobile] = useState({
    x: 0,
    y: 0,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isIos, setIsIos] = useState(false);

  const wrapRef = useRef();

  useEffect(() => {
    const addEventListeners = () => {
      document.body.addEventListener("mousemove", onMouseMove);
    };
    const removeEventListeners = () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    };
    setIsMobile(mobileChk());
    setIsIos(iosChk());

    if (isMobile || isIos) {
      mobileOrientationChk();

      function mobileOrientationChk() {
        window.addEventListener("deviceorientation", function (event) {
          //디바이스가 움직임 감지될때 실행
          setMobile.x = event.gamma;
          setMobile.y = event.beta;
        });
        moveTextMobile();
      }
    } else {
      //pc면 실행
      addEventListeners();
    }
    return () => {
      removeEventListeners();
      window.removeEventListener("deviceorientation", function (event) {
        setMobile.x = event.gamma;
        setMobile.y = event.beta;
      });
    };
  }, [coordinate, mCoordinate, mobile]);

  const onMouseMove = (e) => {
    setCoordinate({
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

  const moveTextMobile = () => {
    setMCoordinate({
      x: (mCoordinate.x += (mobile.x - mCoordinate.x) * 0.1),
      y: (mCoordinate.y += (mobile.y - mCoordinate.y) * 0.1),
    });
    wrapRef.current.style.transform = `rotateX(${
      mCoordinate.y / 15
    }deg) rotateY(${-mCoordinate.x / 35}deg)`;
  };

  const mobileChk = () => {
    var mobileKeyWords = new Array(
      "Android",
      "iPhone",
      "iPad",
      "BlackBerry",
      "Windows CE",
      "SAMSUNG",
      "LG",
      "MOT",
      "SonyEricsson"
    );
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  };

  const iosChk = () => {
    var mobileKeyWords = new Array("iPhone", "iPad");
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  };

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
            <NavLink className={styles.menu} to="/about">
              <Dot />
              About
            </NavLink>
            <NavLink className={styles.menu} to="/project">
              <Particle />
              Project
            </NavLink>
            <NavLink className={styles.menu} to="/contact">
              <Line />
              Contact
            </NavLink>
          </div>
        </div>
      </section>
    </article>
  );
});

export default Menu;
