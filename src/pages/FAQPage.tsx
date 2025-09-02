import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Heart, Shield, Clock } from 'lucide-react';

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqSections = [
    {
      title: 'For Patients',
      icon: Heart,
      faqs: [
        {
          question: 'How do I know if a nurse is qualified?',
          answer: 'All nurses on our platform are licensed professionals who have passed comprehensive background checks. We verify their licenses, certifications, and require current malpractice insurance. You can view each nurse\'s credentials, experience, and patient reviews on their profile.'
        },
        {
          question: 'Is CareConnect covered by insurance?',
          answer: 'Many of our services may be covered by insurance, depending on your plan and the type of care needed. We recommend checking with your insurance provider. We also offer transparent pricing for all services and can provide documentation for insurance reimbursement.'
        },
        {
          question: 'How quickly can I book a nurse?',
          answer: 'We offer same-day booking for urgent needs, though availability depends on your location and the specific service required. For routine care, we recommend booking 24-48 hours in advance to ensure the best nurse match.'
        },
        {
          question: 'What if I need to cancel or reschedule?',
          answer: 'You can cancel or reschedule appointments up to 4 hours before the scheduled time without penalty. For cancellations within 4 hours, a cancellation fee may apply. Emergency cancellations are handled case-by-case.'
        },
        {
          question: 'Is my personal information secure?',
          answer: 'Yes, we are fully HIPAA compliant and use bank-level encryption to protect your personal and health information. Your data is only shared with your selected healthcare provider and is never sold to third parties.'
        },
        {
          question: 'What happens if there\'s an emergency during a visit?',
          answer: 'All our nurses are trained in emergency procedures and carry emergency equipment. They can provide immediate care and will call emergency services if needed. We also have 24/7 support available for any urgent situations.'
        }
      ]
    },
    {
      title: 'For Nurses',
      icon: Users,
      faqs: [
        {
          question: 'How much can I earn as a CareConnect nurse?',
          answer: 'Earnings vary based on your credentials, experience, and specialty. LPNs typically earn $45-60/hour, RNs earn $60-75/hour, and specialists can earn $75-85/hour. You set your own rates within market ranges.'
        },
        {
          question: 'How flexible is the scheduling?',
          answer: 'You have complete control over your schedule. You can set your availability, accept or decline appointments, and work as much or as little as you want. Many nurses use our platform as a primary job or to supplement their income.'
        },
        {
          question: 'What is the application process?',
          answer: 'The process involves: 1) Online application, 2) Document verification (license, certifications, insurance), 3) Background check, 4) Profile creation. The entire process typically takes 5-7 business days.'
        },
        {
          question: 'Do I need my own malpractice insurance?',
          answer: 'Yes, you must maintain current malpractice insurance. We can recommend providers if you need coverage. This protects both you and our patients.'
        },
        {
          question: 'How do I get paid?',
          answer: 'Payment is processed weekly via direct deposit. You\'ll receive payment for all completed services from the previous week. We handle all payment processing and provide detailed earning statements.'
        },
        {
          question: 'What support does CareConnect provide?',
          answer: 'We provide 24/7 technical support, clinical consultation when needed, and ongoing training opportunities. Our team is always available to help with patient situations or platform questions.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions about our healthcare platform
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <div key={sectionIndex} className="mb-12">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const globalIndex = sectionIndex * 100 + faqIndex;
                    const isOpen = openFAQ === globalIndex;

                    return (
                      <div key={faqIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Help */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 mb-4">Our support team is available around the clock for any questions or emergencies.</p>
              <p className="text-blue-600 font-medium">1-800-CARE-NOW</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600 mb-4">All interactions are monitored and our nurses follow strict safety protocols.</p>
              <p className="text-green-600 font-medium">HIPAA Compliant</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 mb-4">Join our community forums and connect with other patients and healthcare providers.</p>
              <p className="text-purple-600 font-medium">Join Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is here to help you understand our services and find the right care solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Support
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;