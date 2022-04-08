import { Fragment, useCallback, useEffect, useState } from "react";
import { getUser } from "../getUser";
import { getPost } from "../getPost";

// const initialUser = {
//   name: "Cristian",
//   email: "cristian@gmail.com",
// };

export function Demo1useEffect() {
  // const [user, setUser] = useState(initialUser);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const updateUser = () => {
    getUser().then((newUser) => setUser(newUser));
  };

  // const updatePost = () => {
  //   getPost(user.id).then((newPost) => setPosts(newPost));
  // };

  const updatePost = useCallback(() => {
    getPost(user.id).then((newPost) => setPosts(newPost));
  }, [user.id]);

  useEffect(updateUser, []);

  useEffect(() => {
    if (user?.id) updatePost();
  }, [user]);

  return (
    <Fragment>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <br />
      <h2>Posts - User: {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </Fragment>
  );
}
