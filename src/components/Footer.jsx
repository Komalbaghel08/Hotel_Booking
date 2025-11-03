import { Link } from 'react-router-dom';
import { Hotel, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Hotel className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">LuxStay</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your perfect getaway starts here. Book luxury hotels worldwide with the best prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-sm hover:text-blue-500 transition">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">
                  Hotel Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">
                  Flight Booking
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">
                  Car Rental
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-500 transition">
                  Tour Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Luxury Avenue, Istanbul, Turkey</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">+90 555 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-sm">info@luxstay.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LuxStay. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
