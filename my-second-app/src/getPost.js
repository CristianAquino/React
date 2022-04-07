export async function getPost(id) {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  const res = await fetch(url);
  const post = await res.json();
  return post;
}
