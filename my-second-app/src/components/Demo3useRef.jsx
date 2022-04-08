import { Fragment, useEffect, useRef, useState } from "react";

export function Demo3useRef() {
  const style = {
    height: "180vh",
    background: "pink",
  };
  const [background, setBackground] = useState(style);
  const divRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const reference = divRef.current;
      const { y } = reference.getBoundingClientRect();
      const background = y <= 0 ? "orange" : "pink";
      setBackground({ ...style, background });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Fragment>
      <div ref={divRef} style={{ ...background }}>
        <h1>Scroll</h1>
      </div>
    </Fragment>
  );
}
