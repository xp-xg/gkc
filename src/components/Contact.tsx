import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
                <Input placeholder="Subject" className="rounded-lg" aria-label="Subject" />
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
