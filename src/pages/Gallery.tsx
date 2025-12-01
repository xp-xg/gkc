import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Gallery Kenya - Photos of Container Homes, Offices & Commercial Units</title>
        <meta name="description" content="View our gallery of completed container projects in Kenya: homes, offices, commercial stalls, and custom container solutions. See quality and craftsmanship of Global Kenya Containers." />
        <meta name="keywords" content="container gallery Kenya, container homes photos, container offices gallery, commercial stalls photos, container projects Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/gallery" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Gallery Kenya - Photos of Container Homes, Offices & Commercial Units" />
        <meta property="og:description" content="View our gallery of completed container projects in Kenya: homes, offices, commercial stalls, and custom container solutions. See quality and craftsmanship of Global Kenya Containers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/gallery" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Gallery Kenya - Photos of Container Homes, Offices & Commercial Units" />
        <meta name="twitter:description" content="View our gallery of completed container projects in Kenya: homes, offices, commercial stalls, and custom container solutions. See quality and craftsmanship of Global Kenya Containers." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <Gallery />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default GalleryPage;