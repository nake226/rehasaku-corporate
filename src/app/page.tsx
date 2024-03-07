import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/desktop/Header";
import { FirstView } from "@/components/top/FirstView";
import { Mission } from "@/components/top/Mission";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstView />
      <Mission />
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
}
