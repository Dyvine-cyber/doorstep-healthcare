import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CareConnect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting patients with qualified nurses for professional home healthcare services.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="h-4 w-4" />
              <span>HIPAA Compliant & Secure</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/for-patients" className="text-gray-400 hover:text-white transition-colors">For Patients</Link></li>
              <li><Link to="/for-nurses" className="text-gray-400 hover:text-white transition-colors">For Nurses</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/providers" className="text-gray-400 hover:text-white transition-colors">Find Nurses</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Wound Care</li>
              <li className="text-gray-400">Medication Management</li>
              <li className="text-gray-400">Physical Therapy</li>
              <li className="text-gray-400">Elderly Care</li>
              <li className="text-gray-400">Post-Operative Care</li>
              <li className="text-gray-400">Chronic Disease Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>1-800-CARE-NOW</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>support@careconnect.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="h-4 w-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CareConnect. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;