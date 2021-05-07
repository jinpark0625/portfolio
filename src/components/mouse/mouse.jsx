import React, { useRef, useEffect, useState, memo } from "react";
import styles from "./mouse.module.css";
import { useCallback } from "react/cjs/react.development";

const Mouse = memo((props) => {
  const mouseRef = useRef();

  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  }, []);

  useEffect(() => {
    addEventListeners();
    return () => {
      removeEventListeners();
      setClicked(false);
      setHidden(false);
    };
  }, [addEventListeners, removeEventListeners]);

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e) => {
    setCoordinate({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  return (
    <div
      ref={mouseRef}
      style={{
        left: `${coordinate.x}px`,
        top: `${coordinate.y}px`,
      }}
      className={`${styles.cursor} ${!hidden ? styles.show : styles.hide} ${
        clicked ? styles.onClick : styles.offClick
      }`}
    ></div>
  );
});

export default Mouse;
