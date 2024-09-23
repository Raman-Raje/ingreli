import React, { useState } from 'react';
import { User, ArrowLeft, Check, Minus, Plus, ChevronDown, X, Info, Activity, Droplet, Scale, Heart, Brain, Apple } from 'lucide-react';

const HealthProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [goal, setGoal] = useState('weight_loss');
  const [dietType, setDietType] = useState('balanced');
  const [allergies, setAllergies] = useState([]);
  const [waterIntake, setWaterIntake] = useState(2000);

  const tabs = [
    { id: 'basics', icon: User, label: 'Basics' },
    { id: 'diet', icon: Apple, label: 'Diet' },
    { id: 'health', icon: Heart, label: 'Health' },
    { id: 'education', icon: Brain, label: 'Learn' },
  ];

  const goalOptions = [
    { value: 'weight_loss', label: 'Weight Loss', icon: Scale },
    { value: 'muscle_gain', label: 'Muscle Gain', icon: Activity },
    { value: 'health_improvement', label: 'Health Improvement', icon: Heart },
  ];

  const dietOptions = [
    { value: 'balanced', label: 'Balanced' },
    { value: 'low_carb', label: 'Low Carb' },
    { value: 'keto', label: 'Keto' },
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <button className="text-white">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold text-white">Health Profile</h1>
          <div className="w-6"></div>
        </div>
        <div className="flex justify-around bg-white bg-opacity-20 rounded-full p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.id ? 'bg-white text-purple-600' : 'text-white'
              }`}
            >
              <tab.icon size={18} className="mr-2" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {activeTab === 'basics' && (
          <>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Body Metrics</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Height</span>
                <div className="flex items-center">
                  <button onClick={() => setHeight(h => Math.max(100, h - 1))} className="text-blue-500">
                    <Minus size={20} />
                  </button>
                  <span className="mx-3 text-lg font-semibold">{height} cm</span>
                  <button onClick={() => setHeight(h => Math.min(250, h + 1))} className="text-blue-500">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Weight</span>
                <div className="flex items-center">
                  <button onClick={() => setWeight(w => Math.max(30, w - 0.5))} className="text-blue-500">
                    <Minus size={20} />
                  </button>
                  <span className="mx-3 text-lg font-semibold">{weight} kg</span>
                  <button onClick={() => setWeight(w => Math.min(200, w + 0.5))} className="text-blue-500">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Health Goal</h2>
              <div className="grid grid-cols-3 gap-4">
                {goalOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setGoal(option.value)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl transition-colors ${
                      goal === option.value ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <option.icon size={24} className="mb-2" />
                    <span className="text-sm font-medium text-center">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'diet' && (
          <>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Diet Type</h2>
              <div className="space-y-2">
                {dietOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setDietType(option.value)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      dietType === option.value ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Allergies</h2>
              <div className="flex flex-wrap gap-2">
                {allergies.map((allergy, index) => (
                  <span key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center">
                    {allergy}
                    <button onClick={() => setAllergies(allergies.filter((_, i) => i !== index))} className="ml-2 text-red-800">
                      <X size={14} />
                    </button>
                  </span>
                ))}
                <button
                  onClick={() => {
                    const newAllergy = prompt('Enter allergy');
                    if (newAllergy && !allergies.includes(newAllergy)) {
                      setAllergies([...allergies, newAllergy]);
                    }
                  }}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Plus size={14} className="mr-1" /> Add Allergy
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'health' && (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Daily Water Intake</h2>
            <div className="flex items-center justify-between">
              <Droplet size={24} className="text-blue-500" />
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={waterIntake}
                onChange={(e) => setWaterIntake(Number(e.target.value))}
                className="w-2/3 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-lg font-semibold">{waterIntake} ml</span>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Nutritional Education</h2>
            <div className="space-y-3">
              {['Understanding Food Labels', 'Portion Size Guide', 'Nutrient Density Explained'].map((topic, index) => (
                <button key={index} className="w-full text-left p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition duration-300 flex items-center justify-between">
                  <span>{topic}</span>
                  <Info size={20} className="text-blue-500" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 left-6 right-6">
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center shadow-lg">
          <Check size={24} className="mr-2" />
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default HealthProfileScreen;