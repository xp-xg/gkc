import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  // Product options based on containerskenya.com
  const productOptions = [
    // Dry Shipping Containers
    { value: "20ft-container-sale-hire", label: "20ft Container Sale/Hire" },
    { value: "40ft-highcube-container-sale-hire", label: "40ft Highcube Container Sale/Hire" },
    { value: "20ft-storage-container", label: "20ft Storage Container" },
    { value: "40ft-storage-container", label: "40ft Storage Container" },
    { value: "40ft-flat-rack", label: "40ft Flat Rack" },
    { value: "20ft-open-top-container", label: "20ft Open Top Container" },
    { value: "40ft-open-top-container", label: "40ft Open Top Container" },
    
    // Container Homes
    { value: "20ft-bedsitter", label: "20ft Bedsitter" },
    { value: "40ft-1-bedroom", label: "40ft 1 Bedroom" },
    { value: "2-bedroom-container-house", label: "2 Bedroom Container House" },
    { value: "3-bedroom-container-house", label: "3 Bedroom Container House" },
    { value: "4-bedroom-container-house", label: "4 Bedroom Container House" },
    
    // Container Offices & Specialized
    { value: "20ft-container-office", label: "20ft Container Office" },
    { value: "40ft-container-office", label: "40ft Container Office" },
    { value: "20ft-container-classroom", label: "20ft Container Classroom" },
    { value: "40ft-container-classroom", label: "40ft Container Classroom" },
    { value: "container-school", label: "Container School" },
    { value: "container-display-unit", label: "Container Display Unit" },
    { value: "20ft-laboratory-container", label: "20ft Laboratory Container" },
    { value: "40ft-laboratory-container", label: "40ft Laboratory Container" },
    { value: "20ft-container-clinic", label: "20ft Container Clinic" },
    { value: "40ft-container-clinic", label: "40ft Container Clinic" },
    
    // Container Stalls
    { value: "20ft-container-stalls-shops", label: "20ft Container Stalls/Shops" },
    { value: "40ft-container-stalls-shops", label: "40ft Container Stalls/Shops" },
    { value: "20ft-container-with-shelves", label: "20ft Container With Shelves" },
    { value: "40ft-container-with-shelves", label: "40ft Container With Shelves" },
    
    // Refrigerated Containers
    { value: "20ft-refrigerated-reefer-container-sale-hire", label: "20ft Refrigerated (Reefer) Container Sale/Hire" },
    { value: "40ft-refrigerated-reefer-container-sale-hire", label: "40ft Refrigerated (Reefer) Container Sale/Hire" },
    
    // Specialized Containers
    { value: "ablution-containers", label: "Ablution Containers" },
    { value: "tanktainers", label: "Tanktainers" },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-muted/30" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-medium mb-4">Contact Global Kenya Containers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Get in touch with Kenya's premier container company for all your shipping container needs
          </p>
        </header>

        <div className="space-y-8 max-w-4xl mx-auto mb-12">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">Why Choose Our Container Services</h3>
            <p className="text-muted-foreground mb-6">
              As the best container company in East Africa, Global Kenya Containers offers comprehensive solutions for shipping containers Kenya applications. Our expertise ranges from standard storage containers to highly customized office spaces, accommodation units, and commercial stalls. Our team of Kenya container fabricators ensures each project meets international standards for quality and durability.
            </p>
            <p className="text-muted-foreground">
              We serve clients across Nairobi, Mombasa, Kisumu, and throughout Kenya with reliable delivery, competitive pricing, and professional fabrication services. Whether you need container rentals, purchases, or custom modifications, we provide tailored solutions for residential, commercial, and industrial applications.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Our Location</h3>
              <p className="text-sm text-muted-foreground">
                National Park East Gate Road, Off Mombasa Road, Nairobi
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Easily accessible with countrywide delivery available
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Contact Numbers</h3>
              <p className="text-sm text-muted-foreground">
                +254716068548<br />
                +254724770653
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Available 24/7 for container inquiries
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">
                info@globalkenyacontainers.com
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                For detailed quotes and inquiries
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="elevation-3 rounded-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-6">Send us a message</h3>
              <p className="text-muted-foreground mb-6">
                Have questions about our shipping containers Kenya services? Need a quote for container rental, purchase, or customization? Contact our team of experts for professional advice and competitive pricing on all container solutions.
              </p>
              <form className="space-y-5" aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="rounded-lg" aria-label="Your name" />
                  <Input type="email" placeholder="Your Email" className="rounded-lg" aria-label="Your email" />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Subject" className="rounded-lg" aria-label="Subject" />
                  <Select name="product">
                    <SelectTrigger className="w-full rounded-lg">
                      <SelectValue placeholder="Select Product" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Textarea placeholder="Your Message" rows={5} className="rounded-lg" aria-label="Your message" />
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-6 font-medium elevation-2 hover:elevation-3 transition-all">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
