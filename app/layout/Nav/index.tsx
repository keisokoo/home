import { Link } from "@remix-run/react";

const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
];

export default function Nav() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.url}>
            <Link to={item.url} className="text-primary hover:text-blue-200">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
