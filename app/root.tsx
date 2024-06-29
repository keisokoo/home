import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import clsx from "clsx";
import "~/styles/global.css";
import Nav from "./layout/Nav";
import { bodyStyle } from "./styles/root.css";
import { themeClass } from "./styles/theme.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={bodyStyle.font}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />

        <Meta />
        <Links />
      </head>
      <body className={clsx(themeClass)}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <main className={bodyStyle.main}>
      <div className={bodyStyle.header}>
        <Nav />
      </div>
      <div className={bodyStyle.content}>
        <Outlet />
      </div>
    </main>
  );
}

// export function HydrateFallback() {
//   return (
//     <div className="w-100dvh h-100dvh flex items-center justify-center">
//       <div>Loading...</div>
//     </div>
//   );
// }
