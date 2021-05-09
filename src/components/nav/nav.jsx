import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavM from "../nav_m/nav_m";

const Nav = (props) => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  const menuOpen = (e) => {
    if (
      e.target.className === "nav_menu_icon__3GokM nav_black__3-noL" ||
      e.target.className === "nav_menu_icon__3GokM nav_white__27U_T"
    ) {
      setOpen(true);
    }
  };
  const menuClose = (e) => {
    if (e.target.className === "nav_m_close__BTybM") {
      setOpen(false);
    }
  };

  const changeColor = () => {
    if (
      history.location.pathname === "/pokemon" ||
      history.location.pathname === "/jintube" ||
      history.location.pathname === "/todo" ||
      history.location.pathname === "/jinflix" ||
      history.location.pathname === "/skt" ||
      history.location.pathname === "/sticky"
    ) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    changeColor();
    return () => {
      setColor(false);
    };
  });

  return (
    <>
      <div className={styles.wrap}>
        <NavLink to="/menu" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${color ? styles.black : styles.white}`}
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/about" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${color ? styles.black : styles.white}`}
          >
            About
          </p>
        </NavLink>
        <NavLink to="/project" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${color ? styles.black : styles.white}`}
          >
            Project
          </p>
        </NavLink>
        <NavLink to="/contact" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${color ? styles.black : styles.white}`}
          >
            Contact
          </p>
        </NavLink>
      </div>
      <div className={styles.wrap_m} onClick={menuOpen}>
        <p
          className={`${styles.menu_icon} ${
            color ? styles.black : styles.white
          }`}
        >
          Menu
        </p>
        <NavM open={open} menuClose={menuClose} />
      </div>
    </>
  );
};

export default Nav;
