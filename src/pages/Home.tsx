import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Beautiful CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to Get Your Container?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Contact us today for a free quote and expert advice on the best container solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
                asChild
              >
                <a href="tel:+254716068548">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
                asChild
              >
                <a href="#contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>National Park East Gate Road, Off Mombasa Road, Nairobi</span>
              </div>
              <div className="text-sm">
                <p>Countrywide Delivery Available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;