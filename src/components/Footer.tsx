import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-4">
              Global Kenya <span className="text-secondary">Containers</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4 font-light leading-relaxed">
              Your trusted partner for quality shipping containers in Kenya. We provide comprehensive container solutions for storage, commercial, and residential purposes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all elevation-1 hover:elevation-2">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all elevation-1 hover:elevation-2">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all elevation-1 hover:elevation-2">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all elevation-1 hover:elevation-2">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-light">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#sizes" className="text-primary-foreground/80 hover:text-secondary transition-colors">Container Sizes</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-secondary transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80 font-light">
              <li>National Park East Gate Road</li>
              <li>Off Mombasa Road, Nairobi</li>
              <li className="mt-4">+254716068548</li>
              <li>+254724770653</li>
              <li>+254721804377</li>
              <li>info@globalkenyacontainers.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60 font-light">
          <p>&copy; {new Date().getFullYear()} Global Kenya Containers. All rights reserved.</p>
          <p className="mt-2">
            Developed by <a href="https://wa.me/+254735644100" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-200 font-bold hover:underline">XP-XG</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
