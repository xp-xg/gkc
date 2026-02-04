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

const ShippingContainersNairobi = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Shipping Containers Nairobi | Buy, Rent & Fabricate 20ft 40ft | Call 0716 068548</title>
        <meta name="description" content="Find quality shipping containers for sale in Nairobi from Global Kenya Containers. 20ft and 40ft containers at competitive prices. Call 0716 068548 for quotes and viewing." />
        <meta name="keywords" content="shipping containers Nairobi, containers for sale Nairobi, 20ft container price Nairobi, 40ft container Nairobi, container shop Nairobi, shipping containers for sale Kenya, used containers for sale Nairobi, container fabrication Nairobi, shipping container offices Nairobi, reefer containers Nairobi, container homes Nairobi, container transport Nairobi, container stalls Nairobi, container offices Nairobi, container conversion Nairobi" />
        <link rel="canonical" href="https://globalkenyacontainers.com/shipping-containers-nairobi" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Shipping Containers Nairobi | Buy, Rent & Fabricate 20ft 40ft | Call 0716 068548" />
        <meta property="og:description" content="Find quality shipping containers for sale in Nairobi from Global Kenya Containers. 20ft and 40ft containers at competitive prices. Call 0716 068548 for quotes and viewing." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://globalkenyacontainers.com/shipping-containers-nairobi" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shipping Containers Nairobi | Buy, Rent & Fabricate 20ft 40ft" />
        <meta name="twitter:description" content="Find quality shipping containers for sale in Nairobi from Global Kenya Containers. 20ft and 40ft containers at competitive prices." />

        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Shipping Containers Nairobi",
            "image": [
              "https://globalkenyacontainers.com/images/shipping-container-nairobi-exterior.jpg",
              "https://globalkenyacontainers.com/images/shipping-container-nairobi-interior.jpg",
              "https://globalkenyacontainers.com/images/shipping-container-nairobi-delivery.jpg"
            ],
            "description": "Quality shipping containers for sale in Nairobi from Global Kenya Containers. Wide selection of 20ft and 40ft containers at competitive prices. Perfect for storage, offices, homes, and commercial stalls in Nairobi.",
            "sku": "SHIPPING-CONTAINER-NAIROBI",
            "mpn": "SHIPPING-CONTAINER-NAIROBI",
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
              "reviewBody": "Quality containers at competitive prices. Excellent service and timely delivery across Nairobi.",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Shipping Containers Nairobi</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Find quality shipping containers for sale in Nairobi from Global Kenya Containers. 20ft and 40ft containers at competitive prices.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Shipping Containers for Sale in Nairobi</h2>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 mb-6">
                  Looking for quality <strong>shipping containers for sale in Nairobi</strong>? Global Kenya Containers offers a wide selection of 20ft and 40ft containers at competitive prices. Whether you need containers for storage, offices, homes, or commercial stalls, we have the right solution for your needs in Nairobi.
                </p>

                <p className="text-gray-700 mb-6">
                  Our <strong>containers for sale in Nairobi</strong> come in various conditions from new to used, allowing you to choose the option that best fits your budget and requirements. We serve all areas of Nairobi including Industrial Area, South B, South C, Karen, Langata, Westlands, Upper Hill, and more.
                </p>

                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded">
                  <h3 className="font-bold text-lg text-primary mb-2">Available Container Types in Nairobi</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>New 20ft Dry Storage Containers</li>
                    <li>Used 20ft Dry Storage Containers</li>
                    <li>New 40ft Dry Storage Containers</li>
                    <li>Used 40ft Dry Storage Containers</li>
                    <li>20ft Refrigerated Containers (Reefer)</li>
                    <li>40ft Refrigerated Containers (Reefer)</li>
                    <li>High Cube Containers</li>
                    <li>Open Top Containers</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Why Choose Our Nairobi Service?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Fast delivery across Nairobi</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Competitive <strong>container prices in Nairobi</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Wide variety of container types and sizes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Professional installation services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>On-site viewing available</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Common Uses in Nairobi</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Warehouse and storage facilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Construction site offices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Retail shops and kiosks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Residential homes and guest houses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Medical clinics and laboratories</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Areas We Serve in Nairobi</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Industrial Area</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">South B</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">South C</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Karen</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Langata</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Westlands</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Upper Hill</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Ngong Road</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Kilimani</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Madaraka</div>
                  </div>
                </div>
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
                    alt="Beautiful container houses Nairobi for sale"
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
                    alt="Container office Nairobi for rent"
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
                    alt="Commercial container stalls Nairobi for sale"
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

export default ShippingContainersNairobi;