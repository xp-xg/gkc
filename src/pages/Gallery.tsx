import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
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