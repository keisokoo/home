import type { MetaFunction } from "@remix-run/node";
import style from "./style.css";

export const meta: MetaFunction = () => {
  return [{ title: "KEISOKOO" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className={style.wrap}>
      <h1 className={style.title}>KEISOKOO</h1>
    </div>
  );
}
