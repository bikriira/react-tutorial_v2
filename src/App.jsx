import { useState } from "react";
import UserDetails from "./components/UserDetails.jsx";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Bikri",
      email: "bikri@gmail.com",
    },
    {
      id: 2,
      name: "Anson",
      email: "anson@gmail.com",
    },
  ]);

  return users.map((user) => <UserDetails key={user.id} user={user} setUsers={setUsers}/>);
}
