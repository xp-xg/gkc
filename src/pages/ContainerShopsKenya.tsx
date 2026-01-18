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

const ContainerShopsKenya = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Shops Kenya | Commercial Stalls for Sale & Rent | Call 0716 068548</title>
        <meta name="description" content="Find quality container shops for sale and rent in Kenya from Global Kenya Containers. Secure commercial stalls for entrepreneurs at competitive prices. Call 0716 068548 for quotes." />
        <meta name="keywords" content="container shops Kenya, container stalls Kenya, commercial container stalls Kenya, container shops for sale Kenya, container shops rent Kenya, commercial stalls Kenya, container shops Nairobi, container stalls for sale Kenya, portable container offices Kenya, container shops Mombasa, container shops Kisumu, container shops Nakuru, container shops Eldoret" />
        <link rel="canonical" href="https://globalkenyacontainers.com/container-shops-kenya" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Shops Kenya | Commercial Stalls for Sale & Rent | Call 0716 068548" />
        <meta property="og:description" content="Find quality container shops for sale and rent in Kenya from Global Kenya Containers. Secure commercial stalls for entrepreneurs at competitive prices. Call 0716 068548 for quotes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://globalkenyacontainers.com/container-shops-kenya" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Shops Kenya | Commercial Stalls for Sale & Rent" />
        <meta name="twitter:description" content="Find quality container shops for sale and rent in Kenya from Global Kenya Containers. Secure commercial stalls for entrepreneurs at competitive prices." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Container Shops Kenya</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Find quality container shops for sale and rent in Kenya from Global Kenya Containers. Secure commercial stalls for entrepreneurs at competitive prices.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Container Shops for Sale & Rent in Kenya</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 mb-6">
                  Looking for quality <strong>container shops in Kenya</strong>? Global Kenya Containers offers secure and durable commercial stalls for entrepreneurs at competitive prices. Our container shops are perfect for retail businesses, food vendors, service providers, and other commercial enterprises across Kenya.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Our <strong>commercial container stalls in Kenya</strong> are designed with security and functionality in mind. We serve all major cities including Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret, providing reliable commercial solutions for growing businesses.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded">
                  <h3 className="font-bold text-lg text-primary mb-2">Features of Our Container Shops</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Secure lockable doors and windows</li>
                    <li>Weather-resistant construction</li>
                    <li>Customizable interior layouts</li>
                    <li>Electrical and lighting systems</li>
                    <li>Plumbing connections available</li>
                    <li>Attractive exterior finishes</li>
                    <li>Fast installation and deployment</li>
                    <li>Flexible rental and purchase options</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Benefits of Container Shops</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Cost-effective compared to traditional construction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Quick setup and deployment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Durable and long-lasting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Secure and lockable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Portable and relocatable</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Ideal for These Businesses</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Retail shops and kiosks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Food and beverage vendors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Service stations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Barbershops and salons</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Pharmacies and medical clinics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Areas We Serve in Kenya</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Nairobi</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Mombasa</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Kisumu</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Nakuru</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <MapPin className="mx-auto h-6 w-6 text-primary mb-1" />
                    <div className="text-sm font-medium">Eldoret</div>
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
            </div>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default ContainerShopsKenya;