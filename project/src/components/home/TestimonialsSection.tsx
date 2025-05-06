import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Nova Finance Group made my first home buying experience incredibly smooth. They explained everything clearly and got me a rate better than I expected. I couldn't be happier with their service!",
    author: "Sarah Johnson",
    title: "First-time Homebuyer",
    rating: 5
  },
  {
    id: 2,
    content: "As a self-employed business owner, I was worried about qualifying for a mortgage. The team at Nova found the perfect bank statement loan program for my situation. I highly recommend their services.",
    author: "Michael Rodriguez",
    title: "Business Owner",
    rating: 5
  },
  {
    id: 3,
    content: "Working with Nova Finance Group on our investment property loan was a pleasure. Their DSCR program was exactly what we needed, and they closed the loan faster than expected.",
    author: "David & Jennifer Chang",
    title: "Real Estate Investors",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Hear from homeowners who've achieved their dreams with Nova Finance Group.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-current text-yellow-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-8">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="bg-primary-100 rounded-full h-12 w-12 flex items-center justify-center text-primary-700 font-bold text-xl">
                {testimonials[activeIndex].author.charAt(0)}
              </div>
              <div className="ml-4">
                <div className="font-semibold text-lg">{testimonials[activeIndex].author}</div>
                <div className="text-gray-500">{testimonials[activeIndex].title}</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-6 bg-primary-600' : 'w-2.5 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;