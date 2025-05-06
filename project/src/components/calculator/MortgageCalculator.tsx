import { useState, useEffect } from 'react';
import { DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  const calculateMortgage = () => {
    const principal = loanAmount * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const monthlyPaymentCalc = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayment(monthlyPaymentCalc * numberOfPayments);
      setTotalInterest(monthlyPaymentCalc * numberOfPayments - principal);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="bg-primary-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-2xl font-semibold text-primary-900">Mortgage Payment Calculator</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <div className="space-y-4">
              <div>
                <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Home Price
                </label>
                <div className="calculator-input">
                  <DollarSign className="icon" size={16} />
                  <input
                    type="number"
                    id="loan-amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="form-input"
                    min="50000"
                    max="10000000"
                  />
                </div>
                <input
                  type="range"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  min="50000"
                  max="1000000"
                  step="5000"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$50k</span>
                  <span>$1M</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-1">
                  Down Payment (%)
                </label>
                <div className="calculator-input">
                  <Percent className="icon" size={16} />
                  <input
                    type="number"
                    id="down-payment"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="form-input"
                    min="0"
                    max="100"
                  />
                </div>
                <input
                  type="range"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  min="0"
                  max="50"
                  step="1"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0%</span>
                  <span>50%</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                  Interest Rate (%)
                </label>
                <div className="calculator-input">
                  <TrendingUp className="icon" size={16} />
                  <input
                    type="number"
                    id="interest-rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="form-input"
                    min="0"
                    max="15"
                    step="0.125"
                  />
                </div>
                <input
                  type="range"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  min="1"
                  max="10"
                  step="0.125"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span>
                  <span>10%</span>
                </div>
              </div>
              
              <div>
                <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-1">
                  Loan Term (Years)
                </label>
                <div className="calculator-input">
                  <Calendar className="icon" size={16} />
                  <select
                    id="loan-term"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="form-select"
                  >
                    <option value="30">30 Years</option>
                    <option value="20">20 Years</option>
                    <option value="15">15 Years</option>
                    <option value="10">10 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <h4 className="text-lg font-medium text-gray-700 mb-1">Monthly Payment</h4>
              <div className="text-4xl font-bold text-primary-700">
                {formatCurrency(monthlyPayment)}
              </div>
              <p className="text-sm text-gray-500 mt-1">Principal & Interest</p>
            </div>
            
            <hr className="my-5 border-gray-200" />
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Down Payment:</span>
                <span className="font-medium">{formatCurrency(loanAmount * (downPayment / 100))}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium">{formatCurrency(loanAmount * (1 - downPayment / 100))}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Total Interest:</span>
                <span className="font-medium">{formatCurrency(totalInterest)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Total Payment:</span>
                <span className="font-medium">{formatCurrency(totalPayment)}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="btn btn-primary w-full">
                Get Pre-Approved
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                B.R.E. #01461258 NMLS #1777056 / #385211
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
          <h4 className="text-md font-medium text-blue-800 mb-2">Please Note:</h4>
          <p className="text-sm text-blue-700">
            This calculator provides an estimate only and does not include property taxes, homeowners insurance, or mortgage insurance (if applicable). Contact us for a detailed quote specific to your situation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;