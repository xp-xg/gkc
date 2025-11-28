import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Contact />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default ContactPage;