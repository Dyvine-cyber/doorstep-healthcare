import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Pill, Activity, Users, Stethoscope, Brain, Clock, Shield, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wound Care',
      price: '$75-90',
      duration: '45-60 minutes',
      description: 'Professional wound assessment, cleaning, dressing changes, and healing monitoring. Our nurses are trained in advanced wound care techniques.',
      includes: ['Wound assessment', 'Sterile dressing changes', 'Infection monitoring', 'Progress documentation', 'Healing recommendations']
    },
    {
      icon: Pill,
      title: 'Medication Management',
      price: '$60-75',
      duration: '30-45 minutes',
      description: 'Safe medication administration, organization, and monitoring to ensure proper adherence to treatment plans.',
      includes: ['Medication organization', 'Administration assistance', 'Side effect monitoring', 'Dosage verification', 'Physician coordination']
    },
    {
      icon: Activity,
      title: 'Physical Therapy',
      price: '$90-110',
      duration: '60-75 minutes',
      description: 'Rehabilitation exercises, mobility assistance, and strength training to improve patient independence and quality of life.',
      includes: ['Exercise therapy', 'Mobility training', 'Strength assessment', 'Equipment training', 'Progress tracking']
    },
    {
      icon: Users,
      title: 'Elderly Care',
      price: '$65-80',
      duration: '60-90 minutes',
      description: 'Compassionate care for senior patients including daily living assistance, health monitoring, and companionship.',
      includes: ['Vital sign monitoring', 'Medication reminders', 'Mobility assistance', 'Companionship', 'Safety assessments']
    },
    {
      icon: Stethoscope,
      title: 'Post-Operative Care',
      price: '$85-100',
      duration: '45-60 minutes',
      description: 'Specialized care following surgical procedures to ensure proper healing and recovery in the comfort of home.',
      includes: ['Incision care', 'Pain management', 'Recovery monitoring', 'Complication prevention', 'Follow-up coordination']
    },
    {
      icon: Brain,
      title: 'Chronic Disease Management',
      price: '$70-85',
      duration: '45-60 minutes',
      description: 'Ongoing support for patients with chronic conditions like diabetes, hypertension, and heart disease.',
      includes: ['Symptom monitoring', 'Treatment adherence', 'Lifestyle coaching', 'Emergency protocols', 'Care coordination']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Professional nursing care delivered in your home by licensed, experienced healthcare providers. All services are personalized to meet your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">{service.price}/visit</p>
                          <p className="text-sm text-gray-500">{service.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Includes:</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        to="/providers" 
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        <span>Find Nurses</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety & Security</h3>
              <p className="text-gray-600">
                All services are provided by licensed professionals with comprehensive background checks and malpractice insurance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book appointments that fit your schedule, including evenings and weekends. Same-day booking available for urgent needs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                Each service is tailored to your specific needs and health conditions. Build lasting relationships with trusted providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Home Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our qualified nurses and book your service today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/providers" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Browse Nurses
            </Link>
            <Link 
              to="/book" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Book Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;