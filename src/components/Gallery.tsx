import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/src/assets/dry-container.jpg",
      alt: "20ft and 40ft dry storage shipping containers in Kenya",
      title: "Dry Storage Containers"
    },
    {
      src: "/src/assets/refrigeration-container.jpg",
      alt: "Refrigerated container unit for cold storage in Nairobi",
      title: "Refrigeration Units"
    },
    {
      src: "/src/assets/office-container.jpg",
      alt: "Modern converted shipping container office space Kenya",
      title: "Container Offices"
    },
    {
      src: "/src/assets/accommodation-container.jpg",
      alt: "Shipping container accommodation units and living spaces",
      title: "Accommodation Containers"
    },
    {
      src: "/src/assets/commercial-stalls.jpg",
      alt: "Commercial container stalls and retail kiosks Kenya",
      title: "Commercial Stalls"
    },
    {
      src: "/src/assets/hero-containers.jpg",
      alt: "Quality shipping containers yard Global Kenya Containers",
      title: "Container Yard"
    },
    {
      src: "/src/assets/dry-container.jpg",
      alt: "40ft High Cube container with extra height for tall cargo",
      title: "High Cube Containers"
    },
    {
      src: "/src/assets/commercial-stalls.jpg",
      alt: "Customized container homes with modern finishes",
      title: "Container Homes"
    },
    {
      src: "/src/assets/accommodation-container.jpg",
      alt: "Ablution containers with sanitation facilities",
      title: "Sanitation Units"
    },
    {
      src: "/src/assets/hero-containers.jpg",
      alt: "Open-top containers for oversized cargo",
      title: "Open-top Containers"
    },
    {
      src: "/src/assets/refrigeration-container.jpg",
      alt: "Tanktainers for liquid storage applications",
      title: "Tanktainers"
    },
    {
      src: "/src/assets/office-container.jpg",
      alt: "Customized container solutions for specific needs",
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
    </section>
  );
};

export default Gallery;
