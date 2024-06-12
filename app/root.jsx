import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./tailwind.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};
export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <links />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <Index /> */}
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
