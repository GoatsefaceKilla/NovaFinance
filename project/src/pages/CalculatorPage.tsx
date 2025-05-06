import { useEffect } from 'react';
import MortgageCalculator from '../components/calculator/MortgageCalculator';

const CalculatorPage = () => {
  useEffect(() => {
    document.title = 'Mortgage Calculator | Nova Finance Group';
  }, []);

  return (
    <div className="pt-16 pb-20">
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Mortgage Payment Calculator</h1>
            <p className="text-xl text-gray-200">
              Estimate your monthly mortgage payments and see how different loan options affect your budget.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <MortgageCalculator />
            
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">Understanding Your Mortgage Payment</h2>
              <p className="text-gray-700">
                Your monthly mortgage payment typically consists of four components, often referred to as PITI:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Principal & Interest</h3>
                  <p className="text-gray-700 text-sm">
                    The principal is the amount you borrowed, while interest is the cost of borrowing that money. The calculator above estimates these combined costs.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Property Taxes</h3>
                  <p className="text-gray-700 text-sm">
                    Property taxes vary by location and are typically collected by your lender and held in escrow until they're due.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Homeowners Insurance</h3>
                  <p className="text-gray-700 text-sm">
                    This insurance protects your home against damage. Like property taxes, these payments are often collected monthly and held in escrow.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-primary-700 mb-2">Mortgage Insurance</h3>
                  <p className="text-gray-700 text-sm">
                    If your down payment is less than 20% on a conventional loan, you'll typically need to pay private mortgage insurance (PMI). FHA loans require mortgage insurance premium (MIP).
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700">
                For a complete picture of your monthly housing costs, contact one of our loan officers who can provide a detailed breakdown specific to your situation.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8">
                <h3 className="text-xl font-semibold mb-4">Ready for the Next Step?</h3>
                <p className="text-gray-700 mb-4">
                  Our loan officers can help you understand all your mortgage options and find the best solution for your unique situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn btn-primary">
                    Get Pre-Approved
                  </button>
                  <a href="tel:3237026300" className="btn btn-secondary">
                    Call (323) 702-6300
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;