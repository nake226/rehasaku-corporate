import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/desktop/Header";
import { About } from "@/components/top/About";
import { FirstView } from "@/components/top/FirstView";
import { Mission } from "@/components/top/Mission";
import { Recruit } from "@/components/top/Recruit";
import { Service } from "@/components/top/Service";

export default function Home() {
  return (
    <main>
      <Header />
      <FirstView />
      <Mission />
      <Service />
      <About />
      <Recruit />
      <Contact />
      <Sitemap />
      <Footer />
    </main>
  );
}
