import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "KEISOKOO" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div>
      <h1>KEISOKOO</h1>
    </div>
  );
}
