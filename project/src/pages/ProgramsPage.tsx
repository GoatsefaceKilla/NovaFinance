import { useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import ProgramDetail from '../components/programs/ProgramDetail';

const conventionalLoan = {
  id: 'conventional',
  title: 'Conventional Loans',
  description: 'Conventional loans are mortgage loans that are not insured or guaranteed by a government agency. These loans adhere to the guidelines set by Fannie Mae and Freddie Mac and are ideal for borrowers with good credit and stable income.',
  benefits: [
    'Competitive interest rates',
    'Low down payment options starting at 3%',
    'No upfront mortgage insurance with 20% down',
    'Flexible terms (15, 20, 30 years)',
    'Available for primary residences, second homes, and investment properties'
  ],
  requirements: [
    'Minimum credit score of 620 (higher scores qualify for better rates)',
    'Debt-to-income ratio typically below 43%',
    'Down payment of at least 3% (20% to avoid PMI)',
    'Stable income and employment history',
    'Maximum loan amounts subject to conforming loan limits'
  ],
  rates: [
    { term: '30-Year Fixed', rate: '6.75%', apr: '6.89%' },
    { term: '20-Year Fixed', rate: '6.50%', apr: '6.63%' },
    { term: '15-Year Fixed', rate: '6.125%', apr: '6.27%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $400,000 with 20% down payment and a credit score of 740+. Rates are subject to change without notice. Annual Percentage Rate (APR) calculations are based on rates, points, loan amount, and loan term, and include finance charges. Actual APR may vary based on these and other factors. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const fhaLoan = {
  id: 'fha',
  title: 'FHA Loans',
  description: 'FHA loans are mortgage loans insured by the Federal Housing Administration. These government-backed loans are designed to help make homeownership more accessible, especially for first-time homebuyers and those with less-than-perfect credit.',
  benefits: [
    'Down payments as low as 3.5%',
    'More flexible credit requirements',
    'Lower closing costs',
    'Available for 1-4 unit properties',
    'Competitive interest rates'
  ],
  requirements: [
    'Minimum credit score of 580 for 3.5% down payment (500-579 requires 10% down)',
    'Debt-to-income ratio typically below 43% (exceptions possible)',
    'Property must meet FHA standards and be your primary residence',
    'Mortgage insurance premium required',
    'Loan limits vary by county'
  ],
  rates: [
    { term: '30-Year Fixed', rate: '6.50%', apr: '7.21%' },
    { term: '15-Year Fixed', rate: '5.875%', apr: '6.54%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $400,000 with 3.5% down payment and a credit score of 640+. FHA loans require mortgage insurance premium which is included in the APR calculation. Rates are subject to change without notice. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const vaLoan = {
  id: 'va',
  title: 'VA Loans',
  description: 'VA loans are mortgage loans guaranteed by the U.S. Department of Veterans Affairs. These loans are available to veterans, active duty service members, and eligible surviving spouses, offering significant benefits not available with other loan programs.',
  benefits: [
    'No down payment required in most cases',
    'No private mortgage insurance',
    'Competitive interest rates',
    'Limited closing costs',
    'No prepayment penalties'
  ],
  requirements: [
    'VA Certificate of Eligibility (COE)',
    'Minimum credit score typically 620 (lender specific)',
    'Property must be your primary residence',
    'VA funding fee required (unless exempt)',
    'Must meet VA and lender income requirements'
  ],
  rates: [
    { term: '30-Year Fixed', rate: '6.25%', apr: '6.42%' },
    { term: '15-Year Fixed', rate: '5.75%', apr: '5.93%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $400,000 with 0% down payment and a credit score of 640+. VA loans require a funding fee which may be included in the loan amount. Rates are subject to change without notice. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const bankStatementLoan = {
  id: 'bank-statement',
  title: 'Bank Statement Loans',
  description: 'Bank Statement loans are designed for self-employed borrowers and business owners who may not qualify for traditional mortgage loans due to complex tax situations or variable income. These loans use bank statements rather than tax returns to verify income.',
  benefits: [
    '12 or 24 months of bank statements for income verification',
    'No tax return required for income qualification',
    'Ideal for self-employed borrowers',
    'Flexible underwriting guidelines',
    'Available for primary residences, second homes, and investment properties'
  ],
  requirements: [
    'Minimum credit score of 680',
    'Self-employed for at least 2 years',
    'Down payment typically 10-20% (program dependent)',
    'Must have personal or business bank accounts showing consistent income',
    'Cash reserves required'
  ],
  rates: [
    { term: '30-Year Fixed', rate: '7.25%', apr: '7.41%' },
    { term: '5/1 ARM', rate: '6.875%', apr: '7.12%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $500,000 with 20% down payment and a credit score of 720+. Rates are subject to change without notice. Annual Percentage Rate (APR) calculations are based on rates, points, loan amount, and loan term. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const dscrLoan = {
  id: 'dscr',
  title: 'DSCR Investment Loans',
  description: 'DSCR (Debt Service Coverage Ratio) loans are designed specifically for real estate investors. These loans qualify properties based on the income they generate rather than the borrower\'s personal income, making them ideal for building a portfolio of investment properties.',
  benefits: [
    'Qualify based on property income, not personal income',
    'No personal tax returns or employment verification required',
    'Perfect for scaling your real estate portfolio',
    'Available for single-family, multi-family, and commercial properties',
    'Options for foreign nationals'
  ],
  requirements: [
    'Minimum credit score of 660',
    'Minimum DSCR of 1.0 (rental income must cover mortgage payment)',
    'Down payment typically 20-25%',
    'Cash reserves required',
    'Available in select states'
  ],
  rates: [
    { term: '30-Year Fixed', rate: '7.75%', apr: '7.92%' },
    { term: '5/1 ARM', rate: '7.375%', apr: '7.54%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $400,000 with 25% down payment and a credit score of 700+. DSCR loan programs are available in select states. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const constructionLoan = {
  id: 'construction',
  title: 'Construction Loans',
  description: 'Construction loans provide financing for building a new home or major renovation projects. These specialized loans offer unique features to accommodate the construction process, with options for both ground-up construction and significant remodels.',
  benefits: [
    'One-time close or two-time close options available',
    'Interest-only payments during construction phase',
    'Converts to permanent financing upon completion',
    'Funds released in stages as construction progresses',
    'Available for primary residences, second homes, and investment properties'
  ],
  requirements: [
    'Minimum credit score of 680',
    'Down payment typically 20-25%',
    'Detailed construction plans and budget required',
    'Licensed builder approval (for builder-driven projects)',
    'Appraisal based on completed value'
  ],
  rates: [
    { term: 'Construction-to-Permanent', rate: '7.50%', apr: '7.68%' },
    { term: 'Construction-Only', rate: '7.25%', apr: '7.42%' }
  ],
  disclaimer: 'Rates shown are based on a loan amount of $500,000 with 20% down payment and a credit score of 720+. Construction loan rates are typically higher during the construction phase. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const privateLoan = {
  id: 'private-money',
  title: 'Private Money Loans',
  description: 'Private money loans (also known as hard money loans) are short-term financing solutions secured by real estate. These loans are funded by private investors or companies rather than traditional mortgage lenders, offering greater flexibility for unique situations.',
  benefits: [
    'Fast approval and funding (often within days)',
    'Less stringent qualification requirements',
    'Flexible terms and loan structures',
    'Ideal for fix-and-flip projects or bridge financing',
    'Solutions for properties that don\'t qualify for traditional financing'
  ],
  requirements: [
    'Substantial equity position in the property (typically 30-40%)',
    'Viable exit strategy (refinance or sale)',
    'Property serves as collateral',
    'Higher interest rates than conventional financing',
    'Shorter term lengths (typically 6-36 months)'
  ],
  rates: [
    { term: '12-Month Term', rate: '9.99%', apr: '10.25%' },
    { term: '24-Month Term', rate: '10.25%', apr: '10.52%' }
  ],
  disclaimer: 'Rates shown are for illustrative purposes and may vary based on property type, loan-to-value ratio, borrower experience, and other factors. Private money loans are typically short-term in nature and designed to be replaced with permanent financing. B.R.E. #01461258 NMLS #1777056 / #385211'
};

const ProgramsPage = () => {
  useEffect(() => {
    document.title = 'Loan Programs | Nova Finance Group';
  }, []);

  return (
    <div className="pt-16 pb-20">
      <section className="bg-primary-800 text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Mortgage Programs Tailored To Your Needs</h1>
            <p className="text-xl text-gray-200 mb-8">
              We offer a comprehensive range of mortgage solutions to fit every unique financial situation.
            </p>
            <div className="flex justify-center">
              <button className="text-white flex items-center gap-2 bg-primary-600 hover:bg-primary-700 transition-colors rounded-full py-3 px-6 mx-auto" onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Programs <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Mortgage Solutions</h2>
            <p className="text-gray-600">
              From conventional loans to specialized financing options, we have programs designed for every homebuyer and investor.
            </p>
          </div>

          <ProgramDetail {...conventionalLoan} />
          <ProgramDetail {...fhaLoan} />
          <ProgramDetail {...vaLoan} />
          <ProgramDetail {...bankStatementLoan} />
          <ProgramDetail {...dscrLoan} />
          <ProgramDetail {...constructionLoan} />
          <ProgramDetail {...privateLoan} />
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;