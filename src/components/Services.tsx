import ServiceCard from "./ServiceCard";
import dryContainer from "@/assets/dry-container.jpg"; // Keep original image for DRY SHIPPING CONTAINERS
import commercialStalls from "@/assets/globalkenyacontainers_Container stalls2.jpeg"; // Commercial stalls ending with 2
import refrigerationContainer from "@/assets/globalkenyacontainers_Genset (reefer generator).jpeg"; // Refrigeration container image
import officeContainer from "@/assets/globalkenyacontainers_40ft office2.jpeg"; // Office container image ending with 2
import accommodationContainer from "@/assets/globalkenyacontainers_1 bedroom made from 1x40ft2.jpeg"; // Updated accommodation container image
import ablutionContainer from "@/assets/Ablution4.jpeg"; // Updated ablution container image
import tanktainerImage from "@/assets/Tanktainer1.jpeg"; // Tanktainer image
import transportImage from "@/assets/global-kenya-containers-containers-offices-transport.jpg";
import fabricationImage from "@/assets/global-kenya-containers-fabrication.jpg";
import brandingImage from "@/assets/global-kenya-containers-stalls.jpg";
import craneHandlingImage from "@/assets/global-kenya-containers-crane-handling-services.jpg";
import reeferRepairImage from "@/assets/globalkenyacontainers_Reefer repair1.jpeg";
import reeferPartsImage from "@/assets/globalkenyacontainers_Reefer Compressor.jpeg";
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
  WrenchIcon,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "DRY SHIPPING CONTAINERS",
      description:
        "20ft and 40ft containers for storage, transportation and conversion projects. Available for hire or purchase.",
      image: dryContainer,
      alt: "20ft and 40ft dry shipping containers Kenya",
    },
    {
      title: "REFRIGERATED CONTAINERS (REEFER)",
      description:
        "Temperature-controlled storage solutions for food, pharmaceuticals, and agricultural industries.",
      image: refrigerationContainer,
      alt: "Refrigerated container unit for cold storage Nairobi Kenya",
    },
    {
      title: "REEFER REPAIR",
      description:
        "Professional repair services for refrigerated containers to keep your cold storage operations running smoothly.",
      image: reeferRepairImage,
      alt: "Professional reefer container repair services in Kenya",
    },
    {
      title: "REEFER PARTS",
      description:
        "Genuine parts supply for refrigerated containers including compressors, condensers, and control systems.",
      image: reeferPartsImage,
      alt: "Genuine reefer container parts and compressor replacements Kenya",
    },
    {
      title: "CONTAINER HOMES",
      description:
        "Comfortable residential living spaces converted from shipping containers with proper insulation and fixtures.",
      image: accommodationContainer,
      alt: "Modern shipping container homes in Kenya",
    },
    {
      title: "CONTAINER OFFICES",
      description:
        "Functional office spaces, classrooms, and clinics converted from shipping containers with proper ventilation.",
      image: officeContainer,
      alt: "Modern converted shipping container office space Kenya",
    },
    {
      title: "CONTAINER STALLS",
      description:
        "Commercial stalls and shops providing security, durability and professional appearance at an affordable price.",
      image: commercialStalls,
      alt: "Commercial container stalls and retail kiosks Kenya",
    },
    {
      title: "TANKTAINERS",
      description:
        "Specialized liquid storage containers for safe transport and storage of chemicals, oils, and other liquid products.",
      image: tanktainerImage,
      alt: "Tanktainer liquid storage containers in Kenya",
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
      className="py-8 sm:py-16 bg-muted/30"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4"
          >
            Our Container Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light text-sm sm:text-base">
            Comprehensive container solutions including dry steel shipping
            containers(20ft and 40ft), refrigerated units, container homes,
            offices, stalls, and specialized applications - available for hire
            or purchase
          </p>
        </header>

        <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-foreground mb-4">
              Leading Container Specialists in East Africa
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4">
              We are the leading company in East and Central Africa that
              specializes in selling and hiring containers, both Dry Steel and
              Refrigerated (Reefer) of all sizes. Our team of expert fabricators
              does value addition on dry units, converting them into anything a
              client might need - from offices and classrooms to clinics,
              hospitals, and shops/stalls.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              From initial consultation to final delivery and installation, we
              handle every aspect of your container project. Our expertise in
              shipping container applications includes structural modifications,
              electrical installation, plumbing, insulation, and interior
              finishing. We pride ourselves on delivering container solutions
              that are both cost-effective and built to last. Flexible hire
              options are available for short-term needs, and purchase options
              for long-term requirements.
            </p>

            <div className="mt-4 space-y-2">
              <h4 className="font-medium text-foreground">Services we offer:</h4>
              <ul className="list-disc list-inside text-muted-foreground text-sm sm:text-base space-y-1">
                <li>Sales/Hire/rental operations</li>
                <li>Reefer Sales and repair services</li>
                <li>Transportation/delivery services</li>
                <li>Crane handling services</li>
                <li>Fabrication services</li>
                <li>Container maintenance</li>
                <li>Installation and assembly work</li>
                <li>Custom modifications and customization work</li>
                <li>Branding Services</li>
              </ul>
            </div>
          </div>

          {/* Additional Services Section */}
          <div className="mt-8 sm:mt-10">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4">
                Additional Services
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Beyond our core container solutions, we offer a range of
                additional services to meet your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {additionalServices.map((service, index) => (
                <Card
                  key={index}
                  className="elevation-2 rounded-lg overflow-hidden hover:elevation-4 transition-all duration-300 flex flex-col"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-24 sm:h-40 object-cover"
                    />
                  </div>
                  <CardContent className="p-3 sm:p-4 flex-1 flex flex-col">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
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
          <div className="mt-8 sm:mt-10">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-4">
                Complete Container Product Range
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Explore our comprehensive selection of container solutions, each
                customizable to meet your specific needs
              </p>
            </div>

            <div className="space-y-6">
              {Object.entries(containerProducts).map(([category, products]) => (
                <div
                  key={category}
                  className="bg-white rounded-xl p-4 sm:p-6 elevation-2"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Grid3X3 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                      {category}
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 sm:p-3 rounded-lg border hover:bg-primary/5 transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
