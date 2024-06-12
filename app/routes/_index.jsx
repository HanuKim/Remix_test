import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h2>Welcome to Remix</h2>
      <ul>
        <li className="mt-1 flex flex-col">
          <Link to="/about" className="text-lg">
            about
          </Link>
          <Link to="/news">news</Link>
        </li>
      </ul>
    </div>
  );
}
