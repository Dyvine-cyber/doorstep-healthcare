import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Award, Calendar, Clock, Shield, Heart, ArrowLeft, MessageCircle, Phone } from 'lucide-react';

const ProviderProfile = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock nurse data - in real app this would come from an API
  const nurse = {
    id: 1,
    name: 'Sarah Mitchell, RN',
    title: 'Wound Care Specialist',
    location: 'Downtown Area',
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 85,
    experience: '8 years',
    image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Passionate about providing exceptional wound care in the comfort of patients\' homes. I specialize in complex wound healing, post-surgical care, and diabetic wound management. My approach combines clinical expertise with compassionate care to help patients heal faster and more comfortably.',
    certifications: ['Wound Care Certified', 'BLS/CPR', 'Diabetes Care', 'Pain Management'],
    specialties: ['Wound Care', 'Post-Operative Care', 'Diabetic Care', 'Pressure Ulcer Treatment'],
    education: ['BSN - University of Healthcare', 'Wound Care Certification - National Alliance'],
    languages: ['English', 'Spanish'],
    availability: 'Available Today',
    responseTime: '< 2 hours'
  };

  const reviews = [
    {
      id: 1,
      patient: 'Mary K.',
      rating: 5,
      date: '2025-01-10',
      service: 'Wound Care',
      comment: 'Sarah was incredibly professional and gentle. My wound healed much faster than expected thanks to her expert care. I would definitely book her again.'
    },
    {
      id: 2,
      patient: 'Robert P.',
      rating: 5,
      date: '2025-01-08',
      service: 'Post-Operative Care',
      comment: 'Excellent care after my surgery. Sarah explained everything clearly and made me feel very comfortable. Her expertise really showed.'
    },
    {
      id: 3,
      patient: 'Linda M.',
      rating: 4,
      date: '2025-01-05',
      service: 'Diabetic Care',
      comment: 'Very knowledgeable about diabetic wound care. Professional and caring approach. Highly recommend.'
    }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/providers" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Directory</span>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start space-x-6">
                  <img 
                    src={nurse.image} 
                    alt={nurse.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">{nurse.name}</h1>
                        <p className="text-xl text-blue-600 font-medium">{nurse.title}</p>
                        <div className="flex items-center space-x-4 mt-2 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{nurse.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="h-4 w-4" />
                            <span>{nurse.experience} experience</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-2">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-bold text-gray-900">{nurse.rating}</span>
                          <span className="text-gray-600">({nurse.reviewCount} reviews)</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">${nurse.hourlyRate}/hour</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {nurse.availability}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Responds in {nurse.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{nurse.bio}</p>
              </div>

              {/* Qualifications */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Qualifications & Certifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Certifications</h3>
                    <div className="space-y-2">
                      {nurse.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span className="text-gray-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {nurse.specialties.map((specialty, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Education</h3>
                    <div className="space-y-2">
                      {nurse.education.map((edu, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-purple-600" />
                          <span className="text-gray-700">{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                    <div className="space-y-2">
                      {nurse.languages.map((language, index) => (
                        <span key={index} className="text-gray-700">{language}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Reviews</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.patient}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{review.service}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="space-y-6">
              {/* Booking Card */}
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Book with Sarah</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Choose time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-700">Hourly Rate</span>
                      <span className="font-semibold text-gray-900">${nurse.hourlyRate}/hour</span>
                    </div>
                  </div>

                  <Link 
                    to="/book"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Book Appointment</span>
                  </Link>

                  <div className="flex space-x-2">
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Call</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span>Background Verified</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Patients</span>
                    <span className="font-semibold text-gray-900">127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-semibold text-green-600">99.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">On-Time Arrival</span>
                    <span className="font-semibold text-green-600">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Rebooking Rate</span>
                    <span className="font-semibold text-blue-600">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProviderProfile;