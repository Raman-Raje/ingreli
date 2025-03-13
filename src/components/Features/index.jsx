import React from 'react';
import { UserPlus, AlertCircle, Salad, ScanLine } from 'lucide-react';

const features = [
  {
    title: 'Personalized Health Profiles',
    description: 'Create profiles for your entire family and set unique health goals.',
    icon: UserPlus,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Ingredient Safety Alerts',
    description: 'Get instant alerts for harmful ingredients like allergens, carcinogens, and more.',
    icon: AlertCircle,
    color: 'bg-red-100 text-red-500',
  },
  {
    title: 'Healthier Alternatives',
    description: 'Discover better food options tailored to your dietary needs.',
    icon: Salad,
    color: 'bg-emerald-100 text-emerald-500',
  },
  {
    title: 'Easy-to-Use Scanner',
    description: 'Scan product labels in seconds with our powerful OCR technology.',
    icon: ScanLine,
    color: 'bg-blue-100 text-blue-500',
  },
];

const FeaturesSection = () => (
  <section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Our Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map(({ title, description, icon: Icon, color }, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${color} mb-6`}
            >
              <Icon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
