import { ReactNode } from "react";
import { Contact } from "../common/Contact";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import { Sitemap } from "../common/Sitemap";

type Props = {
  children?: ReactNode;
  isRecruitPage?: boolean;
};

export const ChildPage = ({ children, isRecruitPage = false }: Props) => {
  return (
    <main>
      <Header />
      {children}
      {!isRecruitPage && <Contact />}
      <Sitemap />
      <Footer />
    </main>
  );
};
