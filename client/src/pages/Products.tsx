import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { allProducts, EnhancedProductType } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter, { FilterState } from "@/components/products/ProductFilter";
import ProductComparison from "@/components/products/ProductComparison";
import { Button } from "@/components/ui/button";
import { 
  Grid3X3,
  Grid2X2,
  ArrowUpDown, 
  Search,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Products() {
  // State for the filtered products
  const [filteredProducts, setFilteredProducts] = useState<EnhancedProductType[]>(allProducts);
  const [compareProducts, setCompareProducts] = useState<EnhancedProductType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [gridView, setGridView] = useState<'compact' | 'regular'>('regular');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { toast } = useToast();

  // Apply filters to the product list
  const handleFilterChange = (filters: FilterState) => {
    const filtered = allProducts.filter(product => {
      // Category filter
      if (!filters.categories.includes(product.category)) {
        return false;
      }
      
      // Length filter
      if (product.length < filters.lengthRange[0] || product.length > filters.lengthRange[1]) {
        return false;
      }
      
      // Breadth filter
      if (product.breadth < filters.breadthRange[0] || product.breadth > filters.breadthRange[1]) {
        return false;
      }
      
      // Height filter
      if (product.height < filters.heightRange[0] || product.height > filters.heightRange[1]) {
        return false;
      }
      
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    
    const searchTerms = searchQuery.toLowerCase().trim().split(/\s+/);
    
    const searchResults = allProducts.filter(product => {
      const productText = `${product.title} ${product.description} ${product.category} ${product.additionalDescription}`.toLowerCase();
      return searchTerms.some(term => productText.includes(term));
    });
    
    setFilteredProducts(searchResults);
  };

  // Handle sorting
  useEffect(() => {
    let sortedProducts = [...filteredProducts];
    
    switch (sortOption) {
      case "price_low_high":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "size_small_large":
        sortedProducts.sort((a, b) => (a.length * a.breadth) - (b.length * b.breadth));
        break;
      case "size_large_small":
        sortedProducts.sort((a, b) => (b.length * b.breadth) - (a.length * a.breadth));
        break;
      case "thickness_low_high":
        sortedProducts.sort((a, b) => a.height - b.height);
        break;
      case "thickness_high_low":
        sortedProducts.sort((a, b) => b.height - a.height);
        break;
      default:
        // Default sorting by category and then by price
        sortedProducts.sort((a, b) => {
          if (a.category === b.category) {
            return a.price - b.price;
          }
          return a.category.localeCompare(b.category);
        });
    }
    
    setFilteredProducts(sortedProducts);
  }, [sortOption]);

  // Add product to comparison
  const handleAddToCompare = (product: EnhancedProductType) => {
    if (compareProducts.length >= 4) {
      toast({
        title: "Compare limit reached",
        description: "You can compare up to 4 products at a time. Please remove a product to add another.",
        variant: "destructive",
      });
      return;
    }
    
    if (compareProducts.some(p => p.id === product.id)) {
      return;
    }
    
    setCompareProducts([...compareProducts, product]);
    
    toast({
      title: "Product added for comparison",
      description: `Added ${product.title.split("\n\n")[0]} to comparison.`,
    });
  };

  // Remove product from comparison
  const handleRemoveFromCompare = (productId: string) => {
    setCompareProducts(compareProducts.filter(p => p.id !== productId));
  };
  
  // Clear all products from comparison
  const handleClearCompareList = () => {
    setCompareProducts([]);
  };

  // Toggle mobile filter
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <>
      <Helmet>
        <title>VIZKO Products | Premium Export Mattresses</title>
        <meta name="description" content="Explore VIZKO's range of premium export mattresses including Hybrid, Inner Spring, Memory Foam, and Orthopaedic options." />
      </Helmet>
      
      <section className="pt-24 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#18346E] mb-2">Our Luxury Mattresses</h1>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
              Explore our range of premium export-quality mattresses designed to meet international standards and diverse market needs worldwide.
            </p>
          </div>

          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-4">
            <Button 
              onClick={toggleMobileFilter}
              variant={isMobileFilterOpen ? "default" : "outline"} 
              className="w-full flex items-center justify-center"
            >
              <Filter className="mr-2 h-4 w-4" />
              {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>

          {/* Search and sort controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="relative flex-1">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 border-[#18346E]/30 focus-visible:ring-[#18346E]/20"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full px-3 text-[#18346E]"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <div className="flex gap-2">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-48 border-[#18346E]/30">
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4 text-[#18346E]" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price_low_high">Price: Low to High</SelectItem>
                  <SelectItem value="price_high_low">Price: High to Low</SelectItem>
                  <SelectItem value="size_small_large">Size: Small to Large</SelectItem>
                  <SelectItem value="size_large_small">Size: Large to Small</SelectItem>
                  <SelectItem value="thickness_low_high">Thickness: Low to High</SelectItem>
                  <SelectItem value="thickness_high_low">Thickness: High to Low</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border border-[#18346E]/30 rounded-md overflow-hidden">
                <Button
                  variant={gridView === 'regular' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setGridView('regular')}
                  className={`rounded-none ${gridView === 'regular' ? 'bg-[#18346E] text-white' : 'text-[#18346E]'}`}
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={gridView === 'compact' ? 'default' : 'ghost'}
                  size="icon"
                  onClick={() => setGridView('compact')}
                  className={`rounded-none ${gridView === 'compact' ? 'bg-[#18346E] text-white' : 'text-[#18346E]'}`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with filters - desktop visible, mobile toggled */}
            <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block lg:w-1/4`}>
              <ProductFilter products={allProducts} onFilterChange={handleFilterChange} />
            </div>
            
            {/* Product grid */}
            <div className="lg:w-3/4">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-500">
                    Try adjusting your filters or search criteria to find what you're looking for.
                  </p>
                </div>
              ) : (
                <div className={`grid ${
                  gridView === 'regular' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
                } gap-6`}>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCompare={handleAddToCompare}
                      isInCompare={compareProducts.some(p => p.id === product.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Comparison drawer */}
        <ProductComparison 
          compareProducts={compareProducts}
          onRemoveFromCompare={handleRemoveFromCompare}
          onClearAll={handleClearCompareList}
        />
      </section>
    </>
  );
}
