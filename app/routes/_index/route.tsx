import type { MetaFunction } from "@remix-run/node";
import styles from "./styles.css";

export const meta: MetaFunction = () => {
  return [{ title: "KEISOKOO" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>KEISOKOO</h1>
    </div>
  );
}
