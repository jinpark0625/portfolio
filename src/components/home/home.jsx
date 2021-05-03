import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./home.module.css";
import Canvas from "../canvas/canvas";

const Home = ({ Cursor }) => {
  const [btn, setBtn] = useState(false);
  const [count, setCount] = useState(0);

  const onMouseDown = () => {
    setCount(count + 1);
    if (count >= 4) {
      setBtn(true);
    }
  };

  useEffect(() => {
    return () => {
      setBtn(false);
      setCount(0);
    };
  }, []);

  return (
    <div className={styles.main}>
      <Cursor />
      <div className={styles.noise} onMouseDown={onMouseDown}></div>
      <Canvas />
      <h4 className={styles.text}>점들을 이어주세요.</h4>
      <NavLink to="/menu">
        <span className={`${styles.next} ${btn ? styles.show : styles.hide}`}>
          <h4>다음으로</h4>
          <div className={styles.border}></div>
        </span>
      </NavLink>
    </div>
  );
};

export default Home;
