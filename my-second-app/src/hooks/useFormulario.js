import { useState } from "react";
export function useFormulario({ type, name }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(type === "checkbox" ? e.target.checked : e.target.value);
  };
  return { type, name, value, onChange };
}
// Esto en el component
// const values = {
//   inicio: 20,
//   increment: 10,
//   decrement: 2,
// };
// const [valueInicio, valueIncremento, valueDecremento] = useConter(values);
export function useConter({ inicio = 0, increment, decrement = 0 }) {
  const [value, setValue] = useState(inicio);

  function incrementarConter() {
    setValue((prev) => prev + increment);
  }
  function decrementarConter() {
    setValue((prev) => prev - decrement);
  }
  return [value, incrementarConter, decrementarConter];
}
