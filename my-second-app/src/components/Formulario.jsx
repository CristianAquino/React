import { useState } from "react";

export function Formulario() {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // setTodo({ ...todo, [e.target.name]: e.target.value });
    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoName"
          placeholder="Ingrese Todo"
          value={todo.todoName}
          onChange={handleChange}
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese descripcion"
          value={todo.todoDescripcion}
          onChange={handleChange}
        />
        <select
          name="todoEstado"
          value={todo.todoEstado}
          onChange={handleChange}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Completado">Completado</option>
        </select>
        <div>
          <input
            type="checkbox"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
          />
          <span>Dar prioridad</span>
        </div>
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}
