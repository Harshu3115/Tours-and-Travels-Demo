export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        charcoal: "#151d30",
        gold: "#FF6B47",
        sunny: "#FFB627",
        ocean: "#0EA5B7",
        champagne: "#FFE4D6",
        mist: "#EEF6FF",
        jade: "#0D9488",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "sunset": "linear-gradient(135deg, #FF6B47 0%, #FF8F5C 45%, #FFB627 100%)",
        "ocean-gradient": "linear-gradient(135deg, #0EA5B7 0%, #0D9488 100%)",
        "hero-glow-gradient": "radial-gradient(circle, rgba(255,107,71,0.35) 0%, rgba(255,107,71,0) 70%)",
      },
      boxShadow: {
        premium: "0 24px 70px rgba(11, 18, 32, 0.18)",
        glow: "0 16px 40px rgba(255, 107, 71, 0.35)",
        oceanGlow: "0 16px 40px rgba(14, 165, 183, 0.3)",
      },
      keyframes: {
        floatUp: {
          "0%": { opacity: 0, transform: "translateY(22px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(19, 113, 90, 0.36)" },
          "50%": { transform: "scale(1.04)", boxShadow: "0 0 0 12px rgba(19, 113, 90, 0)" },
        },
      },
      animation: {
        floatUp: "floatUp 0.65s ease both",
        pulseSoft: "pulseSoft 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
