import { useState } from "react";

export default function RegisterForm() {
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  const isDisabled = !(
    formFields.username &&
    formFields.password &&
    formFields.displayName
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="username">Username </label>
        <input
          type="text"
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="display-name">Display name </label>
        <input
          type="text"
          id="display-name"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value,
            }));
          }}
        />
      </div>
      <button disabled={isDisabled}>Save</button>
    </form>
  );
}
