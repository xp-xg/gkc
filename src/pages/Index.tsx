import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, CheckCircle, Home, Building, Store, Package, Users, Star, Clock, Shield } from "lucide-react";
import ContainerImage from "@/assets/dry-container.jpg";
import OfficeContainer from "@/assets/office-container.jpg";
import AccommodationContainer from "@/assets/accommodation-container.jpg";
import CommercialStalls from "@/assets/commercial-stalls.jpg";
import RefrigerationContainer from "@/assets/refrigeration-container.jpg";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Stats Section - Visually Stunning */}
        <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 elevation-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">5000+</div>
                <div className="text-sm opacity-90">Containers Delivered</div>
              </div>
              <div className="p-4 elevation-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="p-4 elevation-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">20+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
              <div className="p-4 elevation-2 rounded-xl bg-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Global Kenya Containers</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                As the best container people in all works containers, we transform quality shipping containers into innovative solutions for residential and commercial spaces across Kenya.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality Containers</h3>
                    <p className="text-gray-600">
                      Our shipping containers are sourced from top manufacturers worldwide, ensuring durability and reliability for all your projects. 
                      We offer new and used containers that meet international standards for strength and safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Container Solutions</h3>
                    <p className="text-gray-600">
                      Containers have evolved beyond their original purpose of transporting goods and are now being creatively repurposed as innovative solutions for both residential and commercial spaces. 
                      At Global Kenya Containers, we understand this transformation and provide containers that can be customized to include all the comforts of traditional spaces while reducing environmental footprint.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Container Fabrication</h3>
                    <p className="text-gray-600">
                      Our skilled team of Kenya container fabricators possess the expertise to cut, weld, insulate, and finish containers to meet your specific requirements. 
                      From installing windows and doors to electrical and plumbing work, we turn these industrial vessels into comfortable living spaces or functional retail outlets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-xl elevation-2">
                  <img 
                    src={ContainerImage} 
                    alt="High-quality shipping container Kenya" 
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-rows-2 gap-4 mt-8">
                  <div className="rounded-xl overflow-hidden shadow-xl elevation-2">
                    <img 
                      src={OfficeContainer} 
                      alt="Container office Kenya" 
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-xl elevation-2">
                    <img 
                      src={AccommodationContainer} 
                      alt="Container accommodation Kenya" 
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Stats Section */}
            <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 elevation-3">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Container Solutions Across Kenya</h3>
                    <p className="text-gray-700 mb-6">
                      These sturdy steel structures have gained immense popularity as affordable and sustainable options for homes and shops. 
                      With their modular design and ease of transport, containers can be easily transformed into cozy Container Houses or functional retail spaces. 
                      At Global Kenya Containers, we play a pivotal role in this transformation, helping homeowners and entrepreneurs capitalize on the mobility and distinctive aesthetic appeal of containers.
                    </p>
                    
                    {/* Services Overview */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" />
                        <span className="text-sm">Container Homes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-5 h-5 text-primary" />
                        <span className="text-sm">Office Units</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Store className="w-5 h-5 text-primary" />
                        <span className="text-sm">Commercial Stalls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-primary" />
                        <span className="text-sm">Storage Solutions</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="text-5xl font-bold text-primary mb-2">20+</div>
                    <div className="text-gray-600 font-medium">Years of Excellence</div>
                    <div className="flex items-center gap-1 mt-2 text-yellow-500">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Container Solutions</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                From storage to commercial spaces, our versatile container solutions meet diverse needs across Kenya
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ContainerImage} 
                    alt="Dry storage containers Kenya" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Storage Containers</h3>
                  <p className="text-gray-600 mb-4">Secure, durable containers for all your storage needs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>20ft, 40ft, High Cube options</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Weather-resistant design</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={OfficeContainer} 
                    alt="Container office Kenya" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Container Offices</h3>
                  <p className="text-gray-600 mb-4">Professional workspace solutions for any location.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Customizable interiors</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Fast deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden elevation-2 hover:elevation-4 transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={CommercialStalls} 
                    alt="Commercial container stalls Kenya" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Stalls</h3>
                  <p className="text-gray-600 mb-4">Retail and business solutions for entrepreneurs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure & durable construction</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Attractive design options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beautiful CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Ready to Get Your Container?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Contact us today for a free quote and expert advice on the best container solution for your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
                asChild
              >
                <a href="tel:+254716068548">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-base px-8 py-6 elevation-3 hover:elevation-4 transition-all rounded-lg"
                asChild
              >
                <a href="#contact">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>National Park East Gate Road, Off Mombasa Road, Nairobi</span>
              </div>
              <div className="text-sm">
                <p>Countrywide Delivery Available</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
