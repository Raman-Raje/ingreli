import React from 'react';
import { Scan, FileSearch, Lightbulb, Apple } from 'lucide-react';

const iconColors = ['text-red-500', 'text-green-700', 'text-blue-400', 'text-yellow-800'];

const StepCard = ({ icon: Icon, title, description, isLeft, color }) => (
  <div
    className={`flex flex-col lg:flex-row items-center mb-16 ${
      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
    }`}
  >
    {/* Icon */}
    <div className={`flex items-center justify-center w-24 h-24 rounded-full bg-white ${color} shadow-lg mb-6 lg:mb-0 lg:mx-8`}>
      <Icon className={`w-10 h-10 ${color}`} />
    </div>

    {/* Text Content */}
    <div className="max-w-md text-center lg:text-left">
      <h3 className="text-2xl font-semibold text-green-900 mb-2">{title}</h3>
      <p className="text-green-800 leading-relaxed">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {

  const steps = [
    {
      icon: Scan,
      title: 'Scan',
      description: 'Use your phone to scan any product label or fresh produce like vegetables and fruits. Whether you’re at the grocery store or in your kitchen, Ingreli makes it easy to know what’s in your food.',
      tagline: 'Simplify Ingredients, Amplify Wellness.',
    },
    {
      icon: FileSearch,
      title: 'Analyze',
      description: 'Ingreli analyzes ingredients and provides a product score based on your health profile. Know the best suitable product for your health and take informed decisions for you and your loved ones.',
      tagline: 'Find What’s Best for You and Your Loved Ones.',
    },
    {
      icon: Lightbulb,
      title: 'Get Insights',
      description: 'Receive personalized alerts and recommendations tailored to your health goals. Customizable health profiles help you achieve your unique dietary needs and preferences.',
      tagline: 'Make Smart, Health-Conscious Decisions Instantly.',
    },
    {
      icon: Apple,
      title: 'Eat Smarter',
      description: 'With Ingreli, take full control of your health. Know exactly what’s in your food. Start your journey to a healthier lifestyle today!',
      tagline: 'Empower Your Choices: Understand Ingredients, Prioritize Health.',
    },
  ];

  return (
    <section className="bg-green-50 py-20 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-16">
          How Ingreli Works
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              {...step}
              isLeft={index % 2 === 0}
              color={iconColors[index % iconColors.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
