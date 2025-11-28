import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Services />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;