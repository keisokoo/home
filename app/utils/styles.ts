import { Properties } from "csstype";

export const flex = (
  type: "row" | "column" | "center" | "between" = "row",
  values?: Properties
) => {
  return {
    display: "flex",
    flexDirection:
      values?.flexDirection || (type === "column" ? "column" : "row"),
    flexWrap: values?.flexWrap || "nowrap",
    justifyContent:
      values?.justifyContent ||
      (type === "center"
        ? "center"
        : type === "between"
        ? "space-between"
        : "flex-start"),
    alignItems:
      values?.alignItems || (type === "column" ? "flex-start" : "center"),
    gap: values?.gap || "0",
  };
};
