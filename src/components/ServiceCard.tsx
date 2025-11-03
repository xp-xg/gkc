import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ServiceCard = ({ title, description, image, alt }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 rounded-lg" role="listitem">
      <article>
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={alt}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">{description}</p>
          <Button variant="outline" className="w-full rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all">
            Get in touch
          </Button>
        </CardContent>
      </article>
    </Card>
  );
};

export default ServiceCard;
