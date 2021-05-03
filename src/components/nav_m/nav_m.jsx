import React from "react";
import Svg from "../svg/svg";
import styles from "./nav_m.module.css";
import { NavLink } from "react-router-dom";

const Nav_m = ({ open, menuClose }) => {
  console.log(open);
  return (
    <div className={`${open ? styles.menu_wrap_m : styles.hide}`}>
      <div className={styles.menu_m}>
        <NavLink to="/menu" className={styles.text_wrap}>
          <p className={`${styles.text_m} ${styles.black}`}>Home</p>
        </NavLink>
        <NavLink to="/about" className={styles.text_wrap}>
          <p className={`${styles.text_m} ${styles.black}`}>About</p>
        </NavLink>
        <NavLink to="/project" className={styles.text_wrap}>
          <p className={`${styles.text_m} ${styles.black}`}>Project</p>
        </NavLink>
        <NavLink to="/contact" className={styles.text_wrap}>
          <p className={`${styles.text_m} ${styles.black}`}>Contact</p>
        </NavLink>
      </div>
      <div className={styles.close} onClick={menuClose}>
        Close
      </div>
      <div className={styles.logo}>
        <Svg />
      </div>
    </div>
  );
};

export default Nav_m;
