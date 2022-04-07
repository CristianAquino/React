import { Fragment } from "react";
import style from "./NavLinks.module.css";
import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <Fragment>
      <ul className={style.container}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </Fragment>
  );
}
