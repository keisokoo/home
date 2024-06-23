import { globalStyle, layer } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const reset = layer("reset");
export const global = layer("global");
export const app = layer("app");

globalStyle("html, body", {
  "@layer": {
    [global]: {
      color: vars.color.text,
    },
  },
});

globalStyle(`::-webkit-scrollbar`, {
  width: "12px",
  height: "12px",
});
globalStyle(`::-webkit-scrollbar-thumb`, {
  backgroundColor: vars.color.border,
  borderRadius: "100px",
  border: `4px solid transparent`,
  backgroundClip: "padding-box",
  cursor: "default",
  transition: "0.3s",
});

globalStyle(`::-webkit-scrollbar-thumb:hover`, {
  backgroundColor: vars.color.borderLight,
});
globalStyle(`::-webkit-scrollbar-thumb:active`, {
  backgroundColor: vars.color.borderDark,
});
globalStyle(`::-webkit-scrollbar-track`, {
  backgroundColor: "transparent",
  borderRadius: "100px",
});
