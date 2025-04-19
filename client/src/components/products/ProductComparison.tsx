import { EnhancedProductType } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { X, MoveDown, MoveUp, FileDown, Share2 } from "lucide-react";
import { useState, useRef } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";
import { useToast } from "@/hooks/use-toast";

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
  const [isExporting, setIsExporting] = useState(false);
  const tableRef = useRef<HTMLTableElement>(null);
  const { toast } = useToast();

  if (compareProducts.length === 0) {
    return null;
  }

  // Function to generate PDF from the comparison table
  const generatePDF = async () => {
    if (compareProducts.length === 0) {
      toast({
        title: "No products to export",
        description: "Please add products to compare before exporting.",
        variant: "destructive",
      });
      return;
    }

    setIsExporting(true);
    
    try {
      // Force expanded view for capture
      setIsExpanded(true);
      
      // Create a new PDF document
      const doc = new jsPDF('p', 'mm', 'a4');
      
      // Add title
      doc.setFontSize(18);
      doc.setTextColor(0, 35, 102); // Primary color in RGB
      doc.text("VIZKO Mattress Comparison", 14, 15);
      
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Premium Export Mattresses - Product Comparison", 14, 22);
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      
      // Add company logo area
      doc.setFillColor(245, 245, 220); // Beige color
      doc.rect(14, 25, 180, 10, 'F');
      doc.setTextColor(0, 35, 102);
      doc.setFontSize(14);
      doc.text("VIZKO GLOBAL EXPORTS", 105, 31, { align: 'center' });
      
      // Prepare comparison data for the table
      const tableData = [];
      
      // Add header with product info
      const header = ['Feature'];
      compareProducts.forEach(product => {
        header.push(product.title.split("\n\n")[0]);
      });
      
      // Create rows for different features
      const categoryRow = ['Category'];
      const dimensionsRow = ['Dimensions'];
      const descriptionRow = ['Description'];
      const layersRow = ['Layers'];
      const priceRow = ['Price'];
      
      compareProducts.forEach(product => {
        categoryRow.push(product.category.charAt(0).toUpperCase() + product.category.slice(1));
        dimensionsRow.push(`${product.length}" × ${product.breadth}" × ${product.height}"`);
        descriptionRow.push(product.description);
        layersRow.push(product.additionalDescription);
        priceRow.push(`₹${product.price.toLocaleString()}`);
      });
      
      tableData.push(categoryRow, dimensionsRow, descriptionRow, layersRow, priceRow);
      
      // Add the table to the PDF
      autoTable(doc, {
        head: [header],
        body: tableData,
        startY: 40,
        theme: 'grid',
        styles: {
          fontSize: 10,
          cellPadding: 3,
        },
        headStyles: {
          fillColor: [0, 35, 102],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245],
        },
        columnStyles: {
          0: {
            fontStyle: 'bold',
            cellWidth: 30,
          },
        },
      });
      
      // Add footer
      const pageCount = doc.getNumberOfPages();
      const now = new Date();
      const dateStr = now.toLocaleDateString();
      
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text(
          `Generated on ${dateStr} - VIZKO GLOBAL EXPORTS - Premium Export Mattresses`,
          105,
          doc.internal.pageSize.height - 10,
          { align: 'center' }
        );
        doc.text(`Page ${i} of ${pageCount}`, 105, doc.internal.pageSize.height - 5, { align: 'center' });
      }
      
      // Save the PDF
      const pdfName = "VIZKO-Mattress-Comparison.pdf";
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      
      // Download PDF
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = pdfName;
      link.click();
      
      toast({
        title: "PDF exported successfully",
        description: "Your comparison has been exported to PDF",
      });
      
      return {
        pdfBlob,
        pdfName
      };
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error exporting PDF",
        description: "There was a problem generating the PDF file.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  // Function to share PDF via WhatsApp
  const shareOnWhatsApp = async () => {
    if (compareProducts.length === 0) {
      toast({
        title: "No products to share",
        description: "Please add products to compare before sharing.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      // Generate PDF first
      setIsExporting(true);
      const pdfResult = await generatePDF();
      
      if (!pdfResult) return;
      
      // Create message text
      const productTitles = compareProducts.map(p => p.title.split("\n\n")[0]).join(", ");
      const message = encodeURIComponent(
        `Check out this mattress comparison from VIZKO Global Exports! Products compared: ${productTitles}`
      );
      
      // Open WhatsApp
      const whatsappUrl = `https://wa.me/?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "PDF ready to share",
        description: "PDF has been generated for sharing on WhatsApp",
      });
      
    } catch (error) {
      console.error("Error sharing on WhatsApp:", error);
      toast({
        title: "Error sharing",
        description: "There was a problem sharing the comparison.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

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
            {/* Export to PDF button */}
            <Button
              variant="outline"
              size="sm"
              onClick={generatePDF}
              disabled={isExporting || compareProducts.length === 0}
              className="text-primary border-primary hover:bg-primary/10"
            >
              <FileDown className="w-4 h-4 mr-1" />
              Export PDF
            </Button>
            
            {/* Share on WhatsApp button */}
            <Button
              variant="outline"
              size="sm"
              onClick={shareOnWhatsApp}
              disabled={isExporting || compareProducts.length === 0}
              className="text-green-600 border-green-600 hover:bg-green-50"
            >
              <Share2 className="w-4 h-4 mr-1" />
              Share on WhatsApp
            </Button>
            
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
          <table ref={tableRef} className="w-full border-collapse">
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