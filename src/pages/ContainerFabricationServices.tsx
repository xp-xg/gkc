import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle, Home, Building, Store, Package, Users, Star, Clock, Shield, Wrench, Hammer, Ruler } from "lucide-react";
import ButterflyImage from "@/assets/globalkenyacontainers_butterfly_.jpeg";
import ContainerStalls from "@/assets/globalkenyacontainers_Container stalls3.jpeg";
import OfficeContainer from "@/assets/globalkenyacontainers_40ft office.jpeg";
import FabricationImage from "@/assets/global-kenya-containers-fabrication.jpg";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";

const ContainerFabricationServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Container Fabrication Kenya | Custom Container Modification Services | Call 0716 068548</title>
        <meta name="description" content="Professional container fabrication services in Kenya. Custom container modifications for homes, offices, commercial stalls, and specialized containers. Call 0716 068548 for quotes." />
        <meta name="keywords" content="container fabrication Kenya, container modification Kenya, custom container Kenya, container fabrication services, container conversion Kenya, container homes Kenya, container offices Kenya, container stalls Kenya, container customization Kenya, container renovation Kenya, container building Kenya" />
        <link rel="canonical" href="https://globalkenyacontainers.com/container-fabrication-services" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Container Fabrication Kenya | Custom Container Modification Services | Call 0716 068548" />
        <meta property="og:description" content="Professional container fabrication services in Kenya. Custom container modifications for homes, offices, commercial stalls, and specialized containers. Call 0716 068548 for quotes." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://globalkenyacontainers.com/container-fabrication-services" />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Container Fabrication Kenya | Custom Container Modification Services" />
        <meta name="twitter:description" content="Professional container fabrication services in Kenya. Custom container modifications for homes, offices, commercial stalls, and specialized containers." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Container Fabrication Kenya</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Professional container fabrication services in Kenya. Custom container modifications for homes, offices, commercial stalls, and specialized containers.
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
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">Professional Container Fabrication Services in Kenya</h2>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-gray-700 mb-6">
                  Looking for professional <strong>container fabrication services in Kenya</strong>? Global Kenya Containers offers expert container modification and customization services to transform standard shipping containers into functional spaces tailored to your specific needs.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Our experienced team of <strong>Kenya container fabricators</strong> possess the expertise to cut, weld, insulate, and finish containers to meet your specific requirements. From installing windows and doors to electrical and plumbing work, we turn these industrial vessels into comfortable living spaces or functional retail outlets.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-primary p-6 my-8 rounded">
                  <h3 className="font-bold text-lg text-primary mb-2">Our Container Fabrication Services Include:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Container cutting and welding</li>
                    <li>Installation of windows and doors</li>
                    <li>Electrical and plumbing systems</li>
                    <li>Insulation and climate control</li>
                    <li>Interior finishing and furnishing</li>
                    <li>Exterior modifications and painting</li>
                    <li>Structural reinforcements</li>
                    <li>Specialized equipment installations</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Benefits of Container Fabrication</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Cost-effective compared to traditional construction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Fast deployment and installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Durable and weather-resistant</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Eco-friendly and sustainable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Customizable to your exact specifications</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Common Fabrication Projects</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Container homes and residential units</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Office spaces and workstations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Commercial stalls and retail spaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Medical clinics and laboratories</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Restaurants and food service units</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Fabrication Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Wrench className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="font-bold text-gray-900">Design</div>
                    <div className="text-sm text-gray-600">Planning and customization</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Hammer className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="font-bold text-gray-900">Cutting</div>
                    <div className="text-sm text-gray-600">Precision modifications</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Ruler className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="font-bold text-gray-900">Installation</div>
                    <div className="text-sm text-gray-600">Systems and fixtures</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Home className="mx-auto h-8 w-8 text-primary mb-2" />
                    <div className="font-bold text-gray-900">Delivery</div>
                    <div className="text-sm text-gray-600">Final installation</div>
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
                    src={FabricationImage}
                    alt="Container fabrication Kenya services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Container Fabrication</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">Custom container modifications to your specifications.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Skilled fabricators</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Quality materials</span>
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

export default ContainerFabricationServices;