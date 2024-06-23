/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Link } from "@remix-run/react";
import { useRef, useState } from "react";
import styles from "./styles.css";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [dragged, setDragged] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
    setDragged(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    setDragged(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 10) {
      setDragged(true);
    }
  };
  return (
    <nav
      className={styles.wrap}
      ref={scrollContainerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li key={item.url}>
            <Link
              to={item.url}
              className={styles.item}
              style={{
                pointerEvents: dragged ? "none" : "auto",
              }}
              draggable={false}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
