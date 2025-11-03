import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Wide range of container sizes - 20ft, 40ft, and custom options",
    "Quality guaranteed products from top manufacturers",
    "Affordable pricing with flexible payment plans",
    "Professional customization services",
    "Reliable delivery across Kenya",
    "Expert consultation available",
  ];

  return (
    <section id="about" className="py-16 lg:py-24" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="about-heading" className="text-3xl lg:text-4xl font-medium mb-6">
              About Global Kenya Containers
            </h2>
            <p className="text-muted-foreground mb-6 text-lg font-light leading-relaxed">
              Global Kenya Containers is the premier provider of shipping containers in Kenya, offering a comprehensive selection of dry storage containers, refrigeration units, office containers, and accommodation containers. As the best container company in East Africa, we specialize in delivering quality container solutions for storage, commercial, and residential purposes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 10 years of experience in the container industry, we have established ourselves as the leading container specialists in Kenya. We serve clients across Nairobi, Mombasa, Kisumu, and throughout the country, providing everything from basic storage containers to fully customized office spaces and residential container homes. Our team of Kenya container fabricators transforms standard shipping containers into functional spaces that meet your exact specifications.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-medium text-foreground">Our Container Services</h3>
              <p className="text-muted-foreground">
                We offer a complete range of container services including container sales, container rentals, and container modifications. Our shipping containers Kenya solutions include dry storage containers suitable for both personal and commercial use, refrigerated containers for cold storage applications, office containers for workspace solutions, accommodation containers for residential purposes, and commercial stalls for retail businesses. 
              </p>
              <p className="text-muted-foreground">
                Our container fabrication services include interior modifications, installation of electrical systems, plumbing, insulation, windows, and doors. We specialize in creating comfortable container houses, mobile offices, and retail kiosks that meet modern standards while maintaining the durability and security that shipping containers are known for.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary text-primary-foreground p-8 rounded-lg elevation-2">
              <div className="text-4xl font-medium mb-2">500+</div>
              <div className="text-sm font-light">Happy Clients</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg elevation-2">
              <div className="text-4xl font-medium mb-2">5000+</div>
              <div className="text-sm font-light">Containers Delivered</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg elevation-2">
              <div className="text-4xl font-medium mb-2">20+</div>
              <div className="text-sm font-light">Years Experience</div>
            </div>
            <div className="bg-primary text-primary-foreground p-8 rounded-lg elevation-2">
              <div className="text-4xl font-medium mb-2">24/7</div>
              <div className="text-sm font-light">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
