import { Fragment } from "react";
import { Footer } from "./Footer";
import { Formulario2 } from "./Formulario2";
import { Formulario } from "./Formulario";
import { Information } from "./Information";
import { Navbar } from "./Navbar";
import { Texto } from "./Texto";
import { Imagen } from "./Imagen";

export function Home() {
  return (
    <Fragment>
      <Navbar />
      <Information>
        <Texto />
        <Imagen />
      </Information>
      <Information>
        <Imagen />
        <Texto />
      </Information>
      <Footer />
      {/* <Formulario /> */}
      {/* <Formulario2 /> */}
    </Fragment>
  );
}
