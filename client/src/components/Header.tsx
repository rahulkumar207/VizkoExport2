import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

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

  return (
    <header className="bg-[#18346E] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white font-sans">
                <span className="font-bold text-2xl">Vizko</span>
                <span className="font-normal text-xl ml-1">Exports</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`${isActive('/') 
                ? 'text-white border-b-2 border-white' 
                : 'text-white'} font-medium hover:border-b-2 hover:border-white transition-all duration-300`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') 
                ? 'text-white border-b-2 border-white' 
                : 'text-white'} font-medium hover:border-b-2 hover:border-white transition-all duration-300`}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className={`${isActive('/products') 
                ? 'text-white border-b-2 border-white' 
                : 'text-white'} font-medium hover:border-b-2 hover:border-white transition-all duration-300`}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') 
                ? 'text-white border-b-2 border-white' 
                : 'text-white'} font-medium hover:border-b-2 hover:border-white transition-all duration-300`}
            >
              Contact
            </Link>
          </div>
          
          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
          
          {/* Mobile navigation button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
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
              className={`block py-2 ${isActive('/') ? 'text-white font-bold' : 'text-white'} font-medium`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`block py-2 ${isActive('/about') ? 'text-white font-bold' : 'text-white'} font-medium`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="/products" 
              className={`block py-2 ${isActive('/products') ? 'text-white font-bold' : 'text-white'} font-medium`}
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link 
              href="/contact" 
              className={`block py-2 ${isActive('/contact') ? 'text-white font-bold' : 'text-white'} font-medium`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            
            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-4 pt-3">
              <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
