module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        helv: "Helvetica, Arial, sans-serif",
      },
      minHeight: {
        75: "75vh",
      },
      width: {
        23: "23%",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "bounce-slow": "bounce 400ms infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-1.5%)" },
          "50%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
