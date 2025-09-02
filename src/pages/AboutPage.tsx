import React from 'react';
import { Heart, Shield, Users, Award, CheckCircle, Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: 'Dr. Emily Harrison',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former ER physician with 15 years of experience in emergency and home healthcare.'
    },
    {
      name: 'Marcus Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Healthcare technology entrepreneur focused on improving patient access to care.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Nursing',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Registered nurse with 20+ years in clinical practice and nurse management.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Revolutionizing Home Healthcare
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            CareConnect was founded with a simple mission: make quality healthcare accessible, convenient, and personal for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To democratize access to quality healthcare by connecting patients with licensed nurses in their homes, 
                creating a more convenient, personal, and effective healthcare experience.
              </p>
              <ul className="space-y-3">
                {[
                  'Provide accessible healthcare for all patients',
                  'Support nurses with flexible career opportunities',
                  'Maintain the highest standards of safety and quality',
                  'Use technology to improve healthcare delivery'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To become the leading platform for home healthcare services, where every patient receives personalized, 
                professional care and every nurse has the opportunity to practice with autonomy and purpose.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-purple-900 mb-2">Looking Ahead</h3>
                <p className="text-purple-800 text-sm">
                  We're continuously expanding our services and technology to better serve patients and healthcare providers across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">Every interaction is guided by empathy and genuine care for patient wellbeing.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600">Rigorous vetting, ongoing monitoring, and HIPAA compliance ensure patient safety.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest quality in healthcare delivery and customer service.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">Building strong relationships between patients, nurses, and families.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Healthcare professionals and technology experts working together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Making a difference in healthcare delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">50,000+</div>
              <div className="text-blue-100">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">2,500+</div>
              <div className="text-blue-100">Licensed Nurses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">98%</div>
              <div className="text-blue-100">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-200 mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our services or want to learn more about joining our team?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-600">support@careconnect.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">Nurse Applications</h3>
              <p className="text-gray-600">careers@careconnect.com</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">1-800-CARE-NOW</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;