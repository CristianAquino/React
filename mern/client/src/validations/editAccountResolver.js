import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup.object().shape({
  name: yup
    .string("El nombre debe se un texto")
    .required("Debe ingresar un nombre"),
  email: yup
    .string("El email debe ser un texto")
    .required("Debe ingresar un correo electronico")
    .email("Debe ingresar un correo electronico valido"),
  role: yup.string("El rol debe ser un texto").oneOf(["regular", "admin"]),
});
export default yupResolver(schema);
