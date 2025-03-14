
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tavern-brown text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo and intro */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold">
              J&M <span className="text-tavern-gold">Tavern</span>
            </h2>
            <p className="text-white/80 max-w-xs">
              A home away from home for travelers and locals alike, offering fine beers and morning delights.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-tavern-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-tavern-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-tavern-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-tavern-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/beer-menu" className="text-white/80 hover:text-tavern-gold transition-colors">
                  Beer & Drinks
                </Link>
              </li>
              <li>
                <Link to="/morning-menu" className="text-white/80 hover:text-tavern-gold transition-colors">
                  Morning Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-tavern-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/specials" className="text-white/80 hover:text-tavern-gold transition-colors">
                  Specials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-tavern-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-tavern-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 W Chicago Ave, Chicago, IL 60654</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-tavern-gold mr-2 flex-shrink-0" />
                <span className="text-white/80">(312) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-tavern-gold mr-2 flex-shrink-0" />
                <span className="text-white/80">info@jmtavern.com</span>
              </li>
              <li className="pt-4">
                <div className="flex flex-col space-y-2">
                  <h4 className="font-medium">Hours:</h4>
                  <p className="text-white/80">Mon-Thu: 7am - 12am</p>
                  <p className="text-white/80">Fri-Sat: 7am - 2am</p>
                  <p className="text-white/80">Sun: 8am - 10pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} J&M Tavern. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-white/70 text-sm hover:text-white transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-white/70 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
