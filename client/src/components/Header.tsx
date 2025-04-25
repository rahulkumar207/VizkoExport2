import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

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
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-primary font-playfair font-bold text-3xl">VIZKO</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-10">
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
          
          {/* Mobile navigation button */}
          <div className="md:hidden">
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
          </div>
        )}
      </div>
    </header>
  );
}
