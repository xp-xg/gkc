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
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>National Park East Gate Road, Off Mombasa Road, Nairobi</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+254716068548" className="flex items-center gap-1 hover:opacity-80">
              <Phone className="w-4 h-4" />
              <span>+254716068548</span>
            </a>
            <a href="mailto:info@globalkenyacontainers.com" className="flex items-center gap-1 hover:opacity-80">
              <Mail className="w-4 h-4" />
              <span>info@globalkenyacontainers.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-background border-b sticky top-0 z-50 elevation-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary elevation-2 rounded-lg flex items-center justify-center">
                <div className="text-primary-foreground font-bold text-xl">GKC</div>
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  Global Kenya <span className="text-primary font-semibold">Containers</span>
                </h1>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium ${
                    location.pathname === link.path
                      ? "text-primary bg-muted"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;