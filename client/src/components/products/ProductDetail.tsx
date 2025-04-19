import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductType } from "@/lib/data";

interface ProductDetailProps {
  product: ProductType;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={product.image} 
            alt={`${product.name} Mattress`} 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-8">
          <h2 className="font-playfair text-3xl font-bold text-primary mb-4">{product.name} Mattress</h2>
          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
          
          <div className="mb-6">
            <h3 className="font-playfair text-lg font-bold text-primary mb-3">Available Thicknesses</h3>
            <div className="flex space-x-4">
              {product.thicknesses.map((thickness) => (
                <span key={thickness} className="bg-accent px-4 py-2 rounded-md text-gray-700">{thickness}"</span>
              ))}
            </div>
          </div>
          
          <h3 className="font-playfair text-lg font-bold text-primary mb-3">Pricing Table</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Length (in)
                  </th>
                  <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Breadth (in)
                  </th>
                  {product.thicknesses.map((thickness) => (
                    <th key={thickness} className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {thickness}" Price (₹)
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.pricing.map((price, index) => (
                  <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-200">{price.length}</td>
                    <td className="px-4 py-3 border-b border-gray-200">{price.breadth}</td>
                    {price.prices.map((p, i) => (
                      <td key={i} className="px-4 py-3 border-b border-gray-200">{p.toLocaleString()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-1">1. Prices exclude 18% GST</p>
            <p className="mb-1">2. LUT exempt GST available</p>
            <p>3. Mattresses are roll-packed in rexine</p>
          </div>
          
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-primary text-white font-lato font-medium px-8 py-3 rounded hover:bg-opacity-90 transition duration-300 inline-flex items-center"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
