export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username =formData.get("username");
        const password = formData.get("password");
      }}
    >
      <label htmlFor="username">Username </label>
      <input
        type="text"
        name="username"
        id="username"
        onKeyDown={(e) => {
          console.log(`Username: ${e.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        name="password"
        id="password"
        onKeyDown={(e) => {
          console.log(`Password: ${e.target.value}`);
        }}
      />
      <br />
      <button>Login</button>
    </form>
  );
}
