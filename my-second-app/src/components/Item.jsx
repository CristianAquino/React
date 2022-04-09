import { Fragment, memo, useEffect } from "react";

const Item = memo(({ user, handleDelete }) => {
  //   useEffect(() => console.log("Item Render" + user.name));
  return (
    <Fragment>
      <li>
        {user.name}
        <button onClick={() => handleDelete(user.id)}>Delete</button>
      </li>
    </Fragment>
  );
});
export default Item;
