/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/blur-background.png)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        green: {
          300: "#00B37E",
          500: "#00875F",
          700: "#015F43",
        },
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          450: "#65696d",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
      animation: {
        "fade-in-down":
          "fade-in-down 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
        "fade-in-top":
          "fade-in-top 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
        "fade-in-left":
          "fade-in-left 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.5s both",
        "fade-in-right":
          "fade-in-right 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) 0.5s both",
        "fade-in-right-back":
          "fade-in-right-back 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) 0.7s both",
        "fade-in-forward":
          "fade-in-forward 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) 0.3s both",
        "fade-reverse":
          "fade-out-top 0.5 cubic-bezier(0.455, 0.030, 0.515, 0.955) 8s both",
        "content-show": "content-show 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
    keyframes: {
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-100px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-top": {
        "0%": {
          opacity: "0",
          transform: "translateY(100px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      "fade-in-left": {
        "0%": {
          opacity: "0",
          transform: "translateX(-1000px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-in-right": {
        "0%": {
          opacity: "0",
          transform: "translateX(1000px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-in-right-back": {
        "0%": {
          opacity: "0",
          transform: "translateX(1000px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateX(0)",
        },
      },
      "fade-in-forward": {
        "0%": {
          opacity: "0",
          transform: "translateZ(-1000px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateZ(0)",
        },
      },
      "content-show": {
        "0%": {
          opacity: "0",
          transform: "scale(0.96)",
        },
        "100%": {
          opacity: "1",
          transform: "scale(1)",
        },
      },
      "fade-out-top": {
        "0%": {
          opacity: "1",
          transform: "translateY(0)",
        },
        "70%": {
          opacity: "1",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "0",
          transform: "translateY(-50px)",
        },
      },
    },
  },
  plugins: [],
};
