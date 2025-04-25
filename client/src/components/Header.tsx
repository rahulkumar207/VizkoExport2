import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter 
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };
  
  // Social media links
  const socialMediaLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Logo (left section) */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-playfair font-bold text-3xl">VIZKO</span>
            </Link>
          </div>
          
          {/* Desktop navigation (center section) */}
          <div className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-10">
              <Link 
                href="/" 
                className={`${isActive('/') ? 'text-primary' : 'text-gray-800'} font-medium hover:text-primary transition duration-300`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`${isActive('/about') ? 'text-primary' : 'text-gray-800'} font-medium hover:text-primary transition duration-300`}
              >
                About
              </Link>
              <Link 
                href="/products" 
                className={`${isActive('/products') ? 'text-primary' : 'text-gray-800'} font-medium hover:text-primary transition duration-300`}
              >
                Products
              </Link>
              <Link 
                href="/contact" 
                className={`${isActive('/contact') ? 'text-primary' : 'text-gray-800'} font-medium hover:text-primary transition duration-300`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Social icons (right section) */}
          <div className="hidden md:flex items-center justify-end w-1/4 space-x-4">
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggleMenu} 
              className="text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link 
              href="/" 
              className={`block py-2 ${isActive('/') ? 'text-primary' : 'text-gray-800'} font-medium`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 ${isActive('/about') ? 'text-primary' : 'text-gray-800'} font-medium`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className={`block py-2 ${isActive('/products') ? 'text-primary' : 'text-gray-800'} font-medium`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 ${isActive('/contact') ? 'text-primary' : 'text-gray-800'} font-medium`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {/* Social media links in mobile menu */}
            <div className="flex mt-4 space-x-4 border-t pt-4">
              {socialMediaLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
