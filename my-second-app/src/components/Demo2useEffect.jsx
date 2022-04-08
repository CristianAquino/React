import { Fragment, useEffect, useState } from "react";

export function Demo2useEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Fragment>
      <h1>{windowWidth}</h1>
    </Fragment>
  );
}
