import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "KEISOKOO" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="p-4 font-4">
      <h1 className="text-16px">KEISOKOO</h1>
    </div>
  );
}
