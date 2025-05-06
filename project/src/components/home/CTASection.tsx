import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Whether you're buying your first home, refinancing, or looking for investment property financing, we're here to help you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/calculator" className="btn btn-accent px-6 py-3 text-base flex items-center justify-center">
              Calculate Your Payment
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <a href="tel:3237026300" className="btn btn-secondary text-primary-700 bg-white px-6 py-3 text-base">
              Call Us Today: (323) 702-6300
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;