import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContainerSizesPage from "./pages/ContainerSizes";
import FAQPage from "./pages/FAQ";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import TwentyFtContainerPriceKenya from "./pages/20ftContainerPriceKenya";
import FortyFtContainerPriceKenya from "./pages/40ftContainerPriceKenya";
import ContainerFabricationServices from "./pages/ContainerFabricationServices";
import ShippingContainersNairobi from "./pages/ShippingContainersNairobi";
import ContainerShopsKenya from "./pages/ContainerShopsKenya";
import ReeferContainersKenya from "./pages/ReeferContainersKenya";
import UsedContainersSale from "./pages/UsedContainersSale";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="relative min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/container-sizes" element={<ContainerSizesPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/20ft-container-price-kenya" element={<TwentyFtContainerPriceKenya />} />
                <Route path="/40ft-container-price-kenya" element={<FortyFtContainerPriceKenya />} />
                <Route path="/container-fabrication-services" element={<ContainerFabricationServices />} />
                <Route path="/shipping-containers-nairobi" element={<ShippingContainersNairobi />} />
                <Route path="/container-shops-kenya" element={<ContainerShopsKenya />} />
                <Route path="/reefer-containers-kenya" element={<ReeferContainersKenya />} />
                <Route path="/used-containers-sale" element={<UsedContainersSale />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <WhatsAppButton />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
