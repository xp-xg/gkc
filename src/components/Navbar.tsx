import { Menu, X, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTAINER SIZES", path: "/container-sizes" },
    { name: "FAQS", path: "/faq" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* Top bar - Enhanced for mobile */}
      <div className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground py-2 px-4 hidden md:flex">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-xs">
          <div className="flex items-center gap-2 mb-1 sm:mb-0">
            <MapPin className="w-3 h-3" />
            <span className="text-center sm:text-left">
              National Park East Gate Road, Off Mombasa Road, Nairobi
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+254716068548"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Phone className="w-3 h-3" />
              <span className="text-sm">+254716068548</span>
            </a>
            <a
              href="tel:+254724770653"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Phone className="w-3 h-3" />
              <span className="text-sm">+254724770653</span>
            </a>
            <a
              href="mailto:info@globalkenyacontainers.com"
              className="flex items-center gap-1 hover:opacity-80"
            >
              <Mail className="w-3 h-3" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile top bar for smaller screens */}
      <div className="bg-accent text-accent-foreground py-2 px-4 md:hidden">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-xs">
            <Phone className="w-3 h-3 mr-1" />
            <span>+254716068548</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a href="tel:+254724770653" className="flex items-center gap-1">
              <Phone className="w-3 h-3 mr-1" />
              <span>+254724770653</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Updated for better mobile experience */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Global Kenya Containers Logo"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </Link>
              <div className="hidden md:block">
                <h1 className="text-base md:text-xl font-medium">
                  Global Kenya{" "}
                  <span className="text-primary font-semibold">Containers</span>
                </h1>
              </div>
            </div>

            {/* Desktop navigation - Enhanced mobile styles */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm font-medium rounded transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button - Enhanced styling */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile navigation - Enhanced with better styling */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              {/* Mobile contact info */}
              <div className="mt-4 pt-4 border-t border-gray-200 px-4">
                <div className="flex flex-col space-y-2">
                  <a
                    href="tel:+254716068548"
                    className="flex items-center gap-2 text-sm py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+254716068548</span>
                  </a>
                  <a
                    href="tel:+254724770653"
                    className="flex items-center gap-2 text-sm py-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+254724770653</span>
                  </a>
                  <a
                    href="mailto:info@globalkenyacontainers.com"
                    className="flex items-center gap-2 text-sm py-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
