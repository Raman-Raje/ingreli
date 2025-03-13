import React from 'react';

const PrivacyPolicy = () => (
  <section className="bg-green-50 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Privacy Policy for Ingreli
      </h1>
      <p className="text-sm text-gray-500 text-center mb-12">Last Updated: February, 2025</p>

      {/* Sections */}
      <div className="space-y-10 text-gray-700 leading-relaxed">
        <Section
          title="1. Introduction"
          content="Welcome to Ingreli. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services. By accessing or using Ingreli, you agree to the practices described in this policy."
        />

        <Section
          title="2. Information We Collect"
          content={
            <>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Your name, email address, and health profile data (e.g., allergies, dietary preferences).
                </li>
                <li>
                  <strong>Usage Data:</strong> Details on how you interact with our app, such as scanned products and feature usage.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about your device (e.g., device type, operating system, and IP address).
                </li>
              </ul>
            </>
          }
        />

        <Section
          title="3. How We Use Your Information"
          content={
            <>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services.</li>
                <li>Personalize your experience (e.g., offering health alerts and recommendations).</li>
                <li>Process payments and manage subscriptions.</li>
                <li>Communicate updates, support information, and important notifications.</li>
              </ul>
            </>
          }
        />

        <Section
          title="4. Sharing Your Information"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not sell your personal information—including your health data—to any third party.</li>
                <li>We may disclose information when required by law or to protect our legal rights.</li>
              </ul>
            </>
          }
        />

        <Section
          title="5. Data Security"
          content={
            <>
              <p>
                All your data, including sensitive health data, is stored in an encrypted format using industry-standard encryption protocols both during transmission and while at rest.
              </p>
              <p>
                Although we take extensive measures to secure your data, no system is completely foolproof.
              </p>
            </>
          }
        />

        <Section
          title="6. Your Rights"
          content={
            <>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Access and Control:</strong> You may access, update, or delete your personal information at any time.
                </li>
                <li>
                  <strong>Account Removal:</strong> You can remove your account whenever you choose. If you request account deletion, we will promptly process your request (subject to any legal obligations).
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt out of marketing communications at any time.
                </li>
              </ul>
            </>
          }
        />

        <Section
          title="7. Changes to This Policy"
          content="We may update this policy periodically. Significant changes will be communicated via email or in-app notifications."
        />

        <Section
          title="8. Contact Us"
          content={
            <>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email:</strong> contact@ingreli.com</li>
                <li><strong>Address:</strong> Medahalli, Bengaluru - 560049</li>
              </ul>
            </>
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

export default PrivacyPolicy;
