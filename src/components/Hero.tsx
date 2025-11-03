import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-containers.jpg";

const Hero = () => {
  return (
    <header className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Global Kenya Containers shipping container yard"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Quality Shipping Containers Kenya
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 font-light">
            If you are looking to hire or buy quality shipping containers. Global Kenya Containers has a wide range of containers in various sizes to suit your needs.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
