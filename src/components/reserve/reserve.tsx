import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
}

export default function Reserve() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      if (res.ok) {
        const data: User[] = await res.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    };
    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date, time, userId }),
    });

    if (res.ok) {
      const data = await res.json();
      alert("Reservation created successfully");
    } else {
      const errorText = await res.text(); // 응답 내용을 텍스트로 읽음
      alert(`Failed to create reservation: ${errorText}`);
    }
  };

  return (
    <div>
      <h1>Create Reservation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type="submit">Create Reservation</button>
      </form>
    </div>
  );
}
