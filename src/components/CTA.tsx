import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to Get Your Container?</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
          Contact us today for a free quote and expert advice on the best container solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
            asChild
          >
            <a href="tel:+254721804377">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
            asChild
          >
            <a href="/contact">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Message
            </a>
          </Button>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
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
  );
};

export default CTA;
