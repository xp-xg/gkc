import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%232d3748\' fill-opacity=\'0.05\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-accent to-primary p-2 rounded-lg">
                <div className="bg-white p-2 rounded-md">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold ml-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Global Kenya <span className="text-accent">Containers</span>
              </h3>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for quality shipping containers in Kenya. We
              provide comprehensive container solutions for storage, commercial,
              and residential purposes with unmatched quality and service.
            </p>

            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center text-gray-400 text-sm">
              <Clock className="w-4 h-4 mr-2 text-accent" />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#sizes"
                  className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Container Sizes
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-accent after:rounded-full">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span>Global Kenya Containers<br />National Park East Gate Road, Off Mombasa Road, Nairobi</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+254716068548</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+254724770653</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+254721804377</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>info@globalkenyacontainers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Border separator */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Global Kenya Containers. All
            rights reserved.
          </p>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm">
            Developed with ❤️ by{" "}
            <a
              href="https://wa.me/+254735644100"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-white transition-colors duration-300 font-medium hover:underline"
            >
              XP-XG
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
