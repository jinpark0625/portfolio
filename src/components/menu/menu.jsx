import React, { useRef, useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";

const Menu = ({ Cursor }) => {
  const wrapRef = useRef();

  const [scrollHide, setScrollHide] = useState(false);
  const [menuScroll, setmenuScroll] = useState(false);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("scroll", goToMenu);
  }, []);

  const addEventListenersForScroll = useCallback(() => {
    document.addEventListener("scroll", goToMenu);
  }, []);

  const goToMenu = () => {
    const scroll = document.documentElement.scrollTop;
    const per = Math.ceil(
      (scroll / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    if (per < 30) {
      setScrollHide(false);
      setmenuScroll(false);
    }
    if (per > 30) {
      setScrollHide(true);
    }
    if (per > 40) {
      setmenuScroll(true);
    }
  };

  useEffect(() => {
    addEventListenersForScroll();
    return () => {
      removeEventListeners();
      setScrollHide(false);
      setmenuScroll(false);
    };
  }, [addEventListenersForScroll, removeEventListeners]);

  return (
    <article className={styles.wrap} ref={wrapRef}>
      <Cursor />
      <section
        className={`${styles.manifesto} ${
          !scrollHide ? styles.show : styles.hide
        }`}
      >
        <p className={styles.title}>
          <span className={styles.quote}>"</span>
          현재 만들어지는 작은 일과 결과들이
          <br /> 만들어낸 작은점들, 그리고 그 점들을
          <br /> 선으로 이어, 개발자를 꿈꿉니다.
        </p>
        <div className={styles.mark}>
          <span className={styles.markL}></span>
          <span className={styles.markR}></span>
        </div>
      </section>
      <section
        className={`${styles.menu} ${menuScroll ? styles.show : styles.hide}`}
      >
        <div className={styles.noise}></div>
        <p className={styles.intro}>원하시는 점으로 이동해주세요.</p>
        <div className={styles.menuDot_wrap}>
          <NavLink className={styles.menuDotOne_wrap} to="/about">
            <div className={styles.menuDotOne}>
              About
              <div className={`${styles.menuBorder} ${styles.one}`}></div>
            </div>
          </NavLink>
          <NavLink className={styles.menuDotTwo_wrap} to="/project">
            <div className={styles.menuDotTwo}>
              Project
              <div className={`${styles.menuBorder} ${styles.two}`}></div>
            </div>
          </NavLink>
          <NavLink className={styles.menuDotThree_wrap} to="/contact">
            <div className={styles.menuDotThree}>
              Contact
              <div className={`${styles.menuBorder} ${styles.three}`}></div>
            </div>
          </NavLink>
        </div>
      </section>
    </article>
  );
};

export default Menu;
