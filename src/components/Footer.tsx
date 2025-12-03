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
                href="https://www.facebook.com/share/r/15rCcgw1kk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/global_kenya_containers?utm_source=qr&igsh=MW41d3g2ZW94bzBzNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://vt.tiktok.com/ZSfnYWkXM/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-accent hover:to-primary rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-accent/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.28-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.03.15 1.47.3.48.78.79 1.33.82 1.63.1 3.25-.57 4.46-1.72V8.73c1.99 1.12 4.36.65 5.94-.75 1.96-1.56 2.12-4.62.52-6.5-1.08-1.22-2.64-1.8-4.11-1.69-1.19.09-2.34.54-3.29 1.23C12.96 1.61 12.74.82 12.53.02z"/>
                </svg>
              </a>
              <a
                href="mailto:info@globalkenyacontainers.com"
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
