import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imageModules = import.meta.glob('@/assets/*.{jpg,jpeg,png,svg}');
      const images: GalleryImage[] = await Promise.all(
        Object.entries(imageModules).map(async ([path, importer]) => {
          const { default: src } = await importer() as { default: string };
          const filename = path.split('/').pop()?.split('.')[0] || '';
          const title = titleFromFilename(filename);
          
          return {
            src,
            alt: `Image of ${title}`,
            title,
          };
        })
      );
      // Filter out logo
      setGalleryImages(images.filter(image => image.title.toLowerCase() !== 'logo'));
    };

    fetchImages();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg"
              onClick={() => openLightbox(index)}
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
                    src={galleryImages[selectedImage].src}
                    alt={galleryImages[selectedImage].alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <p className="text-white text-center mt-2 text-lg bg-black bg-opacity-50 rounded-b-lg py-2">{galleryImages[selectedImage].title}</p>
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
