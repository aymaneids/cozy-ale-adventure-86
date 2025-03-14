
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Beer & Drinks", path: "/beer-menu" },
    { name: "Morning Menu", path: "/morning-menu" },
    { name: "About", path: "/about" },
    { name: "Specials", path: "/specials" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    closeMenu();
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="z-10" onClick={closeMenu}>
          <h1 className={`text-2xl md:text-3xl font-serif font-bold ${
            isScrolled ? "text-tavern-brown" : "text-white"
          }`}>
            J&M <span className="text-tavern-gold">Tavern</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`font-medium transition-colors duration-300 link-underline ${
                location.pathname === link.path 
                  ? "text-tavern-gold" 
                  : isScrolled 
                    ? "text-tavern-brown hover:text-tavern-gold" 
                    : "text-white hover:text-tavern-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className={`md:hidden z-10 transition-colors ${
            isScrolled ? "text-tavern-brown" : "text-white"
          } hover:text-tavern-gold`} 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col space-y-6 items-center">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-xl font-medium transition-colors duration-300 ${
                  location.pathname === link.path ? "text-tavern-gold" : "text-tavern-brown hover:text-tavern-gold"
                }`} 
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
