import { useEffect } from 'react';
import TeamSection from '../components/about/TeamSection';
import { Award, CheckCircle, Star, Building, Users, Calendar } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Nova Finance Group';
  }, []);

  return (
    <div className="pt-16 pb-20">
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Nova Finance Group</h1>
            <p className="text-xl text-gray-200">
              Your trusted partner in mortgage financing since 2005.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-800">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At Nova Finance Group, we believe that finding the right mortgage should be accessible, transparent, and tailored to your unique financial situation. Our mission is to simplify the mortgage process and provide personalized solutions that help our clients achieve their homeownership and investment goals.
              </p>
              <p className="text-gray-700 mb-6">
                With decades of combined experience, our team of mortgage professionals is dedicated to providing exceptional service and expert guidance every step of the way. We take the time to understand your specific needs and work diligently to find the best mortgage solution for you.
              </p>
              <div className="flex items-center text-primary-700">
                <Award className="mr-2" size={20} />
                <span className="font-medium">B.R.E. #01461258 NMLS #1777056</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Nova Finance Group Team"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">500+ 5-star reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Nova Finance Group</h2>
            <p className="text-gray-600 text-lg">
              We combine industry expertise with personalized service to provide an exceptional mortgage experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">
                We take the time to understand your unique financial situation and goals to provide tailored mortgage solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">20+ Years Experience</h3>
              <p className="text-gray-600">
                Our team brings decades of industry experience to help navigate complex mortgage scenarios with confidence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Diverse Loan Programs</h3>
              <p className="text-gray-600">
                We offer a comprehensive range of mortgage programs to meet the needs of homebuyers and investors alike.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                Our commitment to customer satisfaction has earned us hundreds of 5-star reviews from happy clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Competitive Rates</h3>
              <p className="text-gray-600">
                We work with multiple lenders to ensure you receive the most competitive rates and terms available.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Licensed & Trusted</h3>
              <p className="text-gray-600">
                As a licensed mortgage broker (B.R.E. #01461258, NMLS #1777056), we adhere to the highest professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Contact us today for a no-obligation consultation with one of our expert loan officers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary px-6 py-3">
                Apply Now
              </button>
              <a href="tel:3237026300" className="btn btn-secondary px-6 py-3">
                Call (323) 702-6300
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;