import React, { useState } from 'react';
import { Calendar, Clock, User, Star, CreditCard, Settings, Bell, Heart } from 'lucide-react';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('appointments');

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Wound Care',
      nurse: 'Sarah Mitchell, RN',
      date: '2025-01-15',
      time: '10:00 AM',
      status: 'Confirmed',
      price: '$85'
    },
    {
      id: 2,
      service: 'Physical Therapy',
      nurse: 'Jennifer Park, RN',
      date: '2025-01-18',
      time: '2:00 PM',
      status: 'Pending',
      price: '$95'
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      service: 'Medication Management',
      nurse: 'Michael Rodriguez, RN',
      date: '2025-01-10',
      time: '9:00 AM',
      status: 'Completed',
      price: '$65',
      rating: 5
    },
    {
      id: 4,
      service: 'Elderly Care',
      nurse: 'Lisa Chen, RN',
      date: '2025-01-08',
      time: '11:00 AM',
      status: 'Completed',
      price: '$70',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
              <p className="text-gray-600">Welcome back, John</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Book New Service
            </button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-gray-600">Total Visits</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                  <p className="text-gray-600">Upcoming</p>
                </div>
                <Clock className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                  <p className="text-gray-600">Avg Rating Given</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">$640</p>
                  <p className="text-gray-600">Total Spent</p>
                </div>
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'appointments', label: 'Appointments', icon: Calendar },
                  { id: 'history', label: 'History', icon: Clock },
                  { id: 'profile', label: 'Profile', icon: User },
                  { id: 'settings', label: 'Settings', icon: Settings }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'appointments' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{appointment.service}</h3>
                            <p className="text-gray-600">{appointment.nurse}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>{appointment.date}</span>
                              <span>{appointment.time}</span>
                              <span className={`px-2 py-1 rounded text-xs ${
                                appointment.status === 'Confirmed' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{appointment.price}</p>
                            <div className="flex space-x-2 mt-2">
                              <button className="text-blue-600 hover:text-blue-700 text-sm">Reschedule</button>
                              <button className="text-red-600 hover:text-red-700 text-sm">Cancel</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'history' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment History</h2>
                  <div className="space-y-4">
                    {pastAppointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{appointment.service}</h3>
                            <p className="text-gray-600">{appointment.nurse}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>{appointment.date}</span>
                              <span>{appointment.time}</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{appointment.price}</p>
                            <div className="flex items-center space-x-1 mt-2">
                              {[...Array(appointment.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <button className="text-blue-600 hover:text-blue-700 text-sm mt-1">Rebook</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Profile</h2>
                  <div className="max-w-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input type="text" defaultValue="John" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" defaultValue="john.doe@email.com" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input type="tel" defaultValue="(555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                      <input type="text" defaultValue="Jane Doe - (555) 987-6543" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Update Profile
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  <div className="max-w-2xl space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Appointment reminders</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">New nurse availability</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Marketing updates</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Allow nurses to see past reviews</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="ml-3 text-gray-700">Share availability for rebooking</span>
                        </label>
                      </div>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;