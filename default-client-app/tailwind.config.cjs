module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2c9949",
          secondary: "#284b85",
          accent: "#706f6f",
          "base-200": "#dde4f0",
          "base-300": "#e7e7e7",
        },
      },
      "dark", 
      "synthwave",
    ],
  },
};