import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Services FAQ - Kenya Shipping Container Questions & Answers</title>
        <meta name="description" content="Find answers to frequently asked questions about shipping containers in Kenya. Learn about prices, sizes, delivery, customization & more for container homes, offices & commercial use." />
        <meta name="keywords" content="container FAQ Kenya, shipping container questions, container prices Kenya, container delivery, container customization, container homes FAQ" />
        <link rel="canonical" href="https://globalkenyacontainers.com/faq" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Services FAQ - Kenya Shipping Container Questions & Answers" />
        <meta property="og:description" content="Find answers to frequently asked questions about shipping containers in Kenya. Learn about prices, sizes, delivery, customization & more for container homes, offices & commercial use." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/faq" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Services FAQ - Kenya Shipping Container Questions & Answers" />
        <meta name="twitter:description" content="Find answers to frequently asked questions about shipping containers in Kenya. Learn about prices, sizes, delivery, customization & more for container homes, offices & commercial use." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default FAQPage;