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
    <nav className="bg-bg-light p-4">
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.url}>
            <Link to={item.url} className="text-text hover:text-success">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
