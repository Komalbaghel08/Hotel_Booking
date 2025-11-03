import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'info@luxstay.com',
      subtext: 'We\'ll respond within 24 hours'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+90 555 123 4567',
      subtext: 'Mon-Fri 9am to 6pm'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: '123 Luxury Avenue',
      subtext: 'Istanbul, Turkey'
    }
  ];

  const faqs = [
    {
      question: 'How can I cancel my booking?',
      answer: 'You can cancel your booking through your account dashboard. Cancellation policies vary by hotel.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! Our 24/7 customer support team is always ready to help you with any questions or concerns.'
    },
    {
      question: 'How do I modify my reservation?',
      answer: 'Log into your account and navigate to "My Bookings" to modify your reservation details.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-lg text-gray-900 font-semibold mb-1">{info.details}</p>
              <p className="text-sm text-gray-600">{info.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* FAQs & Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Business Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-blue-600 font-semibold">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">123 Luxury Avenue</p>
                  <p className="text-gray-600">Istanbul, Turkey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
