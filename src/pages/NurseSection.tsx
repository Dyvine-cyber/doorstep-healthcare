import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, Users, Award, ArrowRight, CheckCircle, Briefcase, Heart } from 'lucide-react';

const NurseSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Advance Your Nursing Career
                <span className="text-purple-200 block">With Flexibility</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Join our network of healthcare professionals and enjoy the freedom to choose your schedule, set your rates, and make a meaningful impact in patients' lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Join as a Nurse</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551528/pexels-photo-7551528.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional nurse" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join CareConnect?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of independent nursing practice with our support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Choose when you work and maintain work-life balance</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pay</h3>
              <p className="text-gray-600">Earn $45-85/hour based on your experience and specialization</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Patient Care</h3>
              <p className="text-gray-600">Build meaningful relationships with patients in their homes</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Growth</h3>
              <p className="text-gray-600">Expand your skills across various healthcare specialties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Qualification Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We maintain the highest standards to ensure patient safety and quality care.
              </p>
              
              <div className="space-y-4">
                {[
                  'Valid state nursing license (RN or LPN)',
                  'Minimum 2 years of clinical experience',
                  'Current malpractice insurance',
                  'Clean background check',
                  'BLS/CPR certification',
                  'Professional references',
                  'Smartphone with reliable internet',
                  'Transportation to patient locations'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5722082/pexels-photo-5722082.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional nursing credentials" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started in just a few steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Apply Online', description: 'Complete our secure application form with your professional information' },
              { step: '2', title: 'Document Verification', description: 'Upload your license, certifications, and insurance documentation' },
              { step: '3', title: 'Background Check', description: 'We conduct a thorough background screening for patient safety' },
              { step: '4', title: 'Start Earning', description: 'Create your profile, set your rates, and begin accepting patients' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Potential */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Excellent Earning Potential
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">LPN</h3>
              <p className="text-3xl font-bold text-green-200 mb-2">$45-60/hr</p>
              <p className="text-sm opacity-80">Licensed Practical Nurse</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">RN</h3>
              <p className="text-3xl font-bold text-green-200 mb-2">$60-75/hr</p>
              <p className="text-sm opacity-80">Registered Nurse</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Specialists</h3>
              <p className="text-3xl font-bold text-green-200 mb-2">$75-85/hr</p>
              <p className="text-sm opacity-80">Certified Specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Network?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Take the first step towards a more flexible and rewarding nursing career.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
            <Briefcase className="h-5 w-5" />
            <span>Apply Now</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NurseSection;