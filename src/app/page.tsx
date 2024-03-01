import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/desktop/Header";
import { FirstView } from "@/components/top/FirstView";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstView />
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
}
