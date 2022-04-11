import logo from "../logo.svg";
import style from "./Information.module.css";

export function Imagen() {
  return (
    <div className={style.imgBx}>
      <img src={logo} alt="" />
    </div>
  );
}
