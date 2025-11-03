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
      description: "As the best container company in Kenya, we offer quality dry storage containers in 20ft and 40ft sizes. Our shipping containers Kenya solutions are perfect for storage, transportation, and conversion projects. We provide both new and used containers that meet international standards for durability and security. Whether you need containers for personal storage, commercial use, or as foundation for custom builds, our dry freight containers are a cost-effective solution.",
      image: dryContainer,
      alt: "20ft and 40ft dry storage shipping containers Kenya"
    },
    {
      title: "COMMERCIAL STALLS",
      description: "Our commercial stalls are expertly designed and fabricated to meet the needs of retailers and entrepreneurs across Kenya. These container-based shops offer security, durability, and a professional appearance at an affordable price. We specialize in partitioning containers into multiple stall units with steel doors and walls for maximum security. Our commercial stalls are ideal for markets, shopping centers, and business districts throughout Nairobi and other major cities.",
      image: commercialStalls,
      alt: "Commercial container stalls and retail kiosks Kenya"
    },
    {
      title: "REFRIGERATION CONTAINERS",
      description: "Our refrigeration containers provide temperature-controlled storage solutions for perishable goods. These specialized containers are perfect for cold storage applications in the food, pharmaceutical, and agricultural industries. With advanced cooling systems, these refrigerated containers maintain consistent temperatures for chilled and frozen items. We supply refrigeration containers across Kenya for static and mobile storage needs.",
      image: refrigerationContainer,
      alt: "Refrigerated container unit for cold storage Nairobi Kenya"
    },
    {
      title: "OFFICE CONTAINER UNITS",
      description: "Transform your workspace with our custom container office solutions. Our office container units are expertly converted to create modern, functional workspaces with proper ventilation, lighting, and electrical systems. Perfect for construction sites, remote locations, and temporary office needs. Each unit is customized to meet your specific requirements, from basic workspaces to fully-equipped management offices with meeting rooms and private areas.",
      image: officeContainer,
      alt: "Modern converted shipping container office space Kenya"
    },
    {
      title: "ACCOMMODATION/HOME CONTAINERS",
      description: "Our accommodation containers provide secure, beautiful, and affordable housing solutions throughout Kenya. These container homes are tailored to meet all accommodation needs, with proper insulation, electrical systems, plumbing, and modern interior finishes. Perfect for residential use, worker housing, or permanent homes, our container accommodation units include all the basic facilities of a modern home while being cost-effective and environmentally sustainable.",
      image: accommodationContainer,
      alt: "Shipping container accommodation units and living spaces"
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-medium mb-4">Our Container Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Premium shipping containers Kenya solutions for storage, offices, commercial stalls, refrigeration, and accommodation
          </p>
        </header>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Comprehensive Container Solutions</h3>
            <p className="text-muted-foreground mb-6">
              At Global Kenya Containers, we are the premier container company in East Africa, providing comprehensive solutions for all your container needs. Our team of Kenya container fabricators specializes in transforming standard shipping containers into functional spaces that meet your exact specifications. We serve clients across Nairobi, Mombasa, Kisumu, and throughout Kenya with quality products and exceptional service.
            </p>
            <p className="text-muted-foreground">
              From initial consultation to final delivery and installation, we handle every aspect of your container project. Our expertise in shipping container Kenya applications includes structural modifications, electrical installation, plumbing, insulation, and interior finishing. We pride ourselves on delivering container solutions that are both cost-effective and built to last.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
