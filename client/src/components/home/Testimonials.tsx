import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card bg-gray-50 rounded-lg p-8 shadow-md relative">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 flex">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic relative z-10">
              "VIZKO has been our trusted mattress supplier for over 3 years. Their commitment to quality and exceptional customer service keeps us coming back."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-playfair font-bold text-primary">Maria Rodriguez</h4>
                <p className="text-gray-600 text-sm">Hotel Chain Owner, Spain</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card bg-gray-50 rounded-lg p-8 shadow-md relative">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 flex">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic relative z-10">
              "The custom sizing options from VIZKO have been invaluable for our unique market needs. Their export process is smooth and reliable."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-playfair font-bold text-primary">Ahmed Al-Farsi</h4>
                <p className="text-gray-600 text-sm">Furniture Distributor, UAE</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card bg-gray-50 rounded-lg p-8 shadow-md relative">
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 flex">
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current" />
                <Star className="h-5 w-5 fill-current stroke-current" strokeWidth={1} strokeDasharray="2" />
              </div>
            </div>
            <p className="text-gray-700 mb-6 italic relative z-10">
              "We've tried many suppliers, but VIZKO's attention to detail and quality control is unmatched. Their mattresses consistently meet our high standards."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-playfair font-bold text-primary">Sarah Thompson</h4>
                <p className="text-gray-600 text-sm">Resort Manager, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
