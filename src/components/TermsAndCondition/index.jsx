import React from 'react';

const TermsAndConditions = () => (
  <section className="bg-green-50 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Terms and Conditions for Ingreli
      </h1>
      <p className="text-sm text-gray-500 text-center mb-12">Last Updated: February, 2025</p>

      {/* Sections */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        <Section
          title="1. Acceptance of Terms"
          content="By using Ingreli, you agree to these Terms and Conditions. If you do not agree, please do not use our services."
        />

        <Section
          title="2. Eligibility"
          content="You must be at least 13 years old to use Ingreli. If you are under 18, you must have parental consent."
        />

        <Section
          title="3. Subscription Plans and Payments"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Free Trial:</strong> You may begin with a free trial. If you do not cancel before the trial period ends, you will be automatically charged.
                </li>
                <li>
                  <strong>Payment Processing:</strong> Payments are handled via secure, third-party gateways. You agree to provide accurate billing information.
                </li>
                <li>
                  <strong>Cancellation:</strong> You can cancel your subscription at any time; however, no refunds will be provided for partial subscription periods.
                </li>
              </ul>
            </>
          }
        />

        <Section
          title="4. User Responsibilities"
          content={
            <>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Ingreli only for lawful purposes.</li>
                <li>Keep your account credentials confidential.</li>
                <li>
                  Refrain from reverse-engineering, copying, or distributing our app or its content without explicit permission.
                </li>
              </ul>
            </>
          }
        />

        <Section
          title="5. Account Removal and Termination"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account Removal:</strong> You may request to remove or delete your account at any time. Upon such a request, all associated personal data will be deleted, except where retention is required by law.
                </li>
                <li>We reserve the right to suspend or terminate your account if you violate these Terms.</li>
              </ul>
            </>
          }
        />

        <Section
          title="6. Intellectual Property"
          content="All content, trademarks, and features of Ingreli are the property of Ingreli or its licensors. You may not copy, modify, or distribute any part of the app without our explicit consent."
        />

        <Section
          title="7. Limitation of Liability"
          content='Ingreli is provided "as is." We are not liable for any damages arising from the use of our app, including any inaccuracies in data such as ingredient analysis.'
        />

        <Section
          title="8. Governing Law"
          content="These Terms are governed by the laws of [Insert Jurisdiction]. Any disputes will be resolved exclusively in the courts of [Insert Jurisdiction]."
        />

        <Section
          title="9. Changes to Terms"
          content="We reserve the right to modify these Terms at any time. Continued use of the app constitutes acceptance of the updated Terms."
        />

        <Section
          title="10. Contact Us"
          content={
            <>
              <p>For any questions regarding these Terms, please contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> contact@ingreli.com</li>
                <li><strong>Address:</strong> Medahalli, Bengaluru - 560049</li>
              </ul>
            </>
          }
        />

        <Section
          title="Additional Notes for Payment Gateways"
          content={
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>PCI Compliance:</strong> Our payment gateway is fully PCI-DSS compliant.
              </li>
              <li>
                <strong>Refund Policy:</strong> Please refer to our refund policy for details regarding refunds for digital services.
              </li>
              <li>
                <strong>Subscription Management:</strong> Detailed instructions for canceling subscriptions are provided within the app.
              </li>
            </ul>
          }
        />
      </div>
    </div>
  </section>
);

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <div className="text-gray-700">{content}</div>
  </div>
);

export default TermsAndConditions;
