import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What sizes of shipping containers do you offer?",
      answer: "We offer a variety of container sizes including 20ft, 40ft, and 40ft High Cube containers. Each size is designed to meet different storage and transportation needs."
    },
    {
      question: "How long does it take for delivery?",
      answer: "Delivery time typically ranges from 2-5 business days depending on your location within Kenya. Countrywide delivery is available."
    },
    {
      question: "Can the containers be customized?",
      answer: "Yes, we offer customization services for container offices, homes, commercial stalls, and other specialized applications with steel doors, windows, and internal partitions."
    },
    {
      question: "Are the containers secure?",
      answer: "All our containers feature secure double-lock doors with thick steel panels, ensuring your goods are protected. We also offer additional security options if needed."
    },
    {
      question: "What are the payment options?",
      answer: "We accept various payment methods including bank transfers, mobile money, and cash payments. Flexible payment plans are available for larger orders."
    },
    {
      question: "Do you offer container hire or only sales?",
      answer: "We offer both container hire and sales options to meet your specific needs. Our rental packages are flexible and can be tailored to your timeline."
    },
    {
      question: "What maintenance is required?",
      answer: "Our shipping containers are built to last, but we recommend periodic inspection of doors and seals. We offer maintenance services to keep your containers in top condition."
    },
    {
      question: "Can containers be stacked?",
      answer: "Yes, our containers are designed to be stacked safely. They feature corner fittings that allow for secure stacking to optimize floor space."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl lg:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-light">
            Get answers to common questions about our container services
          </p>
        </header>
        
        <div className="max-w-3xl mx-auto">
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
    </section>
  );
};

export default FAQ;