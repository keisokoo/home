import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <Link
            to="/blah"
            className="text-blue-700 underline visited:text-purple-900"
          >
            blah page
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-700 underline visited:text-purple-900"
            to="/"
          >
            index
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
