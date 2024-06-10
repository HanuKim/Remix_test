import { useState } from "react";

export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [membership, setMembership] = useState(10);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, membership }),
    });
    if (res.ok) {
      alert("User registered successfully");
    } else {
      alert("Failed to register user");
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Membership"
          value={membership}
          onChange={(e) => setMembership(parseInt(e.target.value))}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
