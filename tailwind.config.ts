import type { Config } from "tailwindcss";

const colorVariables = {
  White: "#ffffff",
  Gray50: "#f7f8f9",
  Gray100: "#e8ebed",
  Gray200: "#c9cdd2",
  Gray300: "#9ea4aa",
  Gray400: "#72787f",
  Gray500: "#4d5053",
  Gray600: "#3d4043",
  Black: "#1b1d1f",
  Primary50: "#f8f5ff",
  Primary100: "#e2d6ff",
  Primary200: "#c8acff",
  Primary500: "#894fff",
  Primary600: "#6d35de",
  Primary700: "#5221b5",
  Red50: "#fef3f2",
  Red100: "#ffeaea",
  Red200: "#ffdddd",
  Red500: "#e02d3c",
  Red600: "#b91c1c",
  Red700: "#981b25",
  Green50: "#f5fbf8",
  Green100: "#e9fdf0",
  Green200: "#b1f3c8",
  Green500: "#08875d",
  Green600: "#04724d",
  Green700: "#066042",
  Yellow50: "#fffaeb",
  Yellow100: "#fff5d7",
  Yellow200: "#fedf89",
  Yellow500: "#b25e09",
  Yellow600: "#96530f",
  Yellow700: "#80460d",
  Blue50: "#f7faff",
  Blue100: "#edf3ff",
  Blue200: "#b8cfff",
  Blue500: "#2f6fed",
  Blue700: "#1f4abf",
};

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "40px": ["40px", { lineHeight: "52px", letterSpacing: "-0.4px" }],
        "32px": ["32px", { lineHeight: "42px", letterSpacing: "-0.4px" }],
        "24px": ["24px", { lineHeight: "34px", letterSpacing: "-0.4px" }],
        "18px": ["18px", { lineHeight: "26px", letterSpacing: "-0.4px" }],
        "16px": ["16px", { lineHeight: "24px", letterSpacing: "-0.4px" }],
        "14px": ["14px", { lineHeight: "20px", letterSpacing: "-0.4px" }],
        "12px": ["12px", { lineHeight: "16px", letterSpacing: "-0.4px" }],
      },
      colors: {
        text: colorVariables.Black,
        "text-light": colorVariables.Gray200,
        "text-dark": colorVariables.Gray500,
        border: colorVariables.Gray200,
        "border-light": colorVariables.Gray100,
        "border-dark": colorVariables.Gray300,
        bg: colorVariables.White,
        "bg-light": colorVariables.Gray50,
        "bg-dark": colorVariables.Gray100,
        primary: colorVariables.Primary500,
        "primary-light": colorVariables.Primary200,
        "primary-dark": colorVariables.Primary700,
        success: colorVariables.Green500,
        "success-light": colorVariables.Green200,
        "success-dark": colorVariables.Green700,
        error: colorVariables.Red500,
        "error-light": colorVariables.Red200,
        "error-dark": colorVariables.Red700,
        warning: colorVariables.Yellow500,
        "warning-light": colorVariables.Yellow200,
        "warning-dark": colorVariables.Yellow700,
        info: colorVariables.Blue500,
        "info-light": colorVariables.Blue200,
        "info-dark": colorVariables.Blue700,
      },
      height: {
        "100vh": "100vh",
        "100svh": "100svh",
        "100lvh": "100lvh",
        "100dvh": "100dvh",
      },
      width: {
        "100vw": "100vw",
        "100svw": "100svw",
        "100lvw": "100lvw",
        "100dvw": "100dvw",
      },
    },
  },
  plugins: [],
} satisfies Config;
