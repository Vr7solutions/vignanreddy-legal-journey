import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#12233f", gold: "#c49a54", paper: "#f7f8fa" }, fontFamily: { sans: ["Arial", "sans-serif"] } } }, plugins: [] };
export default config;
