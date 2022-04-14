import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export function Layout() {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
