const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
    flowbite.plugin(),
  ],
}

