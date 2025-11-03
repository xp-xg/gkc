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
      description: "The 20ft container is perfect for additional storage requirements and is the most versatile option for shipping containers in Kenya. This compact size can be delivered to almost any location and offers instant, secure space with minimal capital investment. Ideal for personal storage, small businesses, and as a foundation for container modifications. As the best container company in East Africa, Global Kenya Containers ensures all 20ft containers meet international standards for durability and security.",
      image: dryContainer,
      alt: "20ft shipping container dimensions for storage and transport Kenya"
    },
    {
      title: "40 Feet (40 FT) Container",
      dimensions: "Length: 40' | Width: 8' | Height: 8'6\"",
      description: "The 40ft container offers significantly more space, being twice the length of a 20-foot container while sharing the same width and height dimensions. With approximately 76m³ of storage space, these containers require minimal site preparation and can be delivered to create an instant warehouse solution across Kenya. Perfect for larger storage needs, commercial applications, and conversion projects. Our shipping containers Kenya solutions include comprehensive delivery and placement services.",
      image: dryContainer,
      alt: "40ft shipping container dimensions for large storage Kenya"
    },
    {
      title: "40 Feet High Cube Container",
      dimensions: "Length: 40' | Width: 8' | Height: 9'6\"",
      description: "The high cube container is about 1 foot taller than regular 40ft containers, allowing cargo to be loaded higher and providing additional storage capacity. This extra height makes it ideal for bulky or irregularly shaped items. These containers are perfect for projects requiring maximum storage efficiency and are ideal for container homes, offices, and commercial spaces throughout Kenya. Our team of Kenya container fabricators specializes in customizing high cube containers for specific applications.",
      image: dryContainer,
      alt: "40ft high cube shipping container dimensions for more storage"
    },
  ];

  // Specialized container solutions with appropriate images
  const specializedContainers = [
    {
      title: "Refrigerated Containers (Reefers)",
      description: "Temperature-controlled solutions for cold storage applications across Kenya. These refrigeration containers are perfect for food storage, pharmaceuticals, and other temperature-sensitive items. Our refrigerated container units maintain consistent temperatures for chilled and frozen goods, providing reliable cold chain solutions for businesses throughout East Africa.",
      image: refrigerationContainer,
      alt: "Refrigerated container for cold storage Kenya"
    },
    {
      title: "Container Homes",
      description: "Modern, affordable housing solutions using converted shipping containers. Our container homes are designed and fabricated to provide comfortable, durable, and environmentally sustainable living spaces. Each unit includes proper insulation, electrical systems, plumbing, and modern finishes. These container houses are ideal for residential use, worker housing, and permanent homes throughout Kenya.",
      image: accommodationContainer,
      alt: "Shipping container home for residential use Kenya"
    },
    {
      title: "Container Offices",
      description: "Professional workspace solutions created from converted shipping containers. Our container office units are perfect for construction sites, remote locations, and temporary office needs. Each unit is customized with proper ventilation, lighting, and electrical systems to create modern, functional workspaces. Ideal for management offices, meeting rooms, and work stations across Kenya.",
      image: officeContainer,
      alt: "Shipping container office space for commercial use"
    },
    {
      title: "Container Stalls",
      description: "Commercial stalls and retail kiosks created from shipping containers. These container stalls offer security, durability, and professional appearance at an affordable price. Perfect for markets, shopping centers, and business districts throughout Nairobi and other major cities in Kenya. Each stall includes steel doors and walls for maximum security.",
      image: commercialStalls,
      alt: "Commercial container stall for retail business Kenya"
    },
    {
      title: "Open-top Containers",
      description: "Ideal for oversized cargo that cannot fit through standard container doors. These containers feature a removable tarpaulin cover instead of a fixed roof, allowing for easy loading of tall or bulky items from above. Perfect for construction materials, machinery, and other large items requiring easy access from the top.",
      image: dryContainer,
      alt: "Open-top shipping container for oversized cargo"
    },
    {
      title: "Ablution Containers",
      description: "Sanitation facilities created from shipping containers, ideal for construction sites, events, and remote locations. These ablution containers include proper plumbing, ventilation, and modern fixtures to provide essential sanitation facilities. Our container fabrication services ensure these units meet all safety and hygiene standards across Kenya.",
      image: accommodationContainer, // Using accommodation as it's more likely to have facilities
      alt: "Ablution container with sanitation facilities Kenya"
    }
  ];

  return (
    <section id="container-sizes" className="py-16 lg:py-24 bg-background" aria-labelledby="container-sizes-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="container-sizes-heading" className="text-3xl lg:text-4xl font-medium mb-4">Container Sizes & Types</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Choose from our comprehensive range of standard and specialized shipping containers, the best container solutions in Kenya
          </p>
        </header>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Standard Container Sizes</h3>
            <p className="text-muted-foreground mb-6">
              As the premier container company in East Africa, Global Kenya Containers offers a wide selection of standard container sizes to meet all your storage, transportation, and conversion needs. Our shipping containers Kenya solutions include new and used containers that meet international standards for strength and durability. Each container is carefully inspected before delivery to ensure quality and reliability across Kenya.
            </p>
            <p className="text-muted-foreground">
              From basic storage containers to fully customized spaces, our team of Kenya container fabricators transforms standard shipping containers into functional solutions tailored to your specific requirements. We serve clients in Nairobi, Mombasa, Kisumu, and throughout the country with our comprehensive range of container sizes and conversion services.
            </p>
          </div>
          
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
          <div>
            <h3 className="text-2xl font-medium mb-6 text-center">Specialized Container Solutions</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-center">
              Beyond standard storage containers, Global Kenya Containers offers specialized solutions for specific applications. Our team of Kenya container fabricators creates custom solutions including office spaces, accommodation units, commercial stalls, and refrigeration units. Each specialized container is built to meet the unique needs of our clients across Kenya.
            </p>
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
      </div>
    </section>
  );
};

export default ContainerSizes;