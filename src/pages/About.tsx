import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Global Kenya Containers - Leading Container Solutions in Kenya</title>
        <meta name="description" content="Learn about Global Kenya Containers, your trusted partner for shipping container solutions in Kenya. Discover our expertise in container fabrication, sales, and rentals across Nairobi, Mombasa, and the entire country." />
        <meta name="keywords" content="about Global Kenya Containers, container company Kenya, shipping container services, container fabrication Kenya, container rental Nairobi" />
        <link rel="canonical" href="https://globalkenyacontainers.com/about" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Global Kenya Containers - Leading Container Solutions in Kenya" />
        <meta property="og:description" content="Learn about Global Kenya Containers, your trusted partner for shipping container solutions in Kenya. Discover our expertise in container fabrication, sales, and rentals across Nairobi, Mombasa, and the entire country." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/about" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Global Kenya Containers - Leading Container Solutions" />
        <meta name="twitter:description" content="Learn about Global Kenya Containers, your trusted partner for shipping container solutions in Kenya. Discover our expertise in container fabrication, sales, and rentals across Nairobi, Mombasa, and the entire country." />
      </Helmet>
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