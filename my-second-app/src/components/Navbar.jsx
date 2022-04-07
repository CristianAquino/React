import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import style from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={style.container}>
      <Logo />
      <NavLinks />
    </div>
  );
}
