import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Find Your Perfect <span className="text-accent-300">Home Loan</span> Today
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Personalized mortgage solutions with competitive rates, designed to turn homeownership dreams into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/programs" className="btn btn-accent px-6 py-3 text-base">
                Explore Loan Programs
              </Link>
              <Link to="/calculator" className="btn btn-secondary text-primary-700 bg-white px-6 py-3 text-base">
                Calculate Your Payment
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold mb-5">Today's Featured Rates</h3>
            
            <div className="space-y-4">
              <div className="border-b border-white/20 pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">30-Year Fixed</span>
                  <span className="text-xl font-bold">6.75%</span>
                </div>
                <p className="text-xs text-gray-300">
                  APR 6.89% | Points 0 | 20% Down
                </p>
              </div>
              
              <div className="border-b border-white/20 pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">15-Year Fixed</span>
                  <span className="text-xl font-bold">6.125%</span>
                </div>
                <p className="text-xs text-gray-300">
                  APR 6.37% | Points 0 | 20% Down
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">5/1 ARM</span>
                  <span className="text-xl font-bold">5.875%</span>
                </div>
                <p className="text-xs text-gray-300">
                  APR 6.12% | Points 0 | 20% Down
                </p>
              </div>
            </div>
            
            <Link to="/programs" className="flex items-center justify-center mt-6 text-sm text-white/80 hover:text-white transition-colors">
              View All Programs and Rates
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;