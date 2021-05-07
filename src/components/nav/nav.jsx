import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavM from "../nav_m/nav_m";

const Nav = (props) => {
  const [open, setOpen] = useState(false);

  const menuOpen = (e) => {
    if (e.target.className === "nav_menu_icon__3GokM") {
      setOpen(true);
    }
  };
  const menuClose = (e) => {
    if (e.target.className === "nav_m_close__BTybM") {
      setOpen(false);
    }
  };
  return (
    <>
      <div className={styles.wrap}>
        <NavLink to="/menu" className={styles.text_wrap}>
          <p className={styles.text}>Home</p>
        </NavLink>
        <NavLink to="/about" className={styles.text_wrap}>
          <p className={styles.text}>About</p>
        </NavLink>
        <NavLink to="/project" className={styles.text_wrap}>
          <p className={styles.text}>Project</p>
        </NavLink>
        <NavLink to="/contact" className={styles.text_wrap}>
          <p className={styles.text}>Contact</p>
        </NavLink>
      </div>
      <div className={styles.wrap_m} onClick={menuOpen}>
        <p className={styles.menu_icon}>Menu</p>
        <NavM open={open} menuClose={menuClose} />
      </div>
    </>
  );
};

export default Nav;
