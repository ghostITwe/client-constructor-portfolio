const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main-color': '#282828'
      },
      fontFamily: {
        'jetbrains': ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
      },
      dropShadow: {
        'white': '0 0 1px white'
      }
    },
  },
  plugins: [],
}
