import { useState } from "react";
export function useFormulario({ type, name }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(type === "checkbox" ? e.target.checked : e.target.value);
  };
  return { type, name, value, onChange };
}

export function useConter({ inicio = 0, increment = 1, decrement = 0 }) {
  const [value, setValue] = useState(inicio);

  function incrementarConter() {
    setValue((prev) => prev + increment);
  }
  function decrementarConter() {
    setValue((prev) => prev - decrement);
  }
  return [value, incrementarConter, decrementarConter];
}
