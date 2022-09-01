const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
			fontFamily: {
                body: ['DM Sans', 'sans-serif'],
            },
		},
      colors:{
        brown:{
          500:'#000000',
        }
      }
  },
  plugins: [],
});