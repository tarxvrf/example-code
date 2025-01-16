import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
    
    if (result?.error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.push("/home"); // Redirect to a dashboard or home page after successful login
    }
  };

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      hello
      <button data-set-theme="" data-act-class="ACTIVECLASS">
        light
      </button>
      <button data-set-theme="dark" data-act-class="ACTIVECLASS">
        dark
      </button>

      <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>

    </div>
  );
}
