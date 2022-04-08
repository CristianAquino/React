import { Fragment } from "react";
import { useConter } from "../hooks/useConter";

const values = {
  inicio: 20,
  increment: 10,
  decrement: 2,
};

export function Demo1useState() {
  const [initial, incrementar, decrementar] = useConter(values);
  // const [initial, incrementar, decrementar] = useConter({});
  return (
    <Fragment>
      <button onClick={incrementar}>incrementar</button>
      <button onClick={decrementar}>decrementar</button>
      <h1>{initial}</h1>
    </Fragment>
  );
}
