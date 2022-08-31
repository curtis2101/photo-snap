const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      colors:{
        brown:{
          500:'#000000',
        }
      }
  },
  plugins: [],
});