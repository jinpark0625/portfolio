import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Nav_m from "../nav_m/nav_m";

const Nav = (props) => {
  const history = useHistory();

  const [where, setWhere] = useState(false);
  const [open, setOpen] = useState(false);

  const menuOpen = (e) => {
    if (e.target.className === "nav_menu_icon__3GokM nav_project__1alOj") {
      setOpen(true);
    }
  };
  const menuClose = (e) => {
    if (e.target.className === "nav_m_close__BTybM") {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (
      history.location.pathname === "/project" ||
      history.location.pathname === "/contact"
    ) {
      setWhere(true);
    } else {
      setWhere(false);
    }
    return () => {
      setWhere(false);
      setOpen(false);
    };
  }, [setWhere, history, setOpen]);

  return (
    <>
      <div className={styles.wrap}>
        <NavLink to="/menu" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${
              !where ? styles.about : styles.project
            }`}
          >
            Home
          </p>
        </NavLink>
        <NavLink to="/about" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${
              !where ? styles.about : styles.project
            }`}
          >
            About
          </p>
        </NavLink>
        <NavLink to="/project" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${
              !where ? styles.about : styles.project
            }`}
          >
            Project
          </p>
        </NavLink>
        <NavLink to="/contact" className={styles.text_wrap}>
          <p
            className={`${styles.text} ${
              !where ? styles.about : styles.project
            }`}
          >
            Contact
          </p>
        </NavLink>
      </div>
      <div className={styles.wrap_m} onClick={menuOpen}>
        <p
          className={`${styles.menu_icon} ${
            !where ? styles.about : styles.project
          }`}
        >
          Menu
        </p>
        <Nav_m open={open} menuClose={menuClose} />
      </div>
    </>
  );
};

export default Nav;
