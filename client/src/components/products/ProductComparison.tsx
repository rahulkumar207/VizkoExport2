import { EnhancedProductType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { X, MoveDown, MoveUp } from "lucide-react";
import { useState } from "react";

interface ProductComparisonProps {
  compareProducts: EnhancedProductType[];
  onRemoveFromCompare: (productId: string) => void;
  onClearAll: () => void;
}

export default function ProductComparison({ 
  compareProducts, 
  onRemoveFromCompare,
  onClearAll
}: ProductComparisonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (compareProducts.length === 0) {
    return null;
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 transition-all duration-300 z-50 ${
      isExpanded ? 'max-h-[80vh]' : 'max-h-28'
    }`}>
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <h3 className="font-semibold text-lg text-primary">
              Compare Products <span className="text-sm font-normal text-gray-500">({compareProducts.length}/4)</span>
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              className="text-gray-500 hover:text-gray-700"
            >
              Clear All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary"
            >
              {isExpanded ? (
                <>
                  <MoveDown className="w-4 h-4 mr-1" />
                  Close
                </>
              ) : (
                <>
                  <MoveUp className="w-4 h-4 mr-1" />
                  Expand
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-2 w-40">Feature</th>
                {compareProducts.map((product) => (
                  <th key={product.id} className="p-2 min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <div className="relative w-full">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-24 h-24 object-cover mx-auto rounded-md"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border border-gray-200"
                          onClick={() => onRemoveFromCompare(product.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <h4 className="text-sm font-medium mt-2 line-clamp-1">{product.title.split("\n\n")[0]}</h4>
                      <p className="text-primary font-bold">₹{product.price.toLocaleString()}</p>
                    </div>
                  </th>
                ))}
                {/* Empty cells for missing products */}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <th key={`empty-${i}`} className="p-2 min-w-[200px]">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Add product</span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${isExpanded ? 'block' : 'hidden'}`}>
              {/* Category */}
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-2 font-medium">Category</td>
                {compareProducts.map((product) => (
                  <td key={`cat-${product.id}`} className="p-2 text-center capitalize">
                    {product.category}
                  </td>
                ))}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <td key={`empty-cat-${i}`} className="p-2"></td>
                ))}
              </tr>
              
              {/* Dimensions */}
              <tr className="border-b border-gray-200">
                <td className="p-2 font-medium">Dimensions</td>
                {compareProducts.map((product) => (
                  <td key={`dim-${product.id}`} className="p-2 text-center">
                    {product.length}" × {product.breadth}" × {product.height}"
                  </td>
                ))}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <td key={`empty-dim-${i}`} className="p-2"></td>
                ))}
              </tr>
              
              {/* Description */}
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-2 font-medium">Description</td>
                {compareProducts.map((product) => (
                  <td key={`desc-${product.id}`} className="p-2 text-sm">
                    <p className="line-clamp-4 text-gray-700">{product.description}</p>
                  </td>
                ))}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <td key={`empty-desc-${i}`} className="p-2"></td>
                ))}
              </tr>
              
              {/* Layers */}
              <tr className="border-b border-gray-200">
                <td className="p-2 font-medium">Layers</td>
                {compareProducts.map((product) => (
                  <td key={`layer-${product.id}`} className="p-2 text-sm">
                    <p className="text-gray-700">{product.additionalDescription}</p>
                  </td>
                ))}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <td key={`empty-layer-${i}`} className="p-2"></td>
                ))}
              </tr>
              
              {/* Price */}
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-2 font-medium">Price</td>
                {compareProducts.map((product) => (
                  <td key={`price-${product.id}`} className="p-2 text-center">
                    <p className="text-lg font-bold text-primary">₹{product.price.toLocaleString()}</p>
                  </td>
                ))}
                {Array.from({ length: 4 - compareProducts.length }).map((_, i) => (
                  <td key={`empty-price-${i}`} className="p-2"></td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}