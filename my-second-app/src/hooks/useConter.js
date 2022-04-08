import { useState } from "react";
export function useConter({ inicio = 0, increment = 1, decrement = 1 }) {
  const [value, setValue] = useState(inicio);

  function incrementarConter() {
    setValue((prev) => prev + increment);
  }
  function decrementarConter() {
    setValue((prev) => prev - decrement);
  }
  return [value, incrementarConter, decrementarConter];
}
