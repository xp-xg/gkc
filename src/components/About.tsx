import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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
              Global Kenya Containers is the premier provider of shipping containers in Kenya, offering a <Link to="/services" className="text-primary hover:underline">comprehensive selection of dry storage containers, refrigeration units, office containers, and accommodation containers</Link>. As the best container company in East Africa, we specialize in delivering <Link to="/services" className="text-primary hover:underline">quality container solutions for storage, commercial, and residential purposes</Link>.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With over 10 years of experience in the container industry, we have established ourselves as the leading container specialists in Kenya. We serve clients across Nairobi, Mombasa, Kisumu, and throughout the country, providing everything from basic storage containers to <Link to="/services" className="text-primary hover:underline">fully customized office spaces</Link> and <Link to="/gallery" className="text-primary hover:underline">residential container homes</Link>. Our team of Kenya container fabricators transforms standard shipping containers into functional spaces that meet your exact specifications.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-medium text-foreground">Our Container Services</h3>
              <p className="text-muted-foreground">
                We offer a complete range of <Link to="/services" className="text-primary hover:underline">container services</Link> including container sales, container rentals, and container modifications. Our shipping containers Kenya solutions include <Link to="/container-sizes" className="text-primary hover:underline">dry storage containers</Link> suitable for both personal and commercial use, <Link to="/container-sizes" className="text-primary hover:underline">refrigerated containers</Link> for cold storage applications, <Link to="/services" className="text-primary hover:underline">office containers</Link> for workspace solutions, <Link to="/gallery" className="text-primary hover:underline">accommodation containers</Link> for residential purposes, and <Link to="/gallery" className="text-primary hover:underline">commercial stalls</Link> for retail businesses. 
              </p>
              <p className="text-muted-foreground">
                Our <Link to="/services" className="text-primary hover:underline">container fabrication services</Link> include interior modifications, installation of electrical systems, plumbing, insulation, windows, and doors. We specialize in creating comfortable <Link to="/gallery" className="text-primary hover:underline">container houses</Link>, <Link to="/services" className="text-primary hover:underline">mobile offices</Link>, and <Link to="/gallery" className="text-primary hover:underline">retail kiosks</Link> that meet modern standards while maintaining the durability and security that shipping containers are known for.
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
