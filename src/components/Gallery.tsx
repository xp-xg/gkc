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

const manualTitles: { [key: string]: string } = {
  "accommodation-container": "Luxury Accommodation Units",
  "commercial-stalls": "Versatile Commercial Stalls",
  "dry-container": "Secure Dry Storage Containers",
  "hero-containers": "Container Yard Display",
  "office-container": "Modern Office Containers",
  "refrigeration-container": "Refrigerated Container Solutions",
  "globalkenyacontainers_1-bedroom-made-from-1x40ft": "1-Bedroom Container Home (40ft)",
  "globalkenyacontainers_2-Bedroom-House-in-1x40ft": "2-Bedroom Container Home (40ft)",
  "globalkenyacontainers_20ft-Container-Ablution-Block": "20ft Ablution Block",
  "globalkenyacontainers_20ft-Kitchen": "20ft Container Kitchen",
  "globalkenyacontainers_40ft-Container-Clinic": "40ft Container Clinic",
  "globalkenyacontainers_40ft-office": "40ft Office Container",
  "globalkenyacontainers_40ft-with-wooden-shelves": "40ft Container with Shelving",
  "globalkenyacontainers_Brand-new-container": "Brand New Shipping Containers",
  "globalkenyacontainers_butterfly_": "Custom Butterfly Container",
  "globalkenyacontainers_Classrooms": "Container Classrooms",
  "globalkenyacontainers_Container-club": "Custom Container Club",
  "globalkenyacontainers_Container-stalls": "Retail Container Stalls",
  "globalkenyacontainers_Dormitory": "Container Dormitory",
  "globalkenyacontainers_Genset-(reefer-generator)": "Reefer Container Genset",
  "globalkenyacontainers_Reefer-Compressor": "Reefer Container Compressor",
  "globalkenyacontainers_Reefer-repair": "Reefer Container Repair Service",

  // Additional new images with custom titles
  "1BEDROOM": "1-Bedroom Container Home",
  "Ablution": "Ablution Container Unit",
  "globalkenyacontainers_2-Bedroom-House-in-1x40ft": "2-Bedroom Container House (40ft)",
  "globalkenyacontainers_40ft-dry-shipping-containerlowcube": "Low Cube Dry Shipping Container",
  "globalkenyacontainers_40ft-high-cube-shipping-container": "High Cube Shipping Container",
  "globalkenyacontainers_Dormitory": "Container Dormitory Unit",
  "globalkenyacontainers_Genset": "Genset (Reefer Generator)",
  "globalkenyacontainers_Reefer-Compressor": "Reefer Compressor Unit",
  "globalkenyacontainers_Reefer-repair": "Reefer Repair Service",
  "Kitchen": "Container Kitchen Unit",
  "school": "Container School Unit",
  "Tanktainer": "Tanktainer Unit",
  "20ft-Kitchen": "20ft Container Kitchen",
  "40ft-office": "40ft Office Container",
  "40ft-with-wooden-shelves": "40ft Container with Wooden Shelves",
  "Container-stalls": "Container Stall",
  "Brand-new-container": "Brand New Shipping Container",
  "butterfly_": "Custom Butterfly Container",
  "Classrooms": "Container Classroom",
  "Container-club": "Container Club",
  "Genset-(reefer-generator)": "Genset (Reefer Generator)",
  "Reefer-Compressor": "Reefer Compressor Unit",
  "Reefer-repair": "Reefer Repair Service",

  // Service-related titles
  "Branding Services": "Branding Services",
  "Crane Handling Services": "Crane Handling Services",
  "Custom modifications and customization work": "Custom Modifications and Customization Work",
  "global-kenya-containers-fabrication": "Container Fabrication Services",
  "global-kenya-containers-crane-handling-services": "Crane and Handling Services",
  "Installation and assembly work": "Installation and Assembly Work",
  "Reefer repair services": "Reefer Repair Services",
  "Transportation&delivery services": "Transportation and Delivery Services",
  "Sales&Hire&rental operations": "Sales, Hire and Rental Operations",
};

const titleFromFilename = (filename: string): string => {
  const manualTitle = Object.keys(manualTitles).find(key => filename.includes(key));
  if (manualTitle) {
    return manualTitles[manualTitle];
  }

  const cleaned = filename
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
    .replace(/globalkenyacontainers/gi, '')
    .replace(/global kenya containers/gi, '')
    .replace(/\d+$/, '') // Remove numbers at the end
    .trim();

  // Convert to Title Case
  return cleaned.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
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
          const title = titleFromFilename(filename);
          const category = getCategoryFromFilename(filename);

          return {
            src,
            alt: `Image of ${title}`,
            title,
            category,
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
