import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { EnhancedProductType } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

interface ProductFilterProps {
  products: EnhancedProductType[];
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  categories: string[];
  lengthRange: [number, number];
  breadthRange: [number, number];
  heightRange: [number, number];
  priceRange: [number, number];
}

// Helper function to get nice category display names
const getCategoryDisplayName = (category: string): string => {
  switch(category) {
    case 'hybrid': return 'Hybrid Mattress';
    case 'innerspring': return 'Innerspring Mattress';
    case 'memoryfoam': return 'Memory Foam';
    case 'orthopaedic': return 'Orthopaedic Mattress';
    default: return category.charAt(0).toUpperCase() + category.slice(1);
  }
};

export default function ProductFilter({ products, onFilterChange }: ProductFilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Calculate min and max values from the product data
  const allLengths = products.map(p => p.length);
  const minLength = Math.min(...allLengths);
  const maxLength = Math.max(...allLengths);
  
  const allBreadths = products.map(p => p.breadth);
  const minBreadth = Math.min(...allBreadths);
  const maxBreadth = Math.max(...allBreadths);
  
  const allHeights = products.map(p => p.height);
  const minHeight = Math.min(...allHeights);
  const maxHeight = Math.max(...allHeights);
  
  const allPrices = products.map(p => p.price);
  const minPrice = Math.min(...allPrices);
  const maxPrice = Math.max(...allPrices);
  
  // Get unique categories
  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
  
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    categories: uniqueCategories,
    lengthRange: [minLength, maxLength],
    breadthRange: [minBreadth, maxBreadth],
    heightRange: [minHeight, maxHeight],
    priceRange: [minPrice, maxPrice],
  });
  
  // Category filter controls
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setFilters({
        ...filters,
        categories: [...filters.categories, category],
      });
    } else {
      setFilters({
        ...filters,
        categories: filters.categories.filter(c => c !== category),
      });
    }
  };
  
  // Reset filters
  const handleResetFilters = () => {
    setFilters({
      categories: uniqueCategories,
      lengthRange: [minLength, maxLength],
      breadthRange: [minBreadth, maxBreadth],
      heightRange: [minHeight, maxHeight],
      priceRange: [minPrice, maxPrice],
    });
  };
  
  // Update parent component when filters change
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);
  
  return (
    <div className="mb-8">
      {/* Mobile filter button - handled in Products.tsx */}
      <div className={`bg-white p-5 rounded-lg border border-gray-200 shadow-sm`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-[#18346E]">Refine Selection</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleResetFilters}
            className="text-xs text-[#18346E] hover:text-[#18346E]/80 hover:bg-[#18346E]/5 flex items-center"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset All
          </Button>
        </div>
        
        {/* Categories filter */}
        <div className="mb-6">
          <h4 className="font-medium text-sm text-gray-700 mb-3">Mattress Type</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {uniqueCategories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={`category-${category}`}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  className="text-[#18346E] border-gray-300 focus:ring-[#18346E]/20"
                />
                <Label htmlFor={`category-${category}`} className="text-sm font-medium text-gray-700">
                  {getCategoryDisplayName(category)}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-5" />
        
        {/* Length slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-medium text-gray-700">Length (inches)</Label>
            <div className="text-xs bg-gray-100 rounded px-2 py-1">
              {filters.lengthRange[0]} - {filters.lengthRange[1]}"
            </div>
          </div>
          <Slider 
            defaultValue={[minLength, maxLength]} 
            min={minLength} 
            max={maxLength}
            step={1}
            value={[filters.lengthRange[0], filters.lengthRange[1]]}
            onValueChange={(value) => setFilters({...filters, lengthRange: [value[0], value[1]]})}
            className="my-4"
          />
          <div className="flex gap-2">
            <div className="w-1/2">
              <Input 
                type="number" 
                min={minLength} 
                max={filters.lengthRange[1]} 
                value={filters.lengthRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minLength && value <= filters.lengthRange[1]) {
                    setFilters({...filters, lengthRange: [value, filters.lengthRange[1]]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
            <div className="w-1/2">
              <Input 
                type="number" 
                min={filters.lengthRange[0]} 
                max={maxLength} 
                value={filters.lengthRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= filters.lengthRange[0] && value <= maxLength) {
                    setFilters({...filters, lengthRange: [filters.lengthRange[0], value]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
          </div>
        </div>
        
        {/* Breadth slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-medium text-gray-700">Breadth (inches)</Label>
            <div className="text-xs bg-gray-100 rounded px-2 py-1">
              {filters.breadthRange[0]} - {filters.breadthRange[1]}"
            </div>
          </div>
          <Slider 
            defaultValue={[minBreadth, maxBreadth]} 
            min={minBreadth} 
            max={maxBreadth}
            step={1}
            value={[filters.breadthRange[0], filters.breadthRange[1]]}
            onValueChange={(value) => setFilters({...filters, breadthRange: [value[0], value[1]]})}
            className="my-4"
          />
          <div className="flex gap-2">
            <div className="w-1/2">
              <Input 
                type="number" 
                min={minBreadth} 
                max={filters.breadthRange[1]} 
                value={filters.breadthRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minBreadth && value <= filters.breadthRange[1]) {
                    setFilters({...filters, breadthRange: [value, filters.breadthRange[1]]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
            <div className="w-1/2">
              <Input 
                type="number" 
                min={filters.breadthRange[0]} 
                max={maxBreadth} 
                value={filters.breadthRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= filters.breadthRange[0] && value <= maxBreadth) {
                    setFilters({...filters, breadthRange: [filters.breadthRange[0], value]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
          </div>
        </div>
        
        {/* Height/Thickness slider */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-medium text-gray-700">Thickness (inches)</Label>
            <div className="text-xs bg-gray-100 rounded px-2 py-1">
              {filters.heightRange[0]} - {filters.heightRange[1]}"
            </div>
          </div>
          <Slider 
            defaultValue={[minHeight, maxHeight]} 
            min={minHeight} 
            max={maxHeight}
            step={1}
            value={[filters.heightRange[0], filters.heightRange[1]]}
            onValueChange={(value) => setFilters({...filters, heightRange: [value[0], value[1]]})}
            className="my-4"
          />
          <div className="flex gap-2">
            <div className="w-1/2">
              <Input 
                type="number" 
                min={minHeight} 
                max={filters.heightRange[1]} 
                value={filters.heightRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minHeight && value <= filters.heightRange[1]) {
                    setFilters({...filters, heightRange: [value, filters.heightRange[1]]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
            <div className="w-1/2">
              <Input 
                type="number" 
                min={filters.heightRange[0]} 
                max={maxHeight} 
                value={filters.heightRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= filters.heightRange[0] && value <= maxHeight) {
                    setFilters({...filters, heightRange: [filters.heightRange[0], value]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
          </div>
        </div>
        
        {/* Price slider */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm font-medium text-gray-700">Price Range (₹)</Label>
            <div className="text-xs bg-gray-100 rounded px-2 py-1">
              ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
            </div>
          </div>
          <Slider 
            defaultValue={[minPrice, maxPrice]} 
            min={minPrice} 
            max={maxPrice}
            step={100}
            value={[filters.priceRange[0], filters.priceRange[1]]}
            onValueChange={(value) => setFilters({...filters, priceRange: [value[0], value[1]]})}
            className="my-4"
          />
          <div className="flex gap-2">
            <div className="w-1/2">
              <Input 
                type="number" 
                min={minPrice} 
                max={filters.priceRange[1]} 
                value={filters.priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= minPrice && value <= filters.priceRange[1]) {
                    setFilters({...filters, priceRange: [value, filters.priceRange[1]]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
            <div className="w-1/2">
              <Input 
                type="number" 
                min={filters.priceRange[0]} 
                max={maxPrice} 
                value={filters.priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= filters.priceRange[0] && value <= maxPrice) {
                    setFilters({...filters, priceRange: [filters.priceRange[0], value]});
                  }
                }}
                className="h-8 text-xs border-[#18346E]/20 focus-visible:ring-[#18346E]/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}