import { ReactNode } from "react";
import { Contact } from "../common/Contact";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { Sitemap } from "../common/Sitemap";

type Props = {
  children?: ReactNode;
};

export const ChildPage = ({ children }: Props) => {
  return (
    <main>
      <Header />
      {children}
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
};
