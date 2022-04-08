import { Fragment, useState } from "react";
import { Demo1useEffect } from "./Demo1useEffect";
import { Demo2useEffect } from "./Demo2useEffect";

export function Class5useEffect() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      {/* <Demo1useEffect /> */}
      {show && <Demo2useEffect />}
    </Fragment>
  );
}
