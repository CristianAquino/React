import { Fragment, useState } from "react";

const initialCart = [
  { id: 1, title: "Product#1", description: "Desc#1" },
  { id: 2, title: "Product#2", description: "Desc#2" },
];
const add = { id: 3, title: "Product#3", description: "Desc#3" };
const update = { id: 2, title: "Product", description: "Desc" };
export function Demo3useState() {
  const [cart, setCart] = useState(initialCart);
  const deleteProduct = (productId) => {
    const Nuevovalue = cart.filter((product) => product.id != productId);
    setCart(Nuevovalue);
  };
  const addProduct = (newProduct) => {
    const Nuevovalue = [newProduct, ...cart];
    setCart(Nuevovalue);
  };
  const updateProduct = (editProduct) => {
    const Nuevovalue = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(Nuevovalue);
  };
  return (
    <Fragment>
      <button onClick={() => addProduct(add)}>Add</button>
      {cart.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: "Product",
                description: "Desc",
              })
            }
          >
            Update
          </button>
        </div>
      ))}
    </Fragment>
  );
}
