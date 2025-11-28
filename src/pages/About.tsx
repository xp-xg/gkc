import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <About />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default AboutPage;