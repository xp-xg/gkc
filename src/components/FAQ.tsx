import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What sizes of shipping containers do you offer?",
      answer: "As the best container company in East Africa, Global Kenya Containers offers a comprehensive range of container sizes including 20ft, 40ft, and 40ft High Cube containers. Each size is designed to meet different storage and transportation needs across Kenya. Our shipping containers Kenya solutions include new and used options to suit various budgets and requirements. Whether you need containers for storage, office space, or commercial applications, we have the right size for your project."
    },
    {
      question: "How long does it take for delivery?",
      answer: "Delivery time typically ranges from 2-5 business days depending on your location within Kenya. Our efficient logistics network ensures reliable countrywide delivery for all container types including storage containers, office containers, and accommodation units. At Global Kenya Containers, we pride ourselves on timely delivery to meet your project deadlines. Our container delivery service covers Nairobi, Mombasa, Kisumu, and rural areas throughout the country."
    },
    {
      question: "Can the containers be customized?",
      answer: "Yes, our team of Kenya container fabricators offers extensive customization services for container offices, homes, commercial stalls, and other specialized applications. We install steel doors, windows, electrical systems, plumbing, insulation, and internal partitions to create functional spaces tailored to your needs. Our container fabrication services transform standard shipping containers into comfortable and efficient spaces for residential, commercial, or industrial use across Kenya."
    },
    {
      question: "Are the containers secure?",
      answer: "All our containers feature secure double-lock doors with thick steel panels, ensuring your goods are protected. Our security features include reinforced corner locks, thick steel walls, and optional security upgrades like alarm systems and additional locks. We provide the highest level of security for your storage containers, office containers, and commercial stalls throughout Kenya. Our containers are built to withstand harsh weather conditions and potential security threats."
    },
    {
      question: "What are the payment options?",
      answer: "We accept various payment methods including bank transfers, mobile money (M-Pesa), and cash payments. Flexible payment plans are available for larger orders, including container rentals and custom fabrication projects. Our shipping containers Kenya solutions come with competitive pricing and financing options to make quality container solutions accessible to all clients. We also offer corporate billing arrangements for commercial clients."
    },
    {
      question: "Do you offer container hire or only sales?",
      answer: "We offer both container hire and sales options to meet your specific needs. Our rental packages are flexible and can be tailored to your timeline, perfect for short-term storage, construction sites, or temporary office spaces. Our container rental service includes 20ft, 40ft, and specialized containers like refrigeration units and office containers. For long-term needs, we offer purchase options with financing available through our shipping containers Kenya services."
    },
    {
      question: "What maintenance is required?",
      answer: "Our shipping containers are built to last, but we recommend periodic inspection of doors and seals to ensure longevity. We offer comprehensive maintenance services including structural repairs, repainting, lock replacement, and electrical system maintenance for converted containers. Our team of Kenya container fabricators provides ongoing support to keep your containers in top condition throughout their lifecycle. Regular maintenance ensures your investment continues to serve you well for years to come."
    },
    {
      question: "Can containers be stacked?",
      answer: "Yes, our containers are designed to be stacked safely. They feature corner fittings that allow for secure stacking to optimize floor space. Standard containers can typically be stacked up to 8 units high when properly secured, making them ideal for maximizing storage capacity when land is limited. Our container fabrication team can also create custom multi-story container buildings for residential or commercial use, adhering to all safety standards for multi-container structures."
    },
    {
      question: "What types of container modifications do you offer?",
      answer: "Our container modification services include interior customization, electrical installation, plumbing, insulation, air conditioning setup, partitioning, window and door installation, and complete interior finishes. We convert standard shipping containers into comfortable offices, homes, commercial stalls, ablution facilities, and refrigeration units. Our Kenya container fabricators use high-quality materials and professional techniques to ensure all modifications meet safety and functionality standards."
    },
    {
      question: "How are container homes constructed?",
      answer: "Container homes are created by combining shipping containers with traditional building techniques to create modern, affordable housing. Our container houses include proper insulation, electrical systems, plumbing, ventilation, and modern interior finishes. These eco-friendly homes are cost-effective alternatives to traditional housing, with the durability and strength that shipping containers provide. They're ideal for permanent residence, temporary accommodation, or remote work locations throughout Kenya."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl lg:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Get answers to common questions about our container services, shipping containers Kenya solutions, and container modifications from Global Kenya Containers
          </p>
        </header>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-medium text-foreground mb-4">General Container Information</h3>
            <p className="text-muted-foreground mb-6">
              As the premier container company in East Africa, Global Kenya Containers provides comprehensive solutions for all your shipping container needs. Our expertise in container applications spans from basic storage to complex custom builds. We serve clients throughout Kenya with quality products and exceptional service.
            </p>
          </div>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="elevation-1 rounded-lg overflow-hidden" role="listitem">
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="px-6 py-5 text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;