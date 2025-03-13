import React, { useState } from 'react';

const plans = [
  {
    name: 'Basic Plan',
    monthly: 2,
    yearly: 20, // 2 months free
    features: [
      '1 Health Profile',
      'Ingredient Scanning',
      'Basic Alerts',
      'Nutrition Tracking',
      'Email Support',
    ],
    highlight: false,
    buttonText: 'Get Started',
  },
  {
    name: 'Family Plan',
    monthly: 5,
    yearly: 50, // 2 months free
    features: [
      'Up to 5 Profiles',
      'Advanced Alerts',
      'Healthier Alternatives',
      'Meal Planning',
      'Priority Support',
    ],
    highlight: true,
    buttonText: 'Most Popular',
  },
  {
    name: 'Premium Plan',
    monthly: 10,
    yearly: 100, // 2 months free
    features: [
      'Unlimited Profiles',
      'Comprehensive Alerts',
      'Advanced Meal Plans',
      'Exclusive Content',
      '24/7 Priority Support',
    ],
    highlight: false,
    buttonText: 'Go Premium',
  },
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Plans for Everyone</h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Find the perfect plan for your health goals and lifestyle.
        </p>

        {/* Toggle Switch */}
        <div className="flex-col mb-12">
          <div className="flex justify-center items-center">
            <span className={`mr-3 font-medium ${!isYearly ? 'text-green-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <div
              className="relative w-16 h-8 bg-gray-200 rounded-full cursor-pointer transition"
              onClick={() => setIsYearly((prev) => !prev)}
            >
              <div
                className={`w-7 h-7 bg-white rounded-full shadow absolute top-0.5 transform transition-transform ${isYearly ? 'translate-x-8' : 'translate-x-1'
                  }`}
              ></div>
            </div>
            <span className={`ml-3 font-medium ${isYearly ? 'text-green-600' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>

          {/* Added mt-4 for extra spacing */}
          <p className="text-sm text-center text-green-600 font-medium mb-2 mt-2">
            🎉 Save 2 months with yearly billing!
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ name, monthly, yearly, features, highlight, buttonText }, index) => (
            <div
              key={index}
              className={`relative bg-gray-50 p-8 rounded-xl border ${highlight ? 'border-green-500 shadow-lg' : 'border-gray-100 shadow-sm'
                } flex flex-col justify-between`}
            >
              {highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">{name}</h3>
                <p className="text-3xl font-bold text-center text-gray-800 mb-6">
                  ${isYearly ? yearly : monthly}
                  <span className="text-lg text-gray-500">/{isYearly ? 'Year' : 'Month'}</span>
                </p>
                <ul className="text-gray-600 space-y-2 mb-10">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${highlight
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
