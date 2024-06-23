import { globalResetStyle } from "./helper.css";

globalResetStyle("*", {
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "#e5e7eb",
});

globalResetStyle("::before, ::after", {
  boxSizing: "border-box",
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: "#e5e7eb",
  content: "''",
});

globalResetStyle("html, :host", {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: "100%",
  MozTabSize: 4,
  OTabSize: 4,
  tabSize: 4,
  fontFamily:
    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  WebkitTapHighlightColor: "transparent",
});

globalResetStyle("body", {
  margin: 0,
  lineHeight: "inherit",
});

globalResetStyle("hr", {
  height: 0,
  color: "inherit",
  borderTopWidth: "1px",
});

globalResetStyle("abbr[title]", {
  textDecoration: "underline dotted",
});

globalResetStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

globalResetStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalResetStyle("b, strong", {
  fontWeight: "bolder",
});

globalResetStyle("code, kbd, samp, pre", {
  fontFamily:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  fontSize: "1em",
});

globalResetStyle("small", {
  fontSize: "80%",
});

globalResetStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalResetStyle("sub", {
  bottom: "-0.25em",
});

globalResetStyle("sup", {
  top: "-0.5em",
});

globalResetStyle("table", {
  textIndent: 0,
  borderColor: "inherit",
  borderCollapse: "collapse",
});

globalResetStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontFeatureSettings: "inherit",
  fontVariationSettings: "inherit",
  fontSize: "100%",
  fontWeight: "inherit",
  lineHeight: "inherit",
  letterSpacing: "inherit",
  color: "inherit",
  margin: 0,
  padding: 0,
});

globalResetStyle("button, select", {
  textTransform: "none",
});

globalResetStyle(
  'button, input[type="button"], input[type="reset"], input[type="submit"]',
  {
    WebkitAppearance: "button",
    backgroundColor: "transparent",
    backgroundImage: "none",
  }
);

globalResetStyle(":-moz-focusring", {
  outline: "auto",
});

globalResetStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

globalResetStyle("progress", {
  verticalAlign: "baseline",
});

globalResetStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

globalResetStyle('[type="search"]', {
  WebkitAppearance: "textfield",
  outlineOffset: "-2px",
});

globalResetStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

globalResetStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

globalResetStyle("summary", {
  display: "list-item",
});

globalResetStyle(
  "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre",
  {
    margin: 0,
  }
);

globalResetStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalResetStyle("legend", {
  padding: 0,
});

globalResetStyle("ol, ul, menu", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

globalResetStyle("dialog", {
  padding: 0,
});

globalResetStyle("textarea", {
  resize: "vertical",
});

globalResetStyle("input::placeholder, textarea::placeholder", {
  opacity: 1,
  color: "#9ca3af",
});

globalResetStyle("input::-moz-placeholder, textarea::-moz-placeholder", {
  opacity: 1,
  color: "#9ca3af",
});

globalResetStyle('button, [role="button"]', {
  cursor: "pointer",
});

globalResetStyle(":disabled", {
  cursor: "default",
});

globalResetStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

globalResetStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

globalResetStyle("[hidden]", {
  display: "none",
});
