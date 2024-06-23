import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "~/styles/layers.css";
import "~/styles/reset.css";
import Nav from "./layout/Nav";
import { themeClass } from "./styles/theme.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <Meta />
        <Links />
      </head>
      <body className={themeClass}>
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
      <Nav />
      <Outlet />
    </div>
  );
}

// export function HydrateFallback() {
//   return (
//     <div className="w-100dvh h-100dvh flex items-center justify-center">
//       <div>Loading...</div>
//     </div>
//   );
// }
