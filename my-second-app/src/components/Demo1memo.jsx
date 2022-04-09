import { Fragment, useState, useMemo, useCallback, useEffect } from "react";
import List from "./List";

const initialUser = [
  { id: 1, name: "Luis" },
  { id: 2, name: "Maria" },
];

export function Demo1memo() {
  const [users, setUsers] = useState(initialUser);
  const [text, setText] = useState("");
  const [searh, setSearch] = useState("");

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };
  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id != userId));
    },
    [users]
  );
  const handleSearch = () => {
    setSearch(text);
  };
  const filterUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(searh.toLowerCase());
      }),
    [searh, users]
  );
  useEffect(() => console.log("changeUsers"), [users]);
  return (
    <Fragment>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filterUsers} handleDelete={handleDelete} />
    </Fragment>
  );
}
