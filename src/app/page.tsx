import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FeaturedWork from "@/components/FeaturedWork";
import ScrollText from "@/components/ScrollText";
import Domains from "@/components/Domains";
import Ethos from "@/components/Ethos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-[72px] lg:pt-[44px]">
        <main>
          <Hero />
          <StatsBar />
          <FeaturedWork />
          <ScrollText />
          <Domains />
          <Ethos />
          <Footer />
        </main>
      </div>
    </>
  );
}
