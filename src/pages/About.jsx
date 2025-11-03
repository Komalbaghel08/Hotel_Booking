import { Award, Users, Globe, Heart, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '10M+', label: 'Happy Customers' },
    { icon: <Globe className="h-8 w-8" />, value: '150+', label: 'Countries' },
    { icon: <Award className="h-8 w-8" />, value: '50K+', label: 'Hotels' },
    { icon: <Heart className="h-8 w-8" />, value: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Trust & Safety',
      description: 'We prioritize your security with industry-leading encryption and verified hotel partners.'
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: 'Best Prices',
      description: 'Our price guarantee ensures you always get the best deal on your hotel booking.'
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: 'Customer First',
      description: '24/7 support team ready to help you have the best travel experience possible.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/300?img=1',
      description: '15 years of experience in hospitality industry'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://i.pravatar.cc/300?img=2',
      description: 'Former tech lead at major travel platforms'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Customer Success',
      image: 'https://i.pravatar.cc/300?img=3',
      description: 'Passionate about creating amazing experiences'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LuxStay</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're on a mission to make hotel booking simple, transparent, and enjoyable for everyone.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <div className="text-blue-600 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020, LuxStay was born from a simple idea: hotel booking should be easy, 
                transparent, and accessible to everyone. We saw travelers struggling with confusing 
                pricing, hidden fees, and unreliable reviews.
              </p>
              <p>
                Today, we're proud to serve millions of customers worldwide, offering access to over 
                50,000 hotels in 150+ countries. Our platform combines cutting-edge technology with 
                human expertise to deliver the best booking experience possible.
              </p>
              <p>
                We believe that everyone deserves a great travel experience, and we're committed to 
                making that happen, one booking at a time.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">The people behind LuxStay</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Millions of Happy Travelers
          </h2>
          <p className="text-xl text-white mb-8">
            Start your journey with LuxStay today
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105">
            Start Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
