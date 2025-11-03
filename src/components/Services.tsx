import ServiceCard from "./ServiceCard";
import dryContainer from "@/assets/dry-container.jpg";
import commercialStalls from "@/assets/commercial-stalls.jpg";
import refrigerationContainer from "@/assets/refrigeration-container.jpg";
import officeContainer from "@/assets/office-container.jpg";
import accommodationContainer from "@/assets/accommodation-container.jpg";

const Services = () => {
  const services = [
    {
      title: "DRY FREIGHT & STORAGE CONTAINERS",
      description: "If you are looking to hire or buy quality shipping containers. Global Kenya Containers has a wide range of containers in various sizes to suit your needs.",
      image: dryContainer,
      alt: "20ft and 40ft dry storage shipping containers Kenya"
    },
    {
      title: "COMMERCIAL STALLS",
      description: "We offer stalls/shops container partitioning at very affordable rates. Each stall is secured with steel doors and walls.",
      image: commercialStalls,
      alt: "Commercial container stalls and retail kiosks Kenya"
    },
    {
      title: "REFRIGERATION CONTAINERS",
      description: "Global Kenya Containers offers a scope of Refrigeration containers, for use, either as static stockpiling of chilled/frozen items.",
      image: refrigerationContainer,
      alt: "Refrigerated container unit for cold storage Nairobi Kenya"
    },
    {
      title: "OFFICE CONTAINER UNITS",
      description: "We pride ourselves in converting containers into the best Office Units there can be.",
      image: officeContainer,
      alt: "Modern converted shipping container office space Kenya"
    },
    {
      title: "ACCOMMODATION/HOME CONTAINERS",
      description: "Tailored To Meet Your Accommodation Needs. We provide secure, beautiful, and Affordable Accommodation units with all the basic facilities of a modern home.",
      image: accommodationContainer,
      alt: "Shipping container accommodation units and living spaces"
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-medium mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Quality shipping container solutions for all your needs
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
