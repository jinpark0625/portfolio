import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./project.module.css";

const Project = ({ Cursor, NavBtn }) => {
  const [listShow, setListShow] = useState(0);

  const progressRef = useRef();

  const mouseOn = (e) => {
    if (e.target.id === "pokemon") {
      progressRef.current.style.strokeDashoffset = "0";
      setListShow(1);
    }
    if (e.target.id === "jintube") {
      progressRef.current.style.strokeDashoffset = "1834";
      setListShow(2);
    }
    if (e.target.id === "notTodo") {
      progressRef.current.style.strokeDashoffset = "1468";
      setListShow(3);
    }
    if (e.target.id === "jinflix") {
      progressRef.current.style.strokeDashoffset = "1102";
      setListShow(4);
    }
    if (e.target.id === "skt") {
      progressRef.current.style.strokeDashoffset = "736";
      setListShow(5);
    }
    if (e.target.id === "sticky") {
      progressRef.current.style.strokeDashoffset = "370";
      setListShow(6);
    }
  };
  const mouseLeave = (e) => {
    if (
      e.target.id === "pokemon" ||
      e.target.id === "jintube" ||
      e.target.id === "notTodo" ||
      e.target.id === "jinflix" ||
      e.target.id === "skt" ||
      e.target.id === "sticky"
    ) {
      progressRef.current.style.strokeDashoffset = "2200";
      setListShow(0);
    }
  };

  return (
    <>
      <article className={styles.wrap}>
        <div className={styles.noise}></div>
        <NavBtn />
        <Cursor />
        <div className={styles.project_wrap}>
          <section className={styles.fixedItem}>
            <svg className={styles.circle_wrap}>
              <g>
                <ellipse
                  ry="350"
                  rx="350"
                  id="svg_20"
                  cy="375.04764"
                  cx="375.00001"
                  fill="none"
                  stroke="#d4d4d4"
                  className={styles.track}
                />
              </g>
              <g>
                <ellipse
                  ry="350"
                  rx="350"
                  id="svg_20"
                  cy="375.04764"
                  cx="375.00001"
                  fill="none"
                  stroke="#d4d4d4"
                  className={styles.progress}
                  ref={progressRef}
                />
              </g>
              <NavLink to="/pokemon">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="pokemon"
                  cy="25.17557"
                  cx="376.42858"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.pokemon}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
              <NavLink to="/jinflix">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="jinflix"
                  cy="724.82448"
                  cx="376.42858"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.jinflix}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
              <NavLink to="/todo">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="notTodo"
                  cy="552.82553"
                  cx="677.42673"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.notTodo}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
              <NavLink to="/skt">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="skt"
                  cy="552.82553"
                  cx="74.99857"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.skt}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
              <NavLink to="/jintube">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="jintube"
                  cy="198.46809"
                  cx="677.42673"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.jintube}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
              <NavLink to="/sticky">
                <ellipse
                  ry="13.57126"
                  rx="13.57126"
                  id="sticky"
                  cy="198.46809"
                  cx="74.99857"
                  stroke="#d4d4d4"
                  fill="#1b1b1b"
                  className={styles.sticky}
                  onMouseOver={mouseOn}
                  onMouseLeave={mouseLeave}
                />
              </NavLink>
            </svg>
            <ul
              className={`${styles.small_title_wrap} ${
                listShow > 0 ? styles.hide : styles.show
              }`}
            >
              <li className={styles.small_title}>Pokemon</li>
              <li className={styles.small_title}>Jintube</li>
              <li className={styles.small_title}>Not To-do list</li>
              <li className={styles.small_title}>
                Sticky
                <br />
                Monster
                <br />
                Lab
              </li>
              <li className={styles.small_title}>Skt AI</li>
              <li className={styles.small_title}>Jinflix</li>
            </ul>
          </section>
          <section className={styles.title}>
            <ul className={styles.list_wrap}>
              <li
                className={`${styles.list_t} ${
                  listShow === 0 ? styles.show_t : styles.hide_t
                }`}
              >
                <h1 className={styles.list_title}>Connecting the dots</h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 1 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>01</p>
                  Pokemon
                  <br />
                  <p className={styles.list_sub}>Project</p>
                </h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 2 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>02</p>
                  Jintube
                  <br />
                  <p className={styles.list_sub}>Website Clone</p>
                </h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 3 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>03</p>
                  Not To-do list
                  <br />
                  <p className={styles.list_sub}>Project</p>
                </h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 4 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>04</p>
                  Jinflix
                  <br />
                  <p className={styles.list_sub}>Website Clone</p>
                </h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 5 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>05</p>
                  Skt AI
                  <p className={styles.list_sub}>Website Clone</p>
                </h1>
              </li>
              <li
                className={`${styles.list} ${
                  listShow === 6 ? styles.show : styles.hide
                }`}
              >
                <h1 className={styles.list_title}>
                  <p className={styles.list_num}>06</p>
                  Sticky <br />
                  Monster Lab
                  <p className={styles.list_sub}> Website Clone</p>
                </h1>
              </li>
            </ul>
          </section>
        </div>
      </article>
      <section className={styles.wrap_m}>
        <NavBtn />
        <ul className={styles.list_wrap_m}>
          <li>
            <NavLink to="/pokemon" className={styles.list_m}>
              Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink to="/jintube" className={styles.list_m}>
              Jintube
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" className={`${styles.list_m} ${styles.margin}`}>
              Not Todo list
            </NavLink>
          </li>
        </ul>
        <ul className={styles.list_wrap_m}>
          <li>
            <NavLink to="/jinflix" className={styles.list_m}>
              Jinflix
            </NavLink>
          </li>
          <li>
            <NavLink to="/skt" className={styles.list_m}>
              Skt AI
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sticky"
              className={`${styles.list_m} ${styles.margin}`}
            >
              Sticky Monster Lab
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Project;
