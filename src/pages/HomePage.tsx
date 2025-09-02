import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Star, Heart, Users, Award, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Home Healthcare
                <span className="text-blue-200 block">At Your Doorstep</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Connect with qualified, licensed nurses for personalized healthcare services in the comfort of your home. Quality care, when you need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/book" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Book Care Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  to="/providers" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Find Nurses</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5722081/pexels-photo-5722081.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional nurse providing home healthcare" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Licensed & Verified</p>
                    <p className="text-sm text-gray-600">All nurses background checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CareConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing home healthcare by connecting you with the most qualified professionals in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Professionals</h3>
              <p className="text-gray-600">
                All nurses are licensed, background-checked, and continuously monitored for quality assurance.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Clock className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock care when you need it most, with same-day booking available.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                <Star className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Exceptional Quality</h3>
              <p className="text-gray-600">
                Highly rated nurses with proven track records and patient satisfaction scores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
              <div className="text-gray-600">Licensed Nurses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine care to specialized treatments, our nurses provide expert healthcare services in your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Wound Care', description: 'Professional wound assessment, cleaning, and dressing changes', image: 'https://images.pexels.com/photos/5722081/pexels-photo-5722081.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { title: 'Medication Management', description: 'Safe medication administration and monitoring', image: 'https://images.pexels.com/photos/5863391/pexels-photo-5863391.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { title: 'Physical Therapy', description: 'Rehabilitation exercises and mobility assistance', image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { title: 'Elderly Care', description: 'Compassionate care for senior patients', image: 'https://images.pexels.com/photos/5999821/pexels-photo-5999821.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { title: 'Post-Operative Care', description: 'Recovery support after surgical procedures', image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { title: 'Chronic Disease Management', description: 'Ongoing support for chronic conditions', image: 'https://images.pexels.com/photos/7551528/pexels-photo-7551528.jpeg?auto=compress&cs=tinysrgb&w=400' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
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

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Home Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who trust CareConnect for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/for-patients" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              I Need Care
            </Link>
            <Link 
              to="/for-nurses" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              I'm a Nurse
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;