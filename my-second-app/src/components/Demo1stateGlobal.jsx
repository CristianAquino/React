import { Fragment } from "react";
import { useDispatch, useStore } from "../store/StoreProvider";
import { types } from "../store/storeReducer";

export function Demo1stateGlobal() {
  const { user, products } = useStore();
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h2>User: {user?.name}</h2>
      <button onClick={() => dispatch({ type: types.authLogout })}>
        Logout
      </button>
      <button
        onClick={() =>
          dispatch({
            type: types.authLogin,
            payload: { id: 1, name: "Cristian" },
          })
        }
      >
        Login
      </button>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: types.productDeleteAll })}>
        Delete All
      </button>
      <button onClick={() => dispatch({ type: types.productChange })}>
        Change
      </button>
    </Fragment>
  );
}
