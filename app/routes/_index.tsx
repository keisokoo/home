import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { useMemo } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

const pages = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
];

export default function Index() {
  const [searchParams] = useSearchParams();
  const page = useMemo(() => {
    return pages.find((page) => page.url === searchParams.get("page"));
  }, [searchParams]);

  if (!page) {
    return (
      <div className="font-sans p-4">
        <h1 className="text-3xl">Welcom!e to Remix (SPA Mode)</h1>
        <ul className="list-disc mt-4 pl-6 space-y-2">
          {pages.map((page) => (
            <li key={page.url}>
              <a
                href={`/?page=${page.url}`}
                className="text-blue-700 underline visited:text-purple-900"
              >
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix (SPA Mode)</h1>
    </div>
  );
}
