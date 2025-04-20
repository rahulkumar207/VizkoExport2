import { useState } from "react";
import { EnhancedProductType } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, InfoIcon } from "lucide-react";

interface ProductCardProps {
  product: EnhancedProductType;
  onAddToCompare: (product: EnhancedProductType) => void;
  isInCompare: boolean;
  showCompareButton?: boolean;
}

// Function to extract the base name from the product title
const getShortProductName = (title: string): string => {
  // Get just the first part of the title (before any newlines)
  const baseName = title.split("\n\n")[0];
  
  // For display purposes, give it a friendly name instead of just category
  if (baseName.includes("HYBRID")) return "Hybrid Comfort";
  if (baseName.includes("INNER SPRING")) return "Innerspring Luxury";
  if (baseName.includes("MEMORY FOAM")) return "Memory Foam Elite";
  if (baseName.includes("ORTHOPAEDIC")) return "Orthopaedic Premium";
  
  return baseName;
};

// Function to create a short description based on product attributes
const createShortDescription = (product: EnhancedProductType): string => {
  const luxuryLevel = product.price > 20000 ? "Luxury" : product.price > 12000 ? "Premium" : "Classic";
  const supportLevel = product.category === "orthopaedic" ? "Firm Support" : 
                       product.category === "memoryfoam" ? "Adaptive Comfort" : 
                       product.category === "innerspring" ? "Responsive Feel" : "Balanced Support";
  
  return `${luxuryLevel} ${supportLevel} - Perfect for luxury hospitality and refined home comfort.`;
};

export default function ProductCard({ 
  product, 
  onAddToCompare, 
  isInCompare, 
  showCompareButton = true 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Get a nicer product name and description for display
  const displayName = getShortProductName(product.title);
  const shortDescription = createShortDescription(product);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={product.image} 
          alt={displayName}
          className={`w-full h-full object-cover object-center transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute top-2 left-2">
          <Badge className="bg-[#18346E] text-white text-xs font-medium px-2.5 py-0.5 rounded">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <Badge className="bg-yellow-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
            {product.height}" Thick
          </Badge>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {displayName}
        </h3>
        <p className="text-sm text-gray-700 mb-4 line-clamp-2 flex-grow">
          {shortDescription}
        </p>
        
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Size:</span> {product.length}" × {product.breadth}"
          </div>
          <div className="text-lg font-bold text-[#18346E]">
            ₹{product.price.toLocaleString()}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <Link href={`/products/${product.id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full text-[#18346E] border-[#18346E] hover:bg-[#18346E]/10"
            >
              <InfoIcon size={16} className="mr-1" />
              Details
            </Button>
          </Link>
          
          {showCompareButton && (
            <Button 
              variant={isInCompare ? "default" : "outline"}
              onClick={() => onAddToCompare(product)}
              className={`w-full ${
                isInCompare 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "text-[#18346E] border-[#18346E] hover:bg-[#18346E]/10"
              }`}
              disabled={isInCompare}
            >
              {isInCompare ? (
                <>
                  <CheckCircle size={16} className="mr-1" />
                  Added
                </>
              ) : (
                "Compare"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}