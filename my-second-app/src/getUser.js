export async function getUser() {
  const value = Math.floor(Math.random() * 10) + 1;
  const url = `https://jsonplaceholder.typicode.com/users/${value}`;
  const res = await fetch(url);
  const user = await res.json();
  return user;
}
