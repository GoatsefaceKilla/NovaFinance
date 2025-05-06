import { BadgeCheck } from 'lucide-react';

interface ProgramDetailProps {
  title: string;
  description: string;
  benefits: string[];
  requirements: string[];
  rates?: {
    term: string;
    rate: string;
    apr: string;
  }[];
  disclaimer?: string;
  id: string;
}

const ProgramDetail = ({
  title,
  description,
  benefits,
  requirements,
  rates,
  disclaimer,
  id
}: ProgramDetailProps) => {
  return (
    <div id={id} className="border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="bg-primary-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-2xl font-semibold text-primary-900">{title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-medium mb-3 text-primary-800">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <BadgeCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-3 text-primary-800">Requirements</h4>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {rates && (
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-primary-800">Current Rates</h4>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">Term</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">Rate</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border border-gray-200">APR</th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((rate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">{rate.term}</td>
                      <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">{rate.rate}</td>
                      <td className="px-4 py-3 text-sm text-gray-800 border border-gray-200">{rate.apr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {disclaimer && (
              <p className="text-xs text-gray-500 mt-3">
                {disclaimer}
              </p>
            )}
          </div>
        )}
        
        <button className="btn btn-primary">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ProgramDetail;