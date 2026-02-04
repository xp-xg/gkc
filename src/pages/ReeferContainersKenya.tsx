import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle, Home, Building, Store, Package, Users, Star, Clock, Shield, Thermometer, Box } from "lucide-react";
import ReeferImage from "@/assets/global-kenya-containers-reefer.jpg";
import ContainerStalls from "@/assets/globalkenyacontainers_Container stalls3.jpeg";
import OfficeContainer from "@/assets/globalkenyacontainers_40ft office.jpeg";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const ReeferContainersKenya = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Reefer Containers Kenya | Refrigerated Containers for Sale & Rent | Call 0716 068548</title>
        <meta name="description" content="Find quality reefer containers for sale and rent in Kenya from Global Kenya Containers. Temperature-controlled solutions for perishable goods with reliable cooling systems. Call 0716 068548 for quotes." />
        <meta name="keywords" content="reefer containers Kenya, refrigerated containers Kenya, reefer containers for sale Kenya, reefer containers for rent Kenya, cold storage containers Kenya, temperature controlled containers Kenya, reefer containers Nairobi, reefer containers Mombasa, reefer containers Kisumu, cold storage Kenya, refrigerated containers for sale, reefer container rental Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/reefer-containers-kenya" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Reefer Containers Kenya | Refrigerated Containers for Sale & Rent | Call 0716 068548" />
        <meta property="og:description" content="Find quality reefer containers for sale and rent in Kenya from Global Kenya Containers. Temperature-controlled solutions for perishable goods with reliable cooling systems. Call 0716 068548 for quotes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://globalkenyacontainers.com/reefer-containers-kenya" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reefer Containers Kenya | Refrigerated Containers for Sale & Rent" />
        <meta name="twitter:description" content="Find quality reefer containers for sale and rent in Kenya from Global Kenya Containers. Temperature-controlled solutions for perishable goods with reliable cooling systems." />

        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Reefer Containers Kenya",
            "image": [
              "https://globalkenyacontainers.com/images/reefer-container-exterior.jpg",
              "https://globalkenyacontainers.com/images/reefer-container-interior.jpg",
              "https://globalkenyacontainers.com/images/reefer-container-cooling-system.jpg"
            ],
            "description": "Quality reefer containers for sale and rent in Kenya from Global Kenya Containers. Temperature-controlled solutions for storing and transporting perishable goods across Kenya. Features advanced cooling systems that maintain consistent temperatures from -25°C to +25°C.",
            "sku": "REEFER-CONTAINER-KENYA",
            "mpn": "REFRIGERATED-CONTAINER-KENYA",
            "brand": {
              "@type": "Organization",
              "name": "Global Kenya Containers"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Global Kenya Containers"
            },
            "category": "Refrigerated Containers",
            "material": "Steel with Polyurethane Insulation",
            "color": "White/Blue",
            "weight": {
              "@type": "QuantitativeValue",
              "value": "3800",
              "unitCode": "KGM"
            },
            "depth": {
              "@type": "QuantitativeValue",
              "value": "20",
              "unitCode": "FEET"
            },
            "width": {
              "@type": "QuantitativeValue",
              "value": "8",
              "unitCode": "FEET"
            },
            "height": {
              "@type": "QuantitativeValue",
              "value": "8.5",
              "unitCode": "FEET"
            },
            "offers": {
              "@type": "Offer",
              "price": "800000",
              "priceCurrency": "KES",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Global Kenya Containers"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "800000",
                "priceCurrency": "KES",
                "valueAddedTaxIncluded": "false"
              },
              "availabilityStarts": "2024-01-01",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "deliveryLeadTime": {
                "@type": "QuantitativeValue",
                "value": "5",
                "unitCode": "DAY"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "120",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [{
              "@type": "Review",
              "reviewBody": "Quality containers at competitive prices. Excellent service and timely delivery across Kenya.",
              "datePublished": "2024-01-15",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Dan Mutua"
              }
            }]
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Reefer Containers Kenya</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Find quality reefer containers for sale and rent in Kenya from Global Kenya Containers. Temperature-controlled solutions for perishable goods with reliable cooling systems.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3 elevation-3 hover:elevation-4 transition-all duration-300">
                  <Phone className="mr-2 h-5 w-5" /> Call 0716 068548
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 elevation-3 hover:elevation-4 transition-all duration-300">
                  <MessageCircle className="mr-2 h-5 w-5" /> Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Reefer Containers for Sale & Rent in Kenya</h2>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 mb-6">
                  Looking for quality <strong>reefer containers in Kenya</strong>? Global Kenya Containers offers reliable refrigerated containers for sale and rent. Our reefer containers provide temperature-controlled solutions for storing and transporting perishable goods across Kenya.
                </p>

                <p className="text-gray-700 mb-6">
                  Our <strong>refrigerated containers in Kenya</strong> feature advanced cooling systems that maintain consistent temperatures from -25°C to +25°C. Whether you need cold storage for fruits, vegetables, meat, pharmaceuticals, or flowers, we have the right solution for your business.
                </p>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded">
                  <h3 className="font-bold text-lg text-primary mb-2">Reefer Container Specifications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Temperature range: -25°C to +25°C</li>
                    <li>20ft and 40ft options available</li>
                    <li>Insulated walls with polyurethane foam</li>
                    <li>Energy-efficient cooling systems</li>
                    <li>Remote monitoring capabilities</li>
                    <li>24/7 temperature control</li>
                    <li>Humidity control features</li>
                    <li>Backup power compatibility</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Applications of Reefer Containers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Cold storage for agricultural products</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Pharmaceutical storage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Meat and seafood preservation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Floral and plant storage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Chemical storage (temperature sensitive)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Benefits of Our Reefer Containers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Reliable cooling systems with 24/7 monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Energy-efficient operation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Consistent temperature maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Fast delivery and installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Competitive rental and purchase prices</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Reefer Container Pricing in Kenya</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-center text-primary mb-4">For Purchase</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>20ft Reefer Container</span>
                        <span className="font-bold">From KSh 1,000,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>40ft Reefer Container</span>
                        <span className="font-bold">From KSh 1,500,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Used Reefer Containers</span>
                        <span className="font-bold">From KSh 500,000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-center text-primary mb-4">For Rent</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Monthly Rental (20ft)</span>
                        <span className="font-bold">From KSh 45,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Monthly Rental (40ft)</span>
                        <span className="font-bold">From KSh 65,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Short-term Rental</span>
                        <span className="font-bold">Negotiable</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-center">Prices vary based on condition, specifications, and rental duration. Contact us for exact pricing and availability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Our Container Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={ReeferImage}
                    alt="Reefer containers Kenya for sale"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Reefer Containers</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Temperature-controlled solutions for perishable goods.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Reliable cooling systems</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>24/7 monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={OfficeContainer}
                    alt="Container office Kenya for rent"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Container Offices</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Professional workspace solutions for any location.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Customizable interiors</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fast deployment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={ContainerStalls}
                    alt="Commercial container stalls Kenya for sale"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Commercial Stalls</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Retail and business solutions for entrepreneurs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure & durable construction</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Attractive design options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
};

export default ReeferContainersKenya;