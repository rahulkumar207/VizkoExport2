import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-24 hero-pattern">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Premium Mattresses.<br/>Global Comfort.
            </h1>
            <p className="mt-6 text-gray-800 text-lg md:text-xl font-montserrat">
              Export-quality comfort, crafted in India.
            </p>
            <div className="mt-10">
              <Link 
                href="/products" 
                className="bg-primary text-white font-lato font-medium px-8 py-3 rounded hover:bg-opacity-90 transition duration-300 inline-flex items-center"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
              alt="Premium mattress in luxury bedroom" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
