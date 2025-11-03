import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "Wide range of container sizes",
    "Quality guaranteed products",
    "Affordable pricing",
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
              We are a leading provider of shipping containers in Kenya, offering a comprehensive range of container solutions for storage, commercial, and residential purposes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With years of experience in the industry, we pride ourselves on delivering quality products and exceptional customer service. Whether you need containers for storage, office space, accommodation, or commercial stalls, we have the perfect solution for you.
            </p>
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
              <div className="text-4xl font-medium mb-2">1000+</div>
              <div className="text-sm font-light">Containers Sold</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-8 rounded-lg elevation-2">
              <div className="text-4xl font-medium mb-2">10+</div>
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
