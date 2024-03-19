import { Noto_Sans_JP, Jost } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});
