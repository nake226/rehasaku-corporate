import { Contact } from "@/components/common/Contact";
import { Footer } from "@/components/common/Footer";
import { Sitemap } from "@/components/common/Sitemap";
import { Header } from "@/components/common/Header";
import { About } from "@/components/pages/top/About";
import { FirstView } from "@/components/pages/top/FirstView";
import { Mission } from "@/components/pages/top/Mission";
import { Recruit } from "@/components/pages/top/Recruit";
import { Service } from "@/components/pages/top/Service";

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
