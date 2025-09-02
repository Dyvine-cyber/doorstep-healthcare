import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, Filter, Award, Shield, Clock } from 'lucide-react';

const ProviderDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const nurses = [
    {
      id: 1,
      name: 'Sarah Mitchell, RN',
      specialty: 'Wound Care Specialist',
      location: 'Downtown Area',
      rating: 4.9,
      reviewCount: 127,
      hourlyRate: 85,
      experience: '8 years',
      certifications: ['Wound Care Certified', 'BLS/CPR'],
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialized in complex wound care with extensive experience in post-surgical recovery.',
      availability: 'Available Today'
    },
    {
      id: 2,
      name: 'Michael Rodriguez, RN',
      specialty: 'Geriatric Care',
      location: 'Westside',
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 75,
      experience: '12 years',
      certifications: ['Geriatric Nursing', 'Medication Management'],
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Compassionate care for elderly patients with focus on dignity and independence.',
      availability: 'Available Tomorrow'
    },
    {
      id: 3,
      name: 'Jennifer Park, RN',
      specialty: 'Physical Therapy',
      location: 'Northside',
      rating: 5.0,
      reviewCount: 156,
      hourlyRate: 90,
      experience: '10 years',
      certifications: ['Physical Therapy Assistant', 'Rehabilitation Specialist'],
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in rehabilitation and mobility assistance for post-injury recovery.',
      availability: 'Available Today'
    },
    {
      id: 4,
      name: 'David Thompson, LPN',
      specialty: 'Medication Management',
      location: 'Eastside',
      rating: 4.7,
      reviewCount: 94,
      hourlyRate: 65,
      experience: '6 years',
      certifications: ['Medication Administration', 'Diabetes Care'],
      image: 'https://images.pexels.com/photos/5452266/pexels-photo-5452266.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Skilled in medication management and chronic disease monitoring.',
      availability: 'Available This Week'
    },
    {
      id: 5,
      name: 'Lisa Chen, RN',
      specialty: 'Post-Operative Care',
      location: 'Central',
      rating: 4.9,
      reviewCount: 112,
      hourlyRate: 80,
      experience: '9 years',
      certifications: ['Surgical Recovery', 'Pain Management'],
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Specialized in post-surgical care and recovery monitoring.',
      availability: 'Available Today'
    },
    {
      id: 6,
      name: 'Robert Wilson, RN',
      specialty: 'Chronic Disease Management',
      location: 'Southside',
      rating: 4.8,
      reviewCount: 78,
      hourlyRate: 70,
      experience: '7 years',
      certifications: ['Diabetes Educator', 'Hypertension Management'],
      image: 'https://images.pexels.com/photos/5452207/pexels-photo-5452207.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in managing chronic conditions and patient education.',
      availability: 'Available Tomorrow'
    }
  ];

  const specialties = ['All Specialties', 'Wound Care', 'Geriatric Care', 'Physical Therapy', 'Medication Management', 'Post-Operative Care', 'Chronic Disease Management'];
  const locations = ['All Locations', 'Downtown Area', 'Westside', 'Northside', 'Eastside', 'Central', 'Southside'];

  const filteredNurses = nurses.filter(nurse => {
    const matchesSearch = nurse.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         nurse.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === '' || selectedSpecialty === 'All Specialties' || 
                            nurse.specialty.includes(selectedSpecialty);
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' || 
                           nurse.location === selectedLocation;
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Nurse</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Browse our network of licensed, experienced nurses and find the perfect match for your healthcare needs.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search nurses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>{specialty}</option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>More Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredNurses.length} nurses
              {searchTerm && ` for "${searchTerm}"`}
              {selectedSpecialty && selectedSpecialty !== 'All Specialties' && ` in ${selectedSpecialty}`}
              {selectedLocation && selectedLocation !== 'All Locations' && ` in ${selectedLocation}`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredNurses.map((nurse) => (
              <div key={nurse.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={nurse.image} 
                      alt={nurse.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{nurse.name}</h3>
                          <p className="text-blue-600 font-medium">{nurse.specialty}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{nurse.location}</span>
                            <span>•</span>
                            <span>{nurse.experience} experience</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">${nurse.hourlyRate}/hr</p>
                          <p className="text-sm text-gray-500">{nurse.availability}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-900">{nurse.rating}</span>
                      </div>
                      <span className="text-gray-600">({nurse.reviewCount} reviews)</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{nurse.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {nurse.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link 
                        to={`/providers/${nurse.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        View Profile
                      </Link>
                      <Link 
                        to="/book"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center space-x-2"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProviderDirectory;