import style from "./Information.module.css";

export function Information({ children }) {
  return <div className={style.container}>{children}</div>;
}
