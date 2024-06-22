import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const isDisabled = !(username && password && displayName);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="display-name">Display name </label>
        <input
          type="text"
          id="display-name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <button disabled={isDisabled}>Save</button>
    </form>
  );
}
