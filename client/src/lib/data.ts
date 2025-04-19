export interface PricingItem {
  length: number;
  breadth: number;
  prices: number[];
}

export interface ProductType {
  id: string;
  name: string;
  description: string;
  image: string;
  thicknesses: string[];
  pricing: PricingItem[];
}

// Define the new product interface for the enhanced product listing
export interface EnhancedProductType {
  id: string;
  title: string;
  description: string;
  length: number;
  breadth: number;
  height: number;
  price: number;
  additionalDescription: string;
  category: string;
  image: string;
}

// Images for each mattress type (random high-quality mattress images)
const mattressImages = {
  hybrid: [
    "https://images.unsplash.com/photo-1630513767948-0329398049dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1634646803754-000c2e548dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  ],
  innerspring: [
    "https://images.unsplash.com/photo-1634646803754-000c2e548dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  ],
  memoryfoam: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1630513767948-0329398049dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  ],
  orthopaedic: [
    "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1634646803754-000c2e548dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  ]
};

// Parse the product data from the JSON
export const enhancedProductData: EnhancedProductType[] = [
  // HYBRID MATTRESSES
  {
    id: "hybrid-72-36-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 36,
    height: 4,
    price: 7800,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[0]
  },
  {
    id: "hybrid-72-48-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 48,
    height: 4,
    price: 10400,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[1]
  },
  {
    id: "hybrid-72-60-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 60,
    height: 4,
    price: 13000,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[2]
  },
  {
    id: "hybrid-72-72-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 72,
    height: 4,
    price: 15600,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[0]
  },
  {
    id: "hybrid-78-36-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 78,
    breadth: 36,
    height: 4,
    price: 8450,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[1]
  },
  {
    id: "hybrid-78-48-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 78,
    breadth: 48,
    height: 4,
    price: 11267,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[2]
  },
  {
    id: "hybrid-78-60-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 78,
    breadth: 60,
    height: 4,
    price: 14083,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[0]
  },
  {
    id: "hybrid-78-72-4",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 78,
    breadth: 72,
    height: 4,
    price: 16900,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[1]
  },
  // 6 inch hybrid mattresses
  {
    id: "hybrid-72-36-6",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 36,
    height: 6,
    price: 7800,
    additionalDescription: "6 Inch : 4\" HR Foam, + 2\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[2]
  },
  {
    id: "hybrid-72-48-6",
    title: "HYBRID MATTRESS",
    description: "High Resillience Foam layer, Super Softy Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 48,
    height: 6,
    price: 10400,
    additionalDescription: "6 Inch : 4\" HR Foam, + 2\" Supersofty Foam",
    category: "hybrid",
    image: mattressImages.hybrid[0]
  },
  // INNER SPRING MATTRESSES
  {
    id: "innerspring-72-36-6",
    title: "INNER SPRING MATTRESS",
    description: "Premium Pocket Spring encased with 2\"HD foam on 4 side walls, 0.5\" High Density Felt both Sides, High Density Foam Layer and Pure Foam Quilting of on both sides, Premium Jacquard Fabric of High GSM",
    length: 72,
    breadth: 36,
    height: 6,
    price: 9360,
    additionalDescription: "6 Inch : 5\" Pocket Spring+Felt, 1\" HD Foam",
    category: "innerspring",
    image: mattressImages.innerspring[0]
  },
  {
    id: "innerspring-72-48-6",
    title: "INNER SPRING MATTRESS",
    description: "Premium Pocket Spring encased with 2\"HD foam on 4 side walls, 0.5\" High Density Felt both Sides, High Density Foam Layer and Pure Foam Quilting of on both sides, Premium Jacquard Fabric of High GSM",
    length: 72,
    breadth: 48,
    height: 6,
    price: 12480,
    additionalDescription: "6 Inch : 5\" Pocket Spring+Felt, 1\" HD Foam",
    category: "innerspring",
    image: mattressImages.innerspring[1]
  },
  // MEMORY FOAM MATTRESSES
  {
    id: "memoryfoam-72-36-4",
    title: "MEMORY FOAM MATTRESS",
    description: "High Resillience Foam layer, Memory Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 36,
    height: 4,
    price: 10200,
    additionalDescription: "4 Inch : 2\" HR Foam, + 2\" Memory Foam",
    category: "memoryfoam",
    image: mattressImages.memoryfoam[0]
  },
  {
    id: "memoryfoam-72-48-4",
    title: "MEMORY FOAM MATTRESS",
    description: "High Resillience Foam layer, Memory Foam Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 48,
    height: 4,
    price: 13600,
    additionalDescription: "4 Inch : 2\" HR Foam, + 2\" Memory Foam",
    category: "memoryfoam",
    image: mattressImages.memoryfoam[1]
  },
  // ORTHOPAEDIC MATTRESSES
  {
    id: "orthopaedic-72-36-4",
    title: "ORTHOPAEDIC MATTRESS",
    description: "High Resillience Foam layer, Pure Natural Latex Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 36,
    height: 4,
    price: 9600,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Natural Latex",
    category: "orthopaedic",
    image: mattressImages.orthopaedic[0]
  },
  {
    id: "orthopaedic-72-48-4",
    title: "ORTHOPAEDIC MATTRESS",
    description: "High Resillience Foam layer, Pure Natural Latex Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 48,
    height: 4,
    price: 12800,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Natural Latex",
    category: "orthopaedic",
    image: mattressImages.orthopaedic[1]
  }
];

// Load more products from the JSON data (this would be replaced with actual API call in a real app)
// This includes all the products from the provided JSON
export const allProducts: EnhancedProductType[] = [
  // Initial products above and all the others from the JSON data...
  ...enhancedProductData,
  // We would add all the products from the JSON here - simplified for demo
  {
    id: "orthopaedic-72-60-4",
    title: "ORTHOPAEDIC MATTRESS",
    description: "High Resillience Foam layer, Pure Natural Latex Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 60,
    height: 4,
    price: 16000,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Natural Latex",
    category: "orthopaedic",
    image: mattressImages.orthopaedic[2]
  },
  {
    id: "orthopaedic-72-72-4",
    title: "ORTHOPAEDIC MATTRESS",
    description: "High Resillience Foam layer, Pure Natural Latex Layer, Pure Foam Quilting on both sides, Jacquard Knitted Fabric of High GSM.",
    length: 72,
    breadth: 72,
    height: 4,
    price: 19200,
    additionalDescription: "4 Inch : 3\" HR Foam, + 1\" Natural Latex",
    category: "orthopaedic",
    image: mattressImages.orthopaedic[0]
  }
];

// Keeping the original data for compatibility with existing components
export const productData: Record<string, ProductType> = {
  hybrid: {
    id: "hybrid",
    name: "Hybrid",
    description: "Our premium Hybrid mattresses combine the supportive strength of pocket springs with the comfort of high-density memory foam. This perfect balance delivers exceptional pressure relief and responsive support, making it ideal for luxury hotels and discerning retailers.",
    image: "https://images.unsplash.com/photo-1630513767948-0329398049dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    thicknesses: ["4", "6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [8500, 12000, 15000]
      },
      {
        length: 75,
        breadth: 36,
        prices: [9000, 12500, 16000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [12000, 16000, 20000]
      }
    ]
  },
  innerspring: {
    id: "innerspring",
    name: "Inner Spring",
    description: "Our Inner Spring mattresses feature premium coil systems that provide responsive support and excellent durability. The interconnected spring design promotes airflow while delivering consistent comfort across the entire surface.",
    image: "https://images.unsplash.com/photo-1634646803754-000c2e548dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    thicknesses: ["6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [11000, 14000]
      },
      {
        length: 75,
        breadth: 36,
        prices: [11500, 15000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [15000, 19000]
      }
    ]
  },
  memoryfoam: {
    id: "memoryfoam",
    name: "Memory Foam",
    description: "Experience the ultimate in pressure-relieving comfort with our Memory Foam mattresses. The high-density foam contours perfectly to your body, reducing pressure points and providing extraordinary support throughout the night.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    thicknesses: ["4", "6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [9500, 13000, 16500]
      },
      {
        length: 75,
        breadth: 36,
        prices: [10000, 13500, 17500]
      },
      {
        length: 78,
        breadth: 60,
        prices: [13000, 17000, 22000]
      }
    ]
  },
  orthopaedic: {
    id: "orthopaedic",
    name: "Orthopaedic",
    description: "Our Orthopaedic mattresses are specifically designed to provide proper spinal alignment and therapeutic support. These mattresses feature zones of varied firmness to ensure proper ergonomic support for different parts of the body.",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    thicknesses: ["6", "8"],
    pricing: [
      {
        length: 72,
        breadth: 36,
        prices: [13000, 16500]
      },
      {
        length: 75,
        breadth: 36,
        prices: [13500, 17000]
      },
      {
        length: 78,
        breadth: 60,
        prices: [17500, 22000]
      }
    ]
  }
};
