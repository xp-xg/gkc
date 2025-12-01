import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Global Kenya Containers - Container Services in Kenya</title>
        <meta name="description" content="Get in touch with Global Kenya Containers for all your shipping container needs in Kenya. Contact us for container sales, rentals, fabrication, and custom solutions in Nairobi, Mombasa & nationwide." />
        <meta name="keywords" content="contact container company Kenya, container services contact, shipping container Nairobi, container company phone number Kenya, container rental contact" />
        <link rel="canonical" href="https://globalkenyacontainers.com/contact" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Contact Global Kenya Containers - Container Services in Kenya" />
        <meta property="og:description" content="Get in touch with Global Kenya Containers for all your shipping container needs in Kenya. Contact us for container sales, rentals, fabrication, and custom solutions in Nairobi, Mombasa & nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/contact" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Global Kenya Containers - Container Services in Kenya" />
        <meta name="twitter:description" content="Get in touch with Global Kenya Containers for all your shipping container needs in Kenya. Contact us for container sales, rentals, fabrication, and custom solutions in Nairobi, Mombasa & nationwide." />
      </Helmet>
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