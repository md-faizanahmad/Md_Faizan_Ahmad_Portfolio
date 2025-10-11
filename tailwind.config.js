// /** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "glass-bg": "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: ["daisyui"],
  daisyui: {
    themes: ["light", "dark"], // Optional: enable light/dark themes
  },
};
export const plugins = [heroui()];
export const darkMode = "class";
