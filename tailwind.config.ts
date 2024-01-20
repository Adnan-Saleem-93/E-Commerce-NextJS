import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#0000ff",
          secondary: "#00ebff",
          accent: "#003bff",
          neutral: "#121815",
          "base-100": "#fff7fd",
          info: "#00ffff",
          success: "#85f94e",
          warning: "#ff9b00",
          error: "#e12250",
          body: {
            "background-color": "#fff7fd",
          },
        },
        darkTheme: {
          primary: "#a700ff",
          secondary: "#00c100",
          accent: "#0057ff",
          neutral: "#172537",
          "base-100": "#182532",
          info: "#5fcfff",
          success: "#00e287",
          warning: "#ff8200",
          error: "#b92843",
          body: {
            "background-color": "#182532",
          },
        },
      },
    ],
  },
};
export default config;
