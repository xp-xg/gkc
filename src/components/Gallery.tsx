import { Card } from "@/components/ui/card";
import dryContainer from "@/assets/dry-container.jpg";
import refrigerationContainer from "@/assets/refrigeration-container.jpg";
import officeContainer from "@/assets/office-container.jpg";
import accommodationContainer from "@/assets/accommodation-container.jpg";
import commercialStalls from "@/assets/commercial-stalls.jpg";
import heroContainers from "@/assets/hero-containers.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      src: dryContainer,
      alt: "Premium dry storage shipping containers Kenya - 20ft and 40ft containers for storage and transport",
      title: "Dry Storage Containers"
    },
    {
      src: refrigerationContainer,
      alt: "High-quality refrigerated container units for cold storage Kenya - Temperature controlled storage solutions",
      title: "Refrigeration Units"
    },
    {
      src: officeContainer,
      alt: "Modern converted shipping container office spaces Kenya - Professional workspace solutions",
      title: "Container Offices"
    },
    {
      src: accommodationContainer,
      alt: "Quality container accommodation units and living spaces Kenya - Comfortable container homes",
      title: "Accommodation Containers"
    },
    {
      src: commercialStalls,
      alt: "Commercial container stalls and retail kiosks Kenya - Business setup solutions",
      title: "Commercial Stalls"
    },
    {
      src: heroContainers,
      alt: "Quality shipping containers yard Global Kenya Containers - Container depot in Nairobi",
      title: "Container Yard"
    },
    {
      src: dryContainer,
      alt: "40ft High Cube shipping containers with extra height Kenya - Additional storage capacity",
      title: "High Cube Containers"
    },
    {
      src: commercialStalls,
      alt: "Customized container homes with modern finishes Kenya - Affordable housing solutions",
      title: "Container Homes"
    },
    {
      src: accommodationContainer,
      alt: "Ablution containers with sanitation facilities Kenya - Mobile toilet and shower units",
      title: "Sanitation Units"
    },
    {
      src: heroContainers,
      alt: "Open-top containers for oversized cargo Kenya - Easy loading container solutions",
      title: "Open-top Containers"
    },
    {
      src: refrigerationContainer,
      alt: "Tanktainers for liquid storage applications Kenya - Specialized container solutions",
      title: "Tanktainers"
    },
    {
      src: officeContainer,
      alt: "Customized container solutions for specific needs Kenya - Tailored fabrication services",
      title: "Custom Conversions"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            Our Container Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our extensive range of shipping containers. From storage solutions to customized spaces, 
            see the quality and versatility we deliver across Kenya.
          </p>
        </header>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Premium Container Solutions</h3>
            <p className="text-muted-foreground mb-6">
              At Global Kenya Containers, the best container company in East Africa, we offer a comprehensive selection of high-quality shipping containers for every application. Our gallery showcases the diverse range of container solutions we provide, from standard dry storage containers to highly customized spaces. Each container is carefully selected and maintained to meet international standards for durability and security.
            </p>
            <p className="text-muted-foreground">
              Our container fabrication services transform standard shipping containers into functional spaces that meet the specific needs of our clients across Kenya. Whether you require storage containers, office spaces, accommodation units, or commercial stalls, our team of Kenya container fabricators ensures each project meets the highest standards of quality and functionality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group rounded-lg"
              >
                <article className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    </div>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
