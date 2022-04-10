import { Fragment } from "react";
import { StoreProvider } from "../store/StoreProvider";
import { Demo1stateGlobal } from "./Demo1stateGlobal";

export function Class12stateGlobal() {
  return (
    <Fragment>
      <StoreProvider>
        <Demo1stateGlobal />
      </StoreProvider>
    </Fragment>
  );
}
