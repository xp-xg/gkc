import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Services Kenya - Dry, Reefer, Office, Home & Commercial Solutions</title>
        <meta name="description" content="Explore our comprehensive container services in Kenya: dry containers, reefer units, container homes, offices, commercial stalls, and fabrication. Serving Nairobi, Mombasa & nationwide." />
        <meta name="keywords" content="container services Kenya, dry shipping containers, reefer containers, container homes, container offices, commercial stalls, container fabrication, container repair Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/services" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Services Kenya - Dry, Reefer, Office, Home & Commercial Solutions" />
        <meta property="og:description" content="Explore our comprehensive container services in Kenya: dry containers, reefer units, container homes, offices, commercial stalls, and fabrication. Serving Nairobi, Mombasa & nationwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/services" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Services Kenya - Dry, Reefer, Office, Home & Commercial Solutions" />
        <meta name="twitter:description" content="Explore our comprehensive container services in Kenya: dry containers, reefer units, container homes, offices, commercial stalls, and fabrication. Serving Nairobi, Mombasa & nationwide." />
      </Helmet>
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