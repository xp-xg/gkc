import ServiceCard from "./ServiceCard";
import dryContainer from "@/assets/dry-container.jpg";
import commercialStalls from "@/assets/commercial-stalls.jpg";
import refrigerationContainer from "@/assets/refrigeration-container.jpg";
import officeContainer from "@/assets/office-container.jpg";
import accommodationContainer from "@/assets/accommodation-container.jpg";
import transportImage from "@/assets/global-kenya-containers-containers-offices-transport.jpg";
import fabricationImage from "@/assets/global-kenya-containers-fabrication.jpg";
import brandingImage from "@/assets/global-kenya-containers-stalls.jpg";
import craneHandlingImage from "@/assets/global-kenya-containers-crane-handling-services.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Refrigerator,
  Home,
  Building,
  Store,
  Shower,
  Car,
  Truck,
  Wrench,
  Palette,
  Ship,
  Grid3X3,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "DRY SHIPPING CONTAINERS",
      description:
        "As the leading company in East and Central Africa, we specialize in selling and hiring 20ft and 40ft dry steel containers. Our containers are perfect for storage, transportation, and conversion projects. We provide both new and used 20ft and 40ft containers that meet international standards for durability and security. Whether you need 20ft containers for compact storage or 40ft containers for larger capacity, our dry freight containers are a cost-effective solution. Choose from our rental packages for short-term needs or purchase options for long-term requirements.",
      image: dryContainer,
      alt: "20ft and 40ft dry shipping containers Kenya",
    },
    {
      title: "REFRIGERATED CONTAINERS (REEFER)",
      description:
        "Our refrigeration containers provide temperature-controlled storage solutions for perishable goods. These specialized containers are perfect for cold storage applications in the food, pharmaceutical, and agricultural industries. With advanced cooling systems, these refrigerated containers maintain consistent temperatures for chilled and frozen items. We supply refrigeration containers across Kenya for static and mobile storage needs. Available for both hire and purchase to suit your project timeline and budget.",
      image: refrigerationContainer,
      alt: "Refrigerated container unit for cold storage Nairobi Kenya",
    },
    {
      title: "CONTAINER HOMES",
      description:
        "We offer value addition by converting dry units into comfortable residential living spaces. Our container homes are tailored to meet all accommodation needs, with proper insulation, electrical systems, plumbing, and modern interior finishes. Perfect for residential use, worker housing, or permanent homes, our container accommodation units include all the basic facilities of a modern home while being cost-effective and environmentally sustainable. We offer both purchase and rent-to-own options to make quality housing accessible.",
      image: accommodationContainer,
      alt: "Shipping container accommodation units and living spaces",
    },
    {
      title: "CONTAINER OFFICES",
      description:
        "We specialize in converting dry units into functional office spaces, classrooms, clinics, and hospitals. Transform your workspace with our custom container office solutions. Our office container units are expertly converted to create modern, functional workspaces with proper ventilation, lighting, and electrical systems. Perfect for construction sites, remote locations, and temporary office needs. Flexible hire options available for short-term projects and permanent purchase options for long-term use.",
      image: officeContainer,
      alt: "Modern converted shipping container office space Kenya",
    },
    {
      title: "CONTAINER STALLS",
      description:
        "Our commercial stalls and shops are expertly designed and fabricated to meet the needs of retailers and entrepreneurs across Kenya. These container-based shops offer security, durability, and a professional appearance at an affordable price. We specialize in partitioning containers into multiple stall units with steel doors and walls for maximum security. Our commercial stalls are ideal for markets, shopping centers, and business districts. Available for purchase or rental with flexible terms.",
      image: commercialStalls,
      alt: "Commercial container stalls and retail kiosks Kenya",
    },
    {
      title: "ABLUTION CONTAINERS",
      description:
        "We convert dry units into specialized bathroom and toilet facilities. Our ablution containers provide clean, hygienic, and secure facilities for various applications including construction sites, events, and remote locations. These units can include multiple toilet stalls, shower areas, and wash stations, completely fabricated with proper plumbing and ventilation systems. Flexible hire options for temporary events and permanent purchase options for ongoing facilities.",
      image: accommodationContainer,
      alt: "Ablution containers for temporary facilities",
    },
  ];

  // All container products organized by category
  const containerProducts = {
    "DRY SHIPPING CONTAINERS": [
      "20ft Container Sale/Hire",
      "40ft Highcube Container Sale/Hire",
      "20ft Storage Container",
      "40ft Storage Container",
      "40ft Flat Rack",
      "20ft Open Top Container",
      "40ft Open Top Container",
    ],
    "CONTAINER HOMES": [
      "20ft Bedsitter",
      "40ft 1 Bedroom",
      "2 Bedroom Container House",
      "3 Bedroom Container House",
      "4 Bedroom Container House",
      "Custom Accommodation Units",
    ],
    "CONTAINER OFFICES & EDUCATIONAL": [
      "20ft Container Office",
      "40ft Container Office",
      "20ft Container Classroom",
      "40ft Container Classroom",
      "Container School",
      "Container Display Unit",
      "20ft Laboratory Container",
      "40ft Laboratory Container",
      "20ft Container Clinic",
      "40ft Container Clinic",
    ],
    "COMMERCIAL STALLS & RETAIL": [
      "20ft Container Stalls/Shops",
      "40ft Container Stalls/Shops",
      "20ft Container With Shelves",
      "40ft Container With Shelves",
      "Commercial Container Solutions",
    ],
    "REFRIGERATED CONTAINERS": [
      "20ft Refrigerated (Reefer) Container Sale/Hire",
      "40ft Refrigerated (Reefer) Container Sale/Hire",
      "Temperature-Controlled Units",
      "Custom Refrigeration Solutions",
    ],
    "SPECIALIZED CONTAINERS": [
      "Ablution Containers",
      "Tanktainers",
      "Customized Container Solutions",
      "Portable Facilities",
    ],
  };

  // Additional services with specified images
  const additionalServices = [
    {
      title: "Container Transportation",
      description:
        "Professional delivery services countrywide for all container types.",
      icon: <Truck className="w-6 h-6" />,
      image: transportImage,
    },
    {
      title: "Container Fabrication",
      description:
        "Custom construction and modification of container-based structures.",
      icon: <Wrench className="w-6 h-6" />,
      image: fabricationImage,
    },
    {
      title: "Container Branding",
      description: "Custom branding and advertising solutions for containers.",
      icon: <Palette className="w-6 h-6" />,
      image: brandingImage,
    },
    {
      title: "Crane Handling Services",
      description: "Professional crane handling and positioning of containers.",
      icon: <Ship className="w-6 h-6" />,
      image: craneHandlingImage,
    },
  ];

  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-medium mb-4"
          >
            Our Container Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive container solutions including dry steel shipping
            containers(20ft and 40ft), refrigerated units, container homes,
            offices, stalls, and specialized applications - available for hire
            or purchase
          </p>
        </header>

        <div className="space-y-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">
              Leading Container Specialists in East Africa
            </h3>
            <p className="text-muted-foreground mb-6">
              We are the leading company in East and Central Africa that
              specializes in selling and hiring containers, both Dry Steel and
              Refrigerated (Reefer) of all sizes. Our team of expert fabricators
              does value addition on dry units, converting them into anything a
              client might need - from offices and classrooms to clinics,
              hospitals, and shops/stalls.
            </p>
            <p className="text-muted-foreground">
              From initial consultation to final delivery and installation, we
              handle every aspect of your container project. Our expertise in
              shipping container applications includes structural modifications,
              electrical installation, plumbing, insulation, and interior
              finishing. We pride ourselves on delivering container solutions
              that are both cost-effective and built to last. Flexible hire
              options are available for short-term needs, and purchase options
              for long-term requirements.
            </p>
          </div>

          {/* Additional Services Section */}
          <div className="mt-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-medium mb-4">
                Additional Services
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond our core container solutions, we offer a range of
                additional services to meet your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="elevation-2 rounded-lg overflow-hidden hover:elevation-4 transition-all duration-300 flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex-1 flex flex-col">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2">
                          {service.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Products Section */}
          <div className="mt-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl lg:text-3xl font-medium mb-4">
                Complete Container Product Range
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our comprehensive selection of container solutions, each
                customizable to meet your specific needs
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(containerProducts).map(([category, products]) => (
                <div
                  key={category}
                  className="bg-white rounded-xl p-6 elevation-2"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Grid3X3 className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold text-foreground">
                      {category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 rounded-lg border hover:bg-primary/5 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
