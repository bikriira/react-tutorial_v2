import { UserProfile } from "./UserProfile";
import { UserDeatails } from "./components/UserDeatails";

export default function App() {
  const mockUsers = [
    {
      id: 1,
      name: "anson",
      email: "anson@gmail.com",
    },
    {
      id: 2,
      name: "michael",
      email: "michael@gmail.com",
    },
    {
      id: 3,
      name: "anson",
      email: "anson@gmail.com",
    },
    {
      id: 4,
      name: "michael",
      email: "michael@gmail.com",
    },
  ];

  return (
    <div>
      {mockUsers.length === 0 && <div> Nothing to show </div>}
      {mockUsers.map((user) => {
        return <UserDeatails key={user.id} user={user} />;
      })}
    </div>
  );
}
