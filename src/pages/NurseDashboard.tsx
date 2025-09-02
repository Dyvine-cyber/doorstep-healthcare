import React, { useState } from 'react';
import { Calendar, DollarSign, Star, Users, Settings, TrendingUp, Clock, MapPin } from 'lucide-react';

const NurseDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pendingRequests = [
    {
      id: 1,
      patient: 'Mary Johnson',
      service: 'Wound Care',
      date: '2025-01-16',
      time: '2:00 PM',
      address: '123 Oak Street',
      payment: '$85',
      notes: 'Post-surgical wound care needed'
    },
    {
      id: 2,
      patient: 'Robert Wilson',
      service: 'Medication Management',
      date: '2025-01-17',
      time: '10:00 AM',
      address: '456 Pine Avenue',
      payment: '$65',
      notes: 'Diabetes medication organization'
    }
  ];

  const upcomingAppointments = [
    {
      id: 3,
      patient: 'Alice Cooper',
      service: 'Physical Therapy',
      date: '2025-01-15',
      time: '11:00 AM',
      address: '789 Elm Street',
      payment: '$95'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Nurse Dashboard</h1>
              <p className="text-gray-600">Welcome back, Sarah Mitchell</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">This Week's Earnings</p>
                <p className="text-2xl font-bold text-green-600">$1,240</p>
              </div>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
                Update Availability
              </button>
            </div>
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
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-gray-600">Pending Requests</p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                  <p className="text-gray-600">This Week</p>
                </div>
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.9</p>
                  <p className="text-gray-600">Rating</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">127</p>
                  <p className="text-gray-600">Total Patients</p>
                </div>
                <Users className="h-8 w-8 text-purple-600" />
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
                  { id: 'overview', label: 'Overview', icon: TrendingUp },
                  { id: 'requests', label: 'Requests', icon: Clock },
                  { id: 'schedule', label: 'Schedule', icon: Calendar },
                  { id: 'earnings', label: 'Earnings', icon: DollarSign },
                  { id: 'profile', label: 'Profile', icon: Users }
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
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-gray-700">Completed: Physical Therapy with Alice Cooper</span>
                          <span className="text-green-600 font-medium">+$95</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                          <span className="text-gray-700">New 5-star review from Robert Wilson</span>
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                          <span className="text-gray-700">3 new patient requests</span>
                          <span className="text-orange-600 font-medium">Action needed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Appointment</h3>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900">Physical Therapy</h4>
                        <p className="text-gray-600">Alice Cooper</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                          <span>Today, 11:00 AM</span>
                          <span>789 Elm Street</span>
                        </div>
                        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Patient Requests</h2>
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div key={request.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="lg:col-span-2">
                            <h3 className="font-semibold text-gray-900">{request.service}</h3>
                            <p className="text-gray-600">{request.patient}</p>
                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                              <span>{request.date} at {request.time}</span>
                              <span>•</span>
                              <span>{request.address}</span>
                            </div>
                            {request.notes && (
                              <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded">
                                <strong>Notes:</strong> {request.notes}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col space-y-3">
                            <div className="text-center">
                              <p className="text-lg font-bold text-green-600">{request.payment}</p>
                              <p className="text-sm text-gray-500">Payment</p>
                            </div>
                            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                              Accept
                            </button>
                            <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                              Decline
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'schedule' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Schedule & Availability</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
                      <div className="space-y-3">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{appointment.service}</h4>
                              <p className="text-gray-600">{appointment.patient}</p>
                              <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span>{appointment.date} at {appointment.time}</span>
                                <MapPin className="h-4 w-4 ml-2" />
                                <span>{appointment.address}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-green-600">{appointment.payment}</p>
                              <button className="text-blue-600 hover:text-blue-700 text-sm">View Details</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Set Availability</h3>
                      <div className="grid grid-cols-7 gap-2">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                          <div key={day} className="text-center">
                            <p className="font-medium text-gray-700 mb-2">{day}</p>
                            <label className="block">
                              <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600" />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'earnings' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-900 mb-2">This Week</h3>
                      <p className="text-2xl font-bold text-green-600">$1,240</p>
                      <p className="text-sm text-green-700">8 appointments completed</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-900 mb-2">This Month</h3>
                      <p className="text-2xl font-bold text-blue-600">$4,860</p>
                      <p className="text-sm text-blue-700">32 appointments completed</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-900 mb-2">Average Rate</h3>
                      <p className="text-2xl font-bold text-purple-600">$85/hr</p>
                      <p className="text-sm text-purple-700">Based on completed visits</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Payments</h3>
                    <div className="space-y-3">
                      {[
                        { date: '2025-01-13', service: 'Wound Care', patient: 'Mary Johnson', amount: '$85' },
                        { date: '2025-01-12', service: 'Physical Therapy', patient: 'Robert Wilson', amount: '$95' },
                        { date: '2025-01-11', service: 'Medication Management', patient: 'Alice Cooper', amount: '$65' },
                        { date: '2025-01-10', service: 'Elderly Care', patient: 'James Smith', amount: '$70' }
                      ].map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{payment.service}</p>
                            <p className="text-gray-600">{payment.patient}</p>
                            <p className="text-sm text-gray-500">{payment.date}</p>
                          </div>
                          <p className="font-semibold text-green-600">{payment.amount}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Professional Profile</h2>
                  <div className="max-w-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input type="text" defaultValue="Sarah" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input type="text" defaultValue="Mitchell" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                        <input type="text" defaultValue="RN-12345678" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate</label>
                        <input type="number" defaultValue="85" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Professional Bio</label>
                      <textarea 
                        rows={4} 
                        defaultValue="Specialized in complex wound care with extensive experience in post-surgical recovery. I am passionate about providing compassionate, professional care in the comfort of patients' homes."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialties</label>
                      <div className="flex flex-wrap gap-2">
                        {['Wound Care', 'Post-Operative Care', 'Pain Management'].map((specialty) => (
                          <span key={specialty} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Update Profile
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

export default NurseDashboard;