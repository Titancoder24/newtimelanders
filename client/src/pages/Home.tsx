import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Integrations from "../components/Integrations";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 space-y-24 pb-24">
        <Hero />
        <Features />
        <Testimonials />
        <Integrations />
        <CallToAction />
      </main>
    </div>
  );
}
