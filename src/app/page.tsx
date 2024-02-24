import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/desktop/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
}
