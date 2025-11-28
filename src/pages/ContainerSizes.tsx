import Navbar from "@/components/Navbar";
import ContainerSizes from "@/components/ContainerSizes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const ContainerSizesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
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