import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PatientSection from './pages/PatientSection';
import NurseSection from './pages/NurseSection';
import ServicesPage from './pages/ServicesPage';
import ProviderDirectory from './pages/ProviderDirectory';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import PatientDashboard from './pages/PatientDashboard';
import NurseDashboard from './pages/NurseDashboard';
import ProviderProfile from './pages/ProviderProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/for-patients" element={<PatientSection />} />
          <Route path="/for-nurses" element={<NurseSection />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/providers" element={<ProviderDirectory />} />
          <Route path="/providers/:id" element={<ProviderProfile />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/nurse-dashboard" element={<NurseDashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;