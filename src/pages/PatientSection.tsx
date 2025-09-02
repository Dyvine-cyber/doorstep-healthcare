import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Shield, Heart, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';

const PatientSection = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Quality Healthcare
                <span className="text-green-200 block">In Your Home</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Access professional nursing care without leaving your home. Our licensed nurses provide personalized, compassionate care tailored to your specific needs.
              </p>
              <Link 
                to="/providers" 
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span>Find Your Nurse</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5722080/pexels-photo-5722080.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nurse providing home healthcare" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting professional healthcare at home is simple and secure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Search className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Search & Choose</h3>
              <p className="text-gray-600">
                Browse our directory of qualified nurses, filter by specialty, location, and availability. Read reviews and check credentials.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Book Your Visit</h3>
              <p className="text-gray-600">
                Schedule your appointment at a convenient time. Communicate directly with your nurse to discuss your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Receive Care</h3>
              <p className="text-gray-600">
                Get professional, personalized care in the comfort of your home. Rate your experience and build ongoing relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits for Patients
              </h2>
              <div className="space-y-4">
                {[
                  'Convenient care in your own home',
                  'Licensed and background-checked nurses',
                  'Flexible scheduling including evenings and weekends',
                  'Personalized one-on-one attention',
                  'Secure, HIPAA-compliant platform',
                  'Transparent pricing with no hidden fees',
                  'Easy rebooking with trusted providers',
                  '24/7 customer support'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7551464/pexels-photo-7551464.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Patient receiving care at home" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive healthcare services delivered by qualified professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Wound Care', price: 'Starting at $75', icon: Heart },
              { name: 'Medication Management', price: 'Starting at $60', icon: Shield },
              { name: 'Physical Therapy', price: 'Starting at $90', icon: Users },
              { name: 'Elderly Care', price: 'Starting at $65', icon: Heart },
              { name: 'Post-Operative Care', price: 'Starting at $85', icon: Award },
              { name: 'Chronic Disease Management', price: 'Starting at $70', icon: Clock }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <Icon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-green-600 font-medium">{service.price}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                review: 'The nurse was incredibly professional and caring. Having wound care at home made my recovery so much easier.',
                rating: 5,
                service: 'Wound Care'
              },
              {
                name: 'Robert Chen',
                review: 'Excellent medication management service. The nurse helped organize my medications and provided clear instructions.',
                rating: 5,
                service: 'Medication Management'
              },
              {
                name: 'Maria Rodriguez',
                review: 'My mother received wonderful elderly care. The nurse was patient, kind, and extremely knowledgeable.',
                rating: 5,
                service: 'Elderly Care'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Healthcare Journey Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Book your first appointment and experience the convenience of professional home healthcare.
          </p>
          <Link 
            to="/book" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Book Your First Visit</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PatientSection;