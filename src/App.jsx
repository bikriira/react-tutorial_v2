import { useState } from "react";
import UserDetails from "./components/UserDetails.jsx";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Bikri",
      email: "bikri@gmail.com",
    },
    {
      id: 2,
      username: "Anson",
      email: "anson@gmail.com",
    },
  ]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(3);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = { id: counter, username, email };
          setCounter(counter + 1);

          setUsers((currentUsersList) => [...currentUsersList, newUser]);
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add user</button>
      </form>
      <br />

      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </>
  );
}
