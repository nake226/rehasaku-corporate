import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "contact-pc": 'url("/images/common/bg-contact-pc.jpg")',
        "contact-sp": 'url("/images/common/bg-contact-sp.jpg")',
        "top-pc": 'url("/images/top/bg-top-pc.jpg")',
        "top-sp": 'url("/images/top/bg-top-sp.jpg")',
        "top-medical-pc": 'url("/images/top/bg-medical-pc.jpg")',
        "top-medical-sp": 'url("/images/top/bg-medical-sp.jpg")',
        "top-cloud-pc": 'url("/images/top/bg-cloud-pc.jpg")',
        "top-cloud-sp": 'url("/images/top/bg-cloud-sp.jpg")',
        "top-about-pc": 'url("/images/top/bg-about-pc.png")',
        "top-about-sp": 'url("/images/top/bg-about-sp.png")',
        "top-recruit-pc": 'url("/images/top/bg-recruit-pc.jpg")',
        "top-recruit-sp": 'url("/images/top/bg-recruit-sp.jpg")',
        "page-title-pc": 'url("/images/common/bg-page-title-pc.png")',
        "page-title-sp": 'url("/images/common/bg-page-title-sp.png")',
        "recruit-pc": 'url("/images/recruit/bg-recruit-pc.jpg")',
        "recruit-sp": 'url("/images/recruit/bg-recruit-sp.jpg")',
      },
      colors: {
        primary: "#253336",
        blue: "#007CBE",
        skyBlue: "#80BDDE",
        lightBlue: "#F5FAFC",
        redStart: "#F5232C",
        redEnd: "#F5691C",
        lightGray: "#EBECF2",
        aboutGray: "#A3A7A8",
        gray: "#828993",
        offWhite: "#F3F6F8",
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
