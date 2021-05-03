// import { useState, useEffect } from "react";
// import throttle from "lodash/throttle";

// const useViewportSize = () => {
//   const [height, setHeight] = useState(0);
//   const [width, setWidth] = useState(0);

//   const heightSetter = throttle(() => {
//     setHeight(window.innerHeight);
//     setWidth(window.innerWidth);
//   }, 500);

//   useEffect(() => {
//     window.addEventListener("resize", heightSetter);
//     heightSetter();
//   }, [heightSetter]);

//   return { width, height };
// };

// export default useViewportSize;
