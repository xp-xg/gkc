import { Card, CardContent } from "@/components/ui/card";
import dryContainer from "@/assets/dry-container.jpg";
import refrigerationContainer from "@/assets/refrigeration-container.jpg";
import accommodationContainer from "@/assets/accommodation-container.jpg";
import officeContainer from "@/assets/office-container.jpg";
import commercialStalls from "@/assets/commercial-stalls.jpg";

const ContainerSizes = () => {
  const containerTypes = [
    {
      title: "20 Feet (20 FT) Container",
      dimensions: "Length: 20' | Width: 8' | Height: 8'6\"",
      description: "Perfect for additional storage requirements, can be delivered to almost any location, offers instant and secure space with minimal capital investment. A versatile choice for various cargo types, from consumer goods to machinery.",
      image: dryContainer,
      alt: "20ft shipping container dimensions"
    },
    {
      title: "40 Feet (40 FT) Container",
      dimensions: "Length: 40' | Width: 8' | Height: 8'6\"",
      description: "Twice the length of a 20-foot container, shares the same width and height dimensions as the 20ft version. Offers approximately 76m³ of storage space. Requires minimal site preparation and can be delivered to create an instant warehouse.",
      image: dryContainer,
      alt: "40ft shipping container dimensions"
    },
    {
      title: "40 Feet High Cube Container",
      dimensions: "Length: 40' | Width: 8' | Height: 9'6\"",
      description: "About 1 foot taller than regular 40ft containers, allowing cargo to be loaded higher. This extra height provides additional storage capacity.",
      image: dryContainer,
      alt: "40ft high cube shipping container dimensions"
    },
  ];

  // Specialized container solutions with appropriate images
  const specializedContainers = [
    {
      title: "Refrigerated Containers (Reefers)",
      description: "For temperature-sensitive items",
      image: refrigerationContainer,
      alt: "Refrigerated container for cold storage"
    },
    {
      title: "Container Homes",
      description: "Converted for residential use",
      image: accommodationContainer,
      alt: "Shipping container home"
    },
    {
      title: "Container Offices",
      description: "Converted for office spaces",
      image: officeContainer,
      alt: "Shipping container office space"
    },
    {
      title: "Container Stalls",
      description: "For commercial use",
      image: commercialStalls,
      alt: "Commercial container stall"
    },
    {
      title: "Open-top Containers",
      description: "For oversized cargo",
      image: dryContainer,
      alt: "Open-top shipping container"
    },
    {
      title: "Ablution Containers",
      description: "For sanitation facilities",
      image: accommodationContainer, // Using accommodation as it's more likely to have facilities
      alt: "Ablution container with sanitation facilities"
    }
  ];

  return (
    <section id="container-sizes" className="py-16 lg:py-24 bg-background" aria-labelledby="container-sizes-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="container-sizes-heading" className="text-3xl lg:text-4xl font-medium mb-4">Container Sizes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Choose from our range of standard and specialized shipping containers
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {containerTypes.map((container, index) => (
            <Card key={index} className="overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 rounded-lg" role="listitem">
              <article>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={container.image} 
                    alt={container.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">{container.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1"><strong>Dimensions:</strong> {container.dimensions}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{container.description}</p>
                </CardContent>
              </article>
            </Card>
          ))}
        </div>

        {/* Specialized container solutions section */}
        <div className="mt-16">
          <h3 className="text-2xl font-medium mb-6 text-center">Specialized Container Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedContainers.map((container, index) => (
              <Card key={index} className="overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 rounded-lg" role="listitem">
                <article>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={container.image} 
                      alt={container.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2">{container.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{container.description}</p>
                  </CardContent>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainerSizes;