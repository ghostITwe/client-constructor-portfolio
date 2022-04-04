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
        'white': [
          '0 4px 3px rgb(255 255 255 / 0.07)',
          '0 2px 2px rgb(255 255 255 / 0.6)'
        ]
      },
      gap: {
        '15': '3.75rem'
      },
      width: {
        '25': '6.25rem'
      }
    },
  },
  plugins: [],
}
