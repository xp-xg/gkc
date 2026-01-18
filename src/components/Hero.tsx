import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-containers.jpg";
import heroImage2 from "@/assets/globalkenyacontainers_butterfly_1.jpeg";
import heroImage3 from "@/assets/globalkenyacontainers_40ft office.jpeg";
import heroImage4 from "@/assets/globalkenyacontainers_Container stalls3.jpeg";
import heroImage5 from "@/assets/globalkenyacontainers_40ft Container Clinic.jpeg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      title: "Quality Shipping Containers Kenya",
      description:
        "If you are looking to hire or buy quality shipping containers. Global Kenya Containers has a wide range of containers in various sizes to suit your needs.",
      alt: "Quality shipping containers for sale in Kenya at Global Kenya Containers yard",
    },
    {
      image: heroImage2,
      title: "Beautiful Container Homes",
      description:
        "Transform your living space with our custom container homes. Durable, affordable, and environmentally sustainable housing solutions across Kenya.",
      alt: "Modern container homes Kenya for sale with professional finishing",
    },
    {
      image: heroImage3,
      title: "Professional Container Offices",
      description:
        "Create functional workspace solutions with our converted container offices. Perfect for construction sites, remote locations, and temporary needs.",
      alt: "Professional container offices Kenya for rent with custom interiors",
    },
    {
      image: heroImage4,
      title: "Commercial Container Stalls",
      description:
        "Secure and durable retail solutions for entrepreneurs. Our container stalls offer professional appearance at an affordable price across Kenya.",
      alt: "Commercial container stalls Kenya for sale with attractive design",
    },
    {
      image: heroImage5,
      title: "Specialized Container Solutions",
      description:
        "From clinics to classrooms, we convert containers into functional spaces for any purpose. Custom fabrication services available.",
      alt: "Specialized container clinic Kenya fabricated with professional modifications",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <header className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background images carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-10"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-30">
        <div className="max-w-full sm:max-w-lg md:max-w-2xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 font-light">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/contact">
              <Button
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-6 py-3 sm:px-8 sm:py-4 elevation-3 hover:elevation-4 transition-all rounded-lg"
              >
                Get in touch
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                variant="outline"
                size="default"
                className="border-2 border-white/30 hover:border-white/50 text-white font-medium text-base px-6 py-3 sm:px-8 sm:py-4 bg-transparent hover:bg-white/10 elevation-3 hover:elevation-4 transition-all rounded-lg"
              >
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>
      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </header>
  );
};

export default Hero;
