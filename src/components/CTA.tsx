import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">Ready to Get Your Container?</h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Contact us today for a free quote and expert advice on the best container solution for your needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg"
              asChild
            >
              <a href="tel:+254716068548">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </a>
            </Button>

            <Button
              size="default"
              variant="secondary"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-base px-6 py-3 sm:px-8 sm:py-4 rounded-lg mt-2 sm:mt-0"
              asChild
            >
              <a href="/contact">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Message
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-xs sm:text-sm">National Park East Gate Road, Off Mombasa Road, Nairobi</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm">Countrywide Delivery Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
