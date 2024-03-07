import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/desktop/Header";
import { FirstView } from "@/components/top/FirstView";
import { Mission } from "@/components/top/Mission";
import { Service } from "@/components/top/Service";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstView />
      <Mission />
      <Service />
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
}
