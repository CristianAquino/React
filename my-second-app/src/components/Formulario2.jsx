import { useFormulario } from "../hooks/useFormulario";

export function Formulario2() {
  const txt = useFormulario({ type: "text", name: "txtinput" });
  const txtarea = useFormulario({ type: "textarea" });
  const txtselect = useFormulario({ type: "select" });
  const txtcheck = useFormulario({ type: "checkbox" });
  console.log(txt);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input {...txt} />
        <textarea placeholder="Ingrese descripcion" {...txtarea} />
        <select {...txtselect}>
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <div>
          <input {...txtcheck} />
          <span>Dar prioridad</span>
        </div>
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}
