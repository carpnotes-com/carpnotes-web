import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Articles from '@/components/Articles';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
