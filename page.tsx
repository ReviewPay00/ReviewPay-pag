import AiTech from '@/components/AiTech';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Marketplaces from '@/components/Marketplaces';
import Navbar from '@/components/Navbar';
import Plans from '@/components/Plans';
import SeoJsonLd from '@/components/SeoJsonLd';
import SocialProof from '@/components/SocialProof';

export default function Home() {
  return (
    <main>
      <SeoJsonLd />
      <Navbar />
      <Hero />
      <HowItWorks />
      <AiTech />
      <Marketplaces />
      <Plans />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
