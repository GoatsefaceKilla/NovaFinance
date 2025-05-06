import { Link } from 'react-router-dom';
import { BadgeCheck, Home, Award, Building, Briefcase, Activity } from 'lucide-react';

const programs = [
  {
    id: 'conventional',
    title: 'Conventional Loans',
    icon: <Home className="h-8 w-8 text-primary-600" />,
    description: 'Competitive rates with flexible down payment options for primary residences, second homes, and investment properties.',
    benefits: ['Low down payment options', 'No upfront mortgage insurance with 20% down', 'Flexible terms']
  },
  {
    id: 'fha',
    title: 'FHA Loans',
    icon: <BadgeCheck className="h-8 w-8 text-primary-600" />,
    description: 'Government-backed loans with more flexible credit requirements, perfect for first-time homebuyers.',
    benefits: ['Down payments as low as 3.5%', 'More flexible credit guidelines', 'Lower closing costs']
  },
  {
    id: 'va',
    title: 'VA Loans',
    icon: <Award className="h-8 w-8 text-primary-600" />,
    description: 'Specialized loans for veterans, active duty service members, and eligible surviving spouses.',
    benefits: ['No down payment required', 'No private mortgage insurance', 'Competitive interest rates']
  },
  {
    id: 'bank-statement',
    title: 'Bank Statement Loans',
    icon: <Briefcase className="h-8 w-8 text-primary-600" />,
    description: 'Alternative qualification options for self-employed borrowers using bank statements instead of tax returns.',
    benefits: ['12-24 month bank statement options', 'Great for business owners', 'Flexible income documentation']
  },
  {
    id: 'construction',
    title: 'Construction Loans',
    icon: <Building className="h-8 w-8 text-primary-600" />,
    description: 'Financing for home construction projects, from remodels to ground-up builds.',
    benefits: ['One-time close options', 'Interest-only payments during construction', 'Permanent financing solutions']
  },
  {
    id: 'dscr',
    title: 'DSCR Investment Loans',
    icon: <Activity className="h-8 w-8 text-primary-600" />,
    description: 'Investment property loans qualified based on property cash flow rather than personal income.',
    benefits: ['No personal income verification', 'Available for properties in multiple states', 'Great for real estate investors']
  }
];

const FeaturedPrograms = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Programs Tailored To Your Needs</h2>
          <p className="text-gray-600 text-lg">
            We offer a wide variety of mortgage programs to meet the unique needs of every borrower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="card p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
              
              <ul className="mb-5 space-y-2">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={`/programs#${program.id}`}
                className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center mt-auto"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/programs" className="btn btn-primary px-6 py-3">
            View All Loan Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;