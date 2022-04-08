import { Fragment, useState } from "react";
import { Demo1useRef } from "./Demo1useRef";
import { Demo2useRef } from "./Demo2useRef";
import { Demo3useRef } from "./Demo3useRef";
import { Demo4useRef } from "./Demo4useRef";
import { Demo5useRef } from "./Demo5useRef";

export function Class6useRef() {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      {/* <Demo1useRef /> */}
      {/* <Demo2useRef /> */}
      {/* <Demo3useRef /> */}
      {/* <Demo4useRef /> */}
      {show && <Demo5useRef />}
    </Fragment>
  );
}
