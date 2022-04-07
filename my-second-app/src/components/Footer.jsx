import { Link } from "react-router-dom";
import style from "./Footer.module.css";

export function Footer() {
  const colors = {
    fa: "#1877f2",
    tw: "#0099ff",
    in: "#e4405f",
  };
  return (
    <div className={style.container}>
      <ul>
        <li style={{ background: colors.fa }}>
          <Link to="#">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </Link>
        </li>
        <li style={{ background: colors.tw }}>
          <Link to="#">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </Link>
        </li>
        <li style={{ background: colors.in }}>
          <Link to="#">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
