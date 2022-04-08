import { Fragment, useState, useRef } from "react";

export function Demo2useRef() {
  const [text, setText] = useState("hola");
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef();
  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <Fragment>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      {isCopied && <h1>Copiado</h1>}
    </Fragment>
  );
}
