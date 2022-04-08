import { Fragment, useEffect, useRef, useState } from "react";

export function Demo4useRef() {
  const [text, setText] = useState("");

  //render1 ref=1
  const renderRef = useRef(1);

  //render1 ref=1
  useEffect(() => {
    renderRef.current++;
    //render1 ref++ = 2
  });
  return (
    <Fragment>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {/* render1 ref=1 */}
      <h1>Renders: {renderRef.current}</h1>
    </Fragment>
  );
}
