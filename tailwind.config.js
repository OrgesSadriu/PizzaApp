/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        SignInPizzaImage:
          "url(https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?cs=srgb&dl=pexels-pixabay-315755.jpg&fm=jpg&_gl=1*12feruu*_ga*MTUxNjg3NzU4Ny4xNjY2MTEyNzA1*_ga_8JE65Q40S6*MTY2NjExMjcwNS4xLjEuMTY2NjExMjc2Mi4wLjAuMA..)",
      },
      colors: {
        portalColor: "rgba(0,0,0,.7)",
        bg: "#f5ebdc",
        "light-gray": "rgba(240, 242, 247, 0.55)",
        "box-shadow": "rgb(31 38 135 / 37%)",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "769px" },
      sm: { max: "639px" },
      xs: { max: "578px" },
    },
  },
  plugins: [],
};
