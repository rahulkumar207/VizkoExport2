import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Define carousel slide data
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Close-up mattress textures",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616627052149-3d083b5ccde5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Export-ready packaging",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "International shipping scenes",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Auto-advance timer
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // Handle navigation
  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    
    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating]);
  
  const goToPrevSlide = useCallback(() => {
    const newIndex = currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1;
    goToSlide(newIndex);
  }, [currentSlide, goToSlide]);
  
  const goToNextSlide = useCallback(() => {
    const newIndex = currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1;
    goToSlide(newIndex);
  }, [currentSlide, goToSlide]);
  
  return (
    <div className="w-full relative pt-16 md:pt-16 overflow-hidden">
      {/* Full-width carousel */}
      <div className="h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        
        {/* Text overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
              Engineering Comfort. Exporting Trust.
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
              150+ Designs | 5+ Years | Global Clients
            </p>
            <Link 
              href="/products" 
              className="bg-[#18346E] text-white font-medium px-8 py-4 rounded-md hover:bg-[#18346E]/90 transition duration-300 inline-flex items-center shadow-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={30} />
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={30} />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
