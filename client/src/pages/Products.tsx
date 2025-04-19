import { useState } from "react";
import { Helmet } from "react-helmet";
import ProductTabs from "@/components/products/ProductTabs";
import ProductDetail from "@/components/products/ProductDetail";
import { productData } from "@/lib/data";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState("hybrid");

  return (
    <>
      <Helmet>
        <title>VIZKO Products | Premium Export Mattresses</title>
        <meta name="description" content="Explore VIZKO's range of premium export mattresses including Hybrid, Inner Spring, Memory Foam, and Orthopaedic options." />
      </Helmet>
      <section className="pt-24 bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary">Our Products</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
              Explore our range of export-quality mattresses designed to meet diverse market needs worldwide.
            </p>
          </div>

          <ProductTabs activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
          <ProductDetail product={productData[activeProduct]} />
        </div>
      </section>
    </>
  );
}
