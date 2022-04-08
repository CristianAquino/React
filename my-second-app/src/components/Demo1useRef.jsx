import { Fragment, useState, useRef } from "react";

export function Demo1useRef() {
  const [text, setText] = useState("");
  const inputRef = useRef();
  const handleFocus = () => {
    const input = inputRef.current;
    // input.value = "ga";
    // console.log(input.value);
    input.focus();
  };
  return (
    <Fragment>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleFocus}>Focus</button>
    </Fragment>
  );
}
