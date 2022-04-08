import { useState } from "react";
export function useFormulario({ type, name }) {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(type === "checkbox" ? e.target.checked : e.target.value);
  };
  return { type, name, value, onChange };
}
