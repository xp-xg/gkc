import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch with Global Kenya Containers</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are your premier source for high-quality shipping containers in Kenya. Whether you need a standard container for storage, a refrigerated unit, or a custom-fabricated solution, our team is ready to assist you. Contact us today for a quote or to discuss your project requirements.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 mt-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">Global Kenya Containers</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      National Park East Gate Road, Off Mombasa Road, Nairobi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-500 dark:text-gray-400">+254 716 068548</p>
                    <p className="text-gray-500 dark:text-gray-400">+254 724 770653</p>
                    <p className="text-gray-500 dark:text-gray-400">+254 721 804377</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@globalkenyacontainers.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                      info@globalkenyacontainers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>





            <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Location</h3>
                <div className="overflow-hidden rounded-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.783437539095!2d36.852098314754!3d-1.3069149990529156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a7a4a4cf3b%3A0x9c19b98d247bf5d1!2sGlobal%20Kenya%20Containers!5e0!3m2!1sen!2ske!4v1683624792694!5m2!1sen!2ske"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
