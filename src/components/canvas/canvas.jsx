import React, { useEffect, useRef } from "react";
// import useViewportSize from "../useViewportSize/useViewportSize";
import DrawDot from "./drawDot";
import styles from "./canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef();
  const width = window.innerWidth;
  const height = window.innerHeight;

  useEffect(() => {
    if (canvasRef && width && height) {
      DrawDot(canvasRef, width, height);
    }
  }, [height, width, canvasRef]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className={styles.canvas}
      />
    </>
  );
};

export default Canvas;
