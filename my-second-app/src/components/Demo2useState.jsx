import { Fragment, useEffect, useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Description",
};

export function Demo2useState() {
  const [product, setProduct] = useState(initialProduct);

  //   const updateProduct = () => {
  //     setProduct({ ...product, title: "nuevo" });
  //   };
  const updateProduct = (property, value) => {
    setProduct({ ...product, [property]: value });
  };

  return (
    <Fragment>
      {/* <button onClick={updateProduct}>Update</button> */}
      <button onClick={() => updateProduct("title", "nuevo")}>Update</button>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
    </Fragment>
  );
}
