import { globalStyle } from "@vanilla-extract/css";
import { appStyles } from "./helper.css";
import { global } from "./layers.css";
import { vars } from "./theme.css";

export const bodyStyle = appStyles({
  font: {
    fontSize: "16px",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {},
  content: {
    flex: 1,
    padding: "1.2rem",
  },
});

globalStyle("html, body", {
  "@layer": {
    [global]: {
      color: vars.color.text,
      backgroundColor: vars.color.background,
      minHeight: "100%",
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
