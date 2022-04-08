import { Fragment, useEffect, useRef, useState } from "react";
import { getPost } from "../getPost";

const initialPost = {
  title: "post1",
};

export function Demo5useRef() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost(1).then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      }, 1500);
    });
  };
  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <Fragment>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}
