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
          <h2 id="contact-heading" className="text-3xl lg:text-4xl font-medium mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Get in touch with us for all your container needs
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                National Park East Gate Road, Off Mombasa Road, Nairobi
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                +254716068548<br />
                +254724770653
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-2 rounded-lg">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                info@globalkenyacontainers.com
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto elevation-3 rounded-lg">
          <CardContent className="p-8">
            <h3 className="text-xl font-medium mb-6">Send us a message</h3>
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
    </section>
  );
};

export default Contact;
