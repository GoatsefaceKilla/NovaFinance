import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Irina Chernova',
    title: 'Founder & CEO',
    bio: 'With over 20 years of experience in the mortgage industry, Irina has helped thousands of clients achieve their homeownership dreams through innovative financing solutions and exceptional service.',
    nmls: '385211',
    email: 'Irina@NovaFinanceGroup.com',
    phone: '(323) 702-6300'
  }
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 text-lg">
            Our experienced team is dedicated to providing exceptional service and finding the perfect mortgage solution for you.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-primary-100 flex items-center justify-center">
                <div className="bg-primary-200 rounded-full h-28 w-28 flex items-center justify-center text-primary-700 font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{member.title}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <p className="text-xs text-gray-500 mb-4">NMLS #{member.nmls}</p>
                
                <div className="space-y-2">
                  <a href={`mailto:${member.email}`} className="flex items-center text-sm text-primary-700 hover:text-primary-800 transition-colors">
                    <Mail size={16} className="mr-2" />
                    {member.email}
                  </a>
                  <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center text-sm text-primary-700 hover:text-primary-800 transition-colors">
                    <Phone size={16} className="mr-2" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;