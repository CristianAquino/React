import { Fragment, useReducer } from "react";
import {
  initialProductState,
  productReducer,
} from "../reducers/productReducer";
import { types } from "../types";

export function Demo3useReducer() {
  const [productState, dispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const { products, cart, activeProduct } = productState;
  return (
    <Fragment>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.productShow,
                  payload: product,
                })
              }
            >
              Show
            </button>
            <button
              onClick={() =>
                dispatch({ type: types.productAddToCart, payload: product })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <ul>
        {cart.map((cart) => (
          <li key={cart.id}>
            {cart.title} - quantity {cart.quantity}
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveOneFromCart,
                  payload: cart.id,
                })
              }
            >
              Remove one
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.productRemoveFromCart,
                  payload: cart.id,
                })
              }
            >
              Remove all
            </button>
          </li>
        ))}
      </ul>
      <h2>Preview</h2>
      <p>{activeProduct.title}</p>
    </Fragment>
  );
}
