import React, { useState } from 'react';
import { ArrowLeft, Share2, Heart } from 'lucide-react';

const Header = ({ productName, onBack }) => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-b-3xl shadow-lg">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-white mr-3" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-white">{productName}</h1>
      </div>
      <div className="flex items-center">
        <button className="text-white mr-3">
          <Heart size={24} />
        </button>
        <button className="text-white">
          <Share2 size={24} />
        </button>
      </div>
    </div>
  </div>
);

const ProfileSelector = ({ currentProfile, profiles, onProfileChange }) => (
  <div className="flex flex-col items-center mb-4">
    <span className="text-gray-700 font-medium mb-2">Showing Results for:</span>
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
      {profiles.map(profile => (
        <div
          key={profile.value}
          className={`flex flex-col items-center cursor-pointer transition-transform transform ${
            currentProfile === profile.value ? 'scale-110 border-2 border-blue-500 p-1 rounded-full' : ''
          }`}
          onClick={() => onProfileChange(profile.value)}
        >
          <img
            src={profile.avatarUrl}
            alt={profile.label}
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className="mt-2 text-sm text-gray-600">{profile.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const WarningCard = ({ title, message, icon: Icon, bgColor, textColor, iconColor }) => (
    <div className={`${bgColor} rounded-lg p-4 flex items-start mb-3 shadow-md`}>
      <Icon className={`${iconColor} mr-3 flex-shrink-0`} size={24} />
      <div>
        <h3 className={`font-semibold ${textColor} text-sm`}>{title}</h3>
        <p className={`${textColor} text-xs mt-1`}>{message}</p>
      </div>
    </div>
  );
  
  const IngredientCard = ({ name, icon: Icon, percentage, alert, good, banned }) => (
    <div className="bg-white rounded-lg shadow-sm p-3 flex items-center justify-between hover:shadow-md transition-shadow duration-300 mb-2">
      <div className="flex items-center">
        <div className={`p-2 rounded-full ${good ? 'bg-green-100' : alert ? 'bg-yellow-100' : banned ? 'bg-red-100' : 'bg-gray-100'}`}>
          <Icon className={`${good ? 'text-green-600' : alert ? 'text-yellow-600' : banned ? 'text-red-600' : 'text-gray-600'}`} size={20} />
        </div>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800 text-sm">{name}</h3>
          <p className="text-xs text-gray-600">{percentage}% of product</p>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={20} />
    </div>
  );
  
  const CalorieCard = ({ calories, servingSize, dailyValuePercentage }) => (
    <div className="bg-white rounded-lg p-4 mb-3 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">Calorie Information</h3>
          <p className="text-sm text-gray-600">{calories} calories per {servingSize}</p>
        </div>
        <div className="flex items-center bg-orange-100 rounded-full p-2">
          <Flame className="text-orange-500 mr-1" size={20} />
          <span className="text-orange-700 font-bold">{dailyValuePercentage}%</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${dailyValuePercentage}%` }}></div>
        </div>
        <p className="text-xs text-gray-500 text-right">of daily value</p>
      </div>
  
      <div className="space-y-3">
        <CalorieEquivalent 
          icon={Footprints}
          activity="Light Walking"
          duration="30 mins"
          color="text-blue-500"
        />
        <CalorieEquivalent 
          icon={Footprints}
          activity="Intense Running"
          duration="15 mins"
          color="text-green-500"
        />
        <CalorieEquivalent 
          icon={Dumbbell}
          activity="Strength Training"
          duration="20 mins"
          color="text-purple-500"
        />
      </div>
    </div>
  );
  
  const CalorieEquivalent = ({ icon: Icon, activity, duration, color }) => (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
      <div className="flex items-center">
        <Icon className={`${color} mr-2`} size={18} />
        <span className="text-sm text-gray-700">{activity}</span>
      </div>
      <span className="text-sm font-medium text-gray-600">{duration}</span>
    </div>
  );
  
  const HealthScoreCard = ({ score }) => (
    <div className="bg-blue-100 rounded-lg p-4 w-full shadow-md mb-4">
      <h3 className="font-semibold text-blue-800 mb-2 text-sm">Product Health Score</h3>
      <div className="flex items-center mb-2">
        <div className="w-full bg-blue-200 rounded-full h-2 mr-3">
          <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${score * 10}%` }}></div>
        </div>
        <span className="text-blue-800 font-bold text-sm">{score}/10</span>
      </div>
      <p className="text-xs text-blue-700">Contains ingredients that may not align with your health profile and includes banned substances.</p>
    </div>
  );
  
  const DecisionButtons = ({ onDecision }) => (
    <div className="w-full flex justify-around mb-4">
      <button
        onClick={() => onDecision('pass')}
        className="text-red-500 font-semibold px-6 py-2 rounded-full flex items-center"
      >
        <X size={20} className="mr-2" />
        Pass
      </button>
      <button
        onClick={() => onDecision('consider')}
        className="text-green-500 font-semibold px-6 py-2 rounded-full flex items-center"
      >
        <Check size={20} className="mr-2" />
        Consider
      </button>
    </div>
  );
  
  const SearchBar = () => (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
    </div>
  );
  
  const Section = ({ title, children }) => (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      {children}
    </div>
  );
  
  export default function IngreliProductDetail() {
    const [currentProfile, setCurrentProfile] = useState('self');
    const [decision, setDecision] = useState(null);

    const profiles = [
      { value: 'self', label: 'Myself', avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
      { value: 'partner', label: 'Partner', avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { value: 'kid1', label: 'Kid 1', avatarUrl: 'https://randomuser.me/api/portraits/boys/1.jpg' },
      { value: 'kid2', label: 'Kid 2', avatarUrl: 'https://randomuser.me/api/portraits/girls/1.jpg' },
    ];
  
    const handleProfileChange = (profile) => {
      setCurrentProfile(profile);
    };
  
  
    const handleDecision = (decisionType) => {
      setDecision(decisionType);
      console.log(`User decided to ${decisionType} the product`);
    };
  
    const handleBack = () => {
      console.log('Navigating back');
    };
  
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen relative pb-20">
        <Header productName="Product Name" onBack={handleBack} />

        {/* Profile Selector */}
        <ProfileSelector
            currentProfile={currentProfile}
            profiles={profiles}
            onProfileChange={handleProfileChange}
        />
        
        <div className="p-4 flex-grow overflow-y-auto">
          <ProductImage />
          
          <Section title="Warnings">
            <WarningCard 
              title="Allergy Alert" 
              message={`This product contains ${profileData[currentProfile].allergen}, which is listed as an allergy.`}
              icon={AlertCircle}
              bgColor="bg-red-100"
              textColor="text-red-800"
              iconColor="text-red-500"
            />
            <WarningCard 
              title="Banned Ingredient Alert" 
              message="This product contains preservatives banned in some countries or by WHO." 
              icon={AlertOctagon}
              bgColor="bg-purple-100"
              textColor="text-purple-800"
              iconColor="text-purple-500"
            />
          </Section>
  
          <Section title="Ingredients">
            <IngredientCard name="Coffee" icon={Coffee} percentage={35} good />
            <IngredientCard name="Wheat Flour" icon={Wheat} percentage={30} alert={currentProfile === 'kid1'} />
            <IngredientCard name="Milk Powder" icon={Milk} percentage={20} alert={currentProfile === 'self'} />
            <IngredientCard name="Sugar" icon={Candy} percentage={10} alert />
            <IngredientCard name="Preservative X" icon={AlertOctagon} percentage={5} banned />
          </Section>
  
          <Section title="Nutrition Information">
            <CalorieCard 
              calories={250} 
              servingSize="100g" 
              dailyValuePercentage={12.5} 
            />
            <HealthScoreCard score={profileData[currentProfile].healthScore} />
          </Section>
          
          <DecisionButtons onDecision={handleDecision} />
        </div>
  
        <SearchBar />
      </div>
    );
  }