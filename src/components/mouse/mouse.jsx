import React, { useRef, useEffect, useState } from "react";
import styles from "./mouse.module.css";
import { useCallback } from "react/cjs/react.development";

const Mouse = (props) => {
  const mouseRef = useRef();

  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouseLinked, setMouseLinked] = useState(false);

  const back = useCallback((event) => {
    if (event.target.className === "menu_menuDotOne__UO9Al") {
      event.target.style.transform = "";
      event.target.firstChild.nextSibling.style.transform = "";
      setMouseLinked(false);
    }
    if (event.target.className === "menu_menuDotTwo__1_Wsb") {
      event.target.style.transform = "";
      event.target.firstChild.nextSibling.style.transform = "";
      setMouseLinked(false);
    }
    if (event.target.className === "menu_menuDotThree__w8JqD") {
      event.target.style.transform = "";
      event.target.firstChild.nextSibling.style.transform = "";
      setMouseLinked(false);
    }
  }, []);

  const magnet = useCallback(
    (event) => {
      const x = event.offsetX;
      const y = event.offsetY;
      const width = event.target.offsetWidth;
      const height = event.target.offsetHeight;
      const moveArea = 30;
      const xMove = (x / width) * (moveArea * 2) - moveArea;
      const yMove = (y / height) * (moveArea * 2) - moveArea;
      const target = event.target;

      if (target.className === "menu_menuDotOne__UO9Al") {
        const child = event.target.firstChild.nextSibling.style;
        loop(target, xMove, yMove, child);
        setMouseLinked(true);
        target.addEventListener("mouseleave", back);
      }
      if (target.className === "menu_menuDotTwo__1_Wsb") {
        const child = event.target.firstChild.nextSibling.style;
        loop(target, xMove, yMove, child);
        setMouseLinked(true);
        target.addEventListener("mouseleave", back);
      }
      if (target.className === "menu_menuDotThree__w8JqD") {
        const child = event.target.firstChild.nextSibling.style;
        loop(target, xMove, yMove, child);
        setMouseLinked(true);
        target.addEventListener("mouseleave", back);
      }
    },
    [back]
  );

  const loop = (target, xMove, yMove, child) => {
    target.style.transform = `translate(${xMove}px, ${yMove}px)`;
    child.transform = "scale(1.2)";
  };

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", magnet);
  }, [magnet]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", magnet);
    document.addEventListener("mouseleave", back);
  }, [magnet, back]);

  useEffect(() => {
    addEventListeners();
    return () => {
      removeEventListeners();
      setMouseLinked(false);
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
      } ${mouseLinked ? styles.mouse_hover : styles.mouse}`}
    ></div>
  );
};

export default Mouse;
