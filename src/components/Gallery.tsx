import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
}

// Define categories based on filename patterns
const getCategoryFromFilename = (filename: string): string => {
  const lowerFilename = filename.toLowerCase();

  if (lowerFilename.includes('bedroom') || lowerFilename.includes('1bedroom') || lowerFilename.includes('home')) {
    return 'homes';
  } else if (lowerFilename.includes('office') || lowerFilename.includes('office-container')) {
    return 'offices';
  } else if (lowerFilename.includes('stall') || lowerFilename.includes('commercial')) {
    return 'commercial';
  } else if (lowerFilename.includes('clinic') || lowerFilename.includes('classroom') || lowerFilename.includes('school')) {
    return 'specialized';
  } else if (lowerFilename.includes('kitchen') || lowerFilename.includes('ablution')) {
    return 'amenities';
  } else if (lowerFilename.includes('repair') || lowerFilename.includes('fabrication') ||
             lowerFilename.includes('transport') || lowerFilename.includes('delivery') ||
             lowerFilename.includes('crane') || lowerFilename.includes('handling') ||
             lowerFilename.includes('parts') || lowerFilename.includes('branding') ||
             lowerFilename.includes('service') || lowerFilename.includes('maintenance') ||
             lowerFilename.includes('installation') || lowerFilename.includes('assembly') ||
             lowerFilename.includes('hire') || lowerFilename.includes('rental') ||
             lowerFilename.includes('customization') || lowerFilename.includes('modification') ||
             lowerFilename.includes('global-kenya-containers-stalls')) {
    return 'services';
  } else if (lowerFilename.includes('reefer') || lowerFilename.includes('refrigeration') || lowerFilename.includes('genset')) {
    return 'refrigeration';
  } else if (lowerFilename.includes('dormitory') || lowerFilename.includes('accommodation')) {
    return 'accommodation';
  } else if (lowerFilename.includes('brand') || lowerFilename.includes('dry-container') || lowerFilename.includes('shipping')) {
    return 'storage';
  } else if (lowerFilename.includes('butterfly') || lowerFilename.includes('club') || lowerFilename.includes('tank')) {
    return 'special';
  } else {
    return 'other';
  }
};

const manualTitles: { [key: string]: { title: string; description: string } } = {
  "accommodation-container": {
    title: "Luxury Accommodation Units",
    description: "High-end, comfortable accommodation containers, fully furnished and customizable for various needs in Kenya."
  },
  "commercial-stalls": {
    title: "Versatile Commercial Stalls",
    description: "Affordable and secure commercial stalls made from shipping containers, ideal for small businesses and startups in Nairobi."
  },
  "dry-container": {
    title: "Secure Dry Storage Containers",
    description: "20ft and 40ft dry storage containers available for sale or hire, providing secure storage solutions across Kenya."
  },
  "hero-containers": {
    title: "Container Yard Display",
    description: "A display of various shipping containers at the Global Kenya Containers yard, showcasing different sizes and types."
  },
  "office-container": {
    title: "Modern Office Containers",
    description: "Custom-built office containers with modern amenities, offering a flexible and cost-effective workspace solution."
  },
  "refrigeration-container": {
    title: "Refrigerated Container Solutions",
    description: "High-quality reefer containers for temperature-sensitive goods, available for sale and hire with 24/7 support."
  },
  "globalkenyacontainers_1-bedroom-made-from-1x40ft": {
    title: "1-Bedroom Container Home (40ft)",
    description: "A beautifully converted 1-bedroom home from a 40ft shipping container, featuring a modern interior and spacious layout."
  },
  "globalkenyacontainers_2-Bedroom-House-in-1x40ft": {
    title: "2-Bedroom Container Home (40ft)",
    description: "Spacious 2-bedroom house fabricated from a 40ft container, perfect for a small family, with a kitchenette and bathroom."
  },
  "globalkenyacontainers_20ft-Container-Ablution-Block": {
    title: "20ft Ablution Block",
    description: "A 20ft container converted into a clean and durable ablution block with toilets and showers, ideal for construction sites."
  },
  "globalkenyacontainers_20ft-Kitchen": {
    title: "20ft Container Kitchen",
    description: "A fully equipped 20ft container kitchen, perfect for remote sites, events, or as an extension to a business."
  },
  "globalkenyacontainers_40ft-Container-Clinic": {
    title: "40ft Container Clinic",
    description: "A 40ft shipping container converted into a mobile clinic, complete with consultation rooms and medical equipment."
  },
  "globalkenyacontainers_40ft-office": {
    title: "40ft Office Container",
    description: "Expansive 40ft office container providing ample space for a team, with options for partitions and custom layouts."
  },
  "globalkenyacontainers_40ft-with-wooden-shelves": {
    title: "40ft Container with Shelving",
    description: "A 40ft container fitted with sturdy wooden shelves, perfect for organized storage of documents or goods."
  },
  "globalkenyacontainers_Brand-new-container": {
    title: "Brand New Shipping Containers",
    description: "A stock of brand new 20ft and 40ft shipping containers, available for immediate purchase and delivery in Kenya."
  },
  "globalkenyacontainers_butterfly_": {
    title: "Custom Butterfly Container",
    description: "A unique butterfly-style container conversion with awnings that open up, creating a spacious and inviting setup."
  },
  "globalkenyacontainers_Classrooms": {
    title: "Container Classrooms",
    description: "Affordable and quick-to-deploy container classrooms, providing a conducive learning environment for students."
  },
  "globalkenyacontainers_Container-club": {
    title: "Custom Container Club",
    description: "An innovative and trendy club or bar built from a shipping container, featuring a unique design and atmosphere."
  },
  "globalkenyacontainers_Container-stalls": {
    title: "Retail Container Stalls",
    description: "A row of brightly colored container stalls, perfect for a vibrant market or retail space."
  },
  "globalkenyacontainers_Dormitory": {
    title: "Container Dormitory",
    description: "A multi-unit container dormitory, providing comfortable and secure accommodation for students or workers."
  },
  "globalkenyacontainers_Genset-(reefer-generator)": {
    title: "Reefer Container Genset",
    description: "A generator set specifically designed to power refrigerated (reefer) containers, ensuring uninterrupted cooling."
  },
  "globalkenyacontainers_Reefer-Compressor": {
    title: "Reefer Container Compressor",
    description: "Close-up of a reefer container's compressor unit, a critical component for maintaining temperature."
  },
  "globalkenyacontainers_Reefer-repair": {
    title: "Reefer Container Repair Service",
    description: "A technician performing maintenance and repair on a refrigerated container to ensure optimal performance."
  },

  // Additional new images with custom titles
  "1BEDROOM": {
    title: "1-Bedroom Container Home",
    description: "Stylish and compact 1-bedroom home made from a shipping container, showcasing modern and efficient living."
  },
  "Ablution": {
    title: "Ablution Container Unit",
    description: "A standalone ablution container unit, equipped with toilets and sinks for public or private use."
  },
  "Kitchen": {
    title: "Container Kitchen Unit",
    description: "A custom-built container kitchen with stainless steel surfaces and professional cooking equipment."
  },
  "school": {
    title: "Container School Unit",
    description: "A brightly painted container transformed into a school or classroom, offering an inspiring learning space."
  },
  "Tanktainer": {
    title: "Tanktainer Unit",
    description: "A specialized tank container (tanktainer) for the safe transport and storage of liquids and gases."
  },

  // Service-related titles
  "Branding Services": {
    title: "Branding Services",
    description: "Container with custom branding and logo applied, showcasing the branding services offered by Global Kenya Containers."
  },
  "Crane Handling Services": {
    title: "Crane Handling Services",
    description: "A crane lifting and positioning a shipping container, demonstrating professional crane handling services."
  },
  "Custom modifications and customization work": {
    title: "Custom Modifications and Customization Work",
    description: "A container undergoing custom modification work, with welders fabricating new windows and doors."
  },
  "global-kenya-containers-fabrication": {
    title: "Container Fabrication Services",
    description: "Skilled workers fabricating a custom container structure at the Global Kenya Containers workshop."
  },
  "global-kenya-containers-crane-handling-services": {
    title: "Crane and Handling Services",
    description: "A large crane carefully maneuvering a 40ft container at a client's site, part of our handling services."
  },
  "Installation and assembly work": {
    title: "Installation and Assembly Work",
    description: "The team from Global Kenya Containers assembling a multi-container structure on-site for a client."
  },
  "Reefer repair services": {
    title: "Reefer Repair Services",
    description: "A certified technician inspecting and repairing a reefer container's cooling system to ensure it runs efficiently."
  },
  "Transportation&delivery services": {
    title: "Transportation and Delivery Services",
    description: "A truck from Global Kenya Containers delivering a shipping container to a customer's location anywhere in Kenya."
  },
  "Sales&Hire&rental operations": {
    title: "Sales, Hire and Rental Operations",
    description: "The sales and operations office of Global Kenya Containers, with staff ready to assist with container needs."
  }
};

const titleFromFilename = (filename: string): { title: string; description: string } => {
  const manualEntry = Object.keys(manualTitles).find(key => filename.includes(key));
  if (manualEntry) {
    return manualTitles[manualEntry];
  }

  const cleaned = filename
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/globalkenyacontainers/gi, '')
    .replace(/global kenya containers/gi, '')
    .replace(/\d+$/, '') // Remove numbers at the end
    .trim();

  // Convert to Title Case
  const title = cleaned.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  return { title, description: title }; // Fallback to title for description
};

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all'); // 'all' for showing all images

  useEffect(() => {
    const fetchImages = async () => {
      const imageModules = import.meta.glob('@/assets/*.{jpg,jpeg,png,svg}');
      const images: GalleryImage[] = await Promise.all(
        Object.entries(imageModules).map(async ([path, importer]) => {
          const { default: src } = await importer() as { default: string };
          const filename = path.split('/').pop()?.split('.')[0] || '';
          const { title, description } = titleFromFilename(filename);
          const category = getCategoryFromFilename(filename);

          return {
            src,
            alt: description,
            title,
            category,
            description,
          };
        })
      );
      // Filter out logo
      const filteredImages = images.filter(image => image.title.toLowerCase() !== 'logo');
      setGalleryImages(filteredImages);
      setFilteredImages(filteredImages); // Initially show all images
    };

    fetchImages();
  }, []);

  // Process categories for the filter buttons
  const allCategories = Array.from(new Set(galleryImages.map(img => img.category)));
  const sortedCategories = ['all', ...allCategories.sort()]; // 'all' first, then sorted categories

  // Filter images based on active category
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.category === activeCategory));
    }
  }, [activeCategory, galleryImages]);

  const openLightbox = (index: number) => {
    // Find the index of the clicked image in the filtered list
    const filteredIndex = filteredImages.findIndex(img => img.src === galleryImages[index].src);
    setSelectedImage(filteredIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sortedCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 text-sm capitalize ${
                activeCategory === category
                  ? "bg-primary hover:bg-primary"
                  : "border-primary/50 hover:bg-primary/10"
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>

        {/* Category Badge Display */}
        {activeCategory !== 'all' && (
          <div className="mb-6 text-center">
            <Badge variant="secondary" className="text-lg py-2 px-4">
              Showing: {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Projects
            </Badge>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
              onClick={() => openLightbox(galleryImages.findIndex(img => img.src === image.src))}
            >
              <article className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{image.title}</h3>
                    <Badge variant="secondary" className="mt-2 text-xs bg-black/50 text-white">
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <Dialog open onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0 flex items-center justify-center">
            <div className="relative w-full h-full">
                <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <p className="text-white text-center mt-2 text-lg bg-black bg-opacity-50 rounded-b-lg py-2">
                  {filteredImages[selectedImage].title}
                  <span className="ml-2 text-sm bg-primary px-2 py-1 rounded-full capitalize">
                    {filteredImages[selectedImage].category}
                  </span>
                </p>
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/75 hover:text-white rounded-full h-10 w-10"
                    onClick={closeLightbox}
                >
                    <X className="h-6 w-6" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white rounded-full h-12 w-12"
                    onClick={goToPrevious}
                >
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/75 hover:text-white rounded-full h-12 w-12"
                    onClick={goToNext}
                >
                    <ChevronRight className="h-8 w-8" />
                </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Gallery;
