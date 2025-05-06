import { CheckCircle2, MessageSquare, FileText, Home } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Apply Online',
    description: 'Complete our simple online application in minutes from anywhere, anytime.',
    icon: <FileText className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    title: 'Get Pre-Approved',
    description: 'Receive your personalized pre-approval letter to strengthen your home buying position.',
    icon: <CheckCircle2 className="h-10 w-10 text-white" />
  },
  {
    id: 3,
    title: 'Work With Your Loan Officer',
    description: 'Our experienced loan officers guide you through the process and answer all your questions.',
    icon: <MessageSquare className="h-10 w-10 text-white" />
  },
  {
    id: 4,
    title: 'Close Your Loan',
    description: 'We make the closing process smooth and efficient so you can move into your new home faster.',
    icon: <Home className="h-10 w-10 text-white" />
  }
];

const ProcessSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple & Streamlined Process
          </h2>
          <p className="text-gray-600 text-lg">
            Our mortgage process is designed to be straightforward and hassle-free from application to closing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-20 w-20 bg-primary-600 rounded-full flex items-center justify-center shadow-lg mb-5">
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full h-0.5 bg-gray-200 w-full transform -translate-x-4"></div>
                )}
                
                <div className="absolute top-0 right-0 -mr-2 -mt-2 bg-accent-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold text-lg shadow">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;