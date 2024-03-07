import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-pc": 'url("/images/common/bg-contact-pc.jpg")',
        "contact-sp": 'url("/images/common/bg-contact-sp.jpg")',
        "top-pc": 'url("/images/top/bg-top-pc.jpg")',
        "top-sp": 'url("/images/top/bg-top-sp.jpg")',
      },
      colors: {
        primary: "#253336",
        blue: "#007CBE",
        skyBlue: "#80BDDE",
        redStart: "#F5232C",
        redEnd: "#F5691C",
      },
      content: {
        sitemap: 'url("/images/common/icon-arrow.svg")',
      },
      fontSize: {
        h1: "48px",
        h2: "40px",
        h3: "32px",
        sub: "24px",
        paragraph: "16px",
        caption: "14px",
        small: "12px",
      },
      lineHeight: {
        h1: "67px",
        h2: "60px",
        h3: "48px",
        sub: "36px",
        paragraph: "38px",
        caption: "30px",
        small: "18px",
      },
    },
    screens: {
      sm: { max: "767px" },
      md: "768px",
    },
  },
};
export default config;
