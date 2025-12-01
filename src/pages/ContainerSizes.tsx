import Navbar from "@/components/Navbar";
import ContainerSizes from "@/components/ContainerSizes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';

const ContainerSizesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Sizes Kenya - 20ft, 40ft, High Cube, Reefer & Specialized Units</title>
        <meta name="description" content="Discover all container sizes available in Kenya: 20ft, 40ft, high cube, reefer containers, container homes, offices & commercial stalls. Custom solutions for every need." />
        <meta name="keywords" content="container sizes Kenya, 20ft container, 40ft container, high cube container, reefer container, container dimensions, shipping containers Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/container-sizes" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Sizes Kenya - 20ft, 40ft, High Cube, Reefer & Specialized Units" />
        <meta property="og:description" content="Discover all container sizes available in Kenya: 20ft, 40ft, high cube, reefer containers, container homes, offices & commercial stalls. Custom solutions for every need." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://globalkenyacontainers.com/container-sizes" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Sizes Kenya - 20ft, 40ft, High Cube, Reefer & Specialized Units" />
        <meta name="twitter:description" content="Discover all container sizes available in Kenya: 20ft, 40ft, high cube, reefer containers, container homes, offices & commercial stalls. Custom solutions for every need." />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <ContainerSizes />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default ContainerSizesPage;