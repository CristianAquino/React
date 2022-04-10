import { Fragment, useReducer } from "react";

const types = {
  increment: "increment",
  decrement: "decrement",
  resest: "reset",
};

const reducer = (state, action) => {
  if (action.type === types.increment) return state + 1;
  if (action.type === types.decrement) return state - 1;
  if (action.type === types.resest) return 0;
  return state;
};

export function Demo1useReducer() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <Fragment>
      <h1>Click: {counter}</h1>
      <button onClick={() => dispatch({ type: types.increment })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: types.decrement })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: types.reset })}>Reset</button>
    </Fragment>
  );
}
