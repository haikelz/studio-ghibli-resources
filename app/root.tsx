import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Provider } from "jotai";
import ProgressBar from "./components/ui/progress-bar";
import "./tailwind.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <Provider>
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="bg-[#1c1c1c] min-h-screen p-4 text-gray-100 md:p-6">
          <ProgressBar />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </Provider>
  );
}
