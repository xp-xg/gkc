import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle, Home, Building, Store, Package, Users, Star, Clock, Shield } from "lucide-react";
import ButterflyImage from "@/assets/globalkenyacontainers_butterfly_.jpeg";
import ContainerStalls from "@/assets/globalkenyacontainers_Container stalls3.jpeg";
import OfficeContainer from "@/assets/globalkenyacontainers_40ft office.jpeg";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const UsedContainersSale = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Used Containers for Sale Kenya | Quality Second Hand Containers | Call 0716 068548</title>
        <meta name="description" content="Find quality used containers for sale in Kenya from Global Kenya Containers. Affordable 20ft and 40ft containers for storage, offices, homes, and commercial use. Call 0716 068548 for quotes." />
        <meta name="keywords" content="used containers for sale Kenya, used containers for sale Nairobi, second hand containers Kenya, used shipping containers Kenya, cheap containers Kenya, affordable containers Kenya, used containers for sale Mombasa, used containers for sale Kisumu, used containers for sale Nakuru, used containers for sale Eldoret, second hand shipping containers, used containers for storage Kenya, used container homes Kenya, used container offices Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/used-containers-sale" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Used Containers for Sale Kenya | Quality Second Hand Containers | Call 0716 068548" />
        <meta property="og:description" content="Find quality used containers for sale in Kenya from Global Kenya Containers. Affordable 20ft and 40ft containers for storage, offices, homes, and commercial use. Call 0716 068548 for quotes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://globalkenyacontainers.com/used-containers-sale" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Used Containers for Sale Kenya | Quality Second Hand Containers" />
        <meta name="twitter:description" content="Find quality used containers for sale in Kenya from Global Kenya Containers. Affordable 20ft and 40ft containers for storage, offices, homes, and commercial use." />

        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Used Containers for Sale Kenya",
            "image": [
              "https://globalkenyacontainers.com/images/used-container-exterior.jpg",
              "https://globalkenyacontainers.com/images/used-container-interior.jpg",
              "https://globalkenyacontainers.com/images/used-container-inspection.jpg"
            ],
            "description": "Quality used containers for sale in Kenya from Global Kenya Containers. Affordable 20ft and 40ft containers for storage, offices, homes, and commercial use. Carefully inspected and maintained to ensure structural integrity for various applications.",
            "sku": "USED-CONTAINER-KENYA",
            "mpn": "USED-CONTAINER-KENYA",
            "offers": {
              "@type": "Offer",
              "price": "200000",
              "priceCurrency": "KES",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Global Kenya Containers"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "200000",
                "priceCurrency": "KES",
                "valueAddedTaxIncluded": "false"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Used Containers for Sale Kenya</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Find quality used containers for sale in Kenya from Global Kenya Containers. Affordable 20ft and 40ft containers for storage, offices, homes, and commercial use.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Quality Used Containers for Sale in Kenya</h2>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 mb-6">
                  Looking for affordable <strong>used containers for sale in Kenya</strong>? Global Kenya Containers offers quality second-hand shipping containers at significantly lower prices than new containers. Our used containers are carefully inspected and maintained to ensure they meet structural integrity standards for various applications.
                </p>

                <p className="text-gray-700 mb-6">
                  Our <strong>second hand containers in Kenya</strong> are perfect for budget-conscious customers who still need reliable storage, office, or commercial solutions. We offer various sizes and conditions to meet your specific needs.
                </p>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded">
                  <h3 className="font-bold text-lg text-primary mb-2">Types of Used Containers Available</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>20ft Dry Storage Containers (Good Condition)</li>
                    <li>40ft Dry Storage Containers (Good Condition)</li>
                    <li>20ft High Cube Containers (Good Condition)</li>
                    <li>40ft High Cube Containers (Good Condition)</li>
                    <li>Open Top Containers (Various Conditions)</li>
                    <li>Side Opening Containers (Various Conditions)</li>
                    <li>Refrigerated Containers (Reefer) - Used</li>
                    <li>Tank Containers (Limited Availability)</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Advantages of Used Containers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Significantly lower cost than new containers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Still structurally sound and durable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Environmentally friendly choice</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Immediate availability in many cases</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Ideal for temporary or medium-term use</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Common Uses for Used Containers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Temporary storage solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Construction site offices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Commercial stalls and shops</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Workshops and utility rooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Guest houses and temporary accommodation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Used Container Pricing in Kenya</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-center text-primary mb-4">20ft Used Containers</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Standard Dry Container (Good Condition)</span>
                        <span className="font-bold">From KSh 200,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>High Cube Container (Good Condition)</span>
                        <span className="font-bold">From KSh 250,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Basic Condition Container</span>
                        <span className="font-bold">From KSh 150,000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-center text-primary mb-4">40ft Used Containers</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span>Standard Dry Container (Good Condition)</span>
                        <span className="font-bold">From KSh 350,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>High Cube Container (Good Condition)</span>
                        <span className="font-bold">From KSh 400,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Basic Condition Container</span>
                        <span className="font-bold">From KSh 280,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-center">Prices vary based on condition, age, and specifications. Contact us for exact pricing and availability.</p>
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
                    src={ButterflyImage}
                    alt="Beautiful container houses Kenya for sale"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Beautiful Houses</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Comfortable, modern container homes for all your residential needs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>20ft, 40ft, High Cube options</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Insulated & finished interiors</span>
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

export default UsedContainersSale;