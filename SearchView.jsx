import React, { useState } from 'react';
import { AlertTriangle, ThumbsUp, Coffee, Wheat, Milk, Candy, AlertCircle, Flame, AlertOctagon, Footprints, Dumbbell, ChevronRight, Users, Share2, ArrowLeft, Heart } from 'lucide-react';

const Header = ({ currentProfile, onProfileChange, productName }) => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-b-3xl shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <button className="text-white mr-3">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-white">{productName}</h1>
      </div>
      <div className="flex items-center space-x-3">
        <button className="text-white">
          <Heart size={24} />
        </button>
        <button className="text-white">
          <Share2 size={24} />
        </button>
      </div>
    </div>
    <div className="flex justify-end">
      <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
        <Users className="text-white mr-3" size={20} />
        <select 
          className="bg-transparent text-white font-semibold focus:outline-none"
          value={currentProfile}
          onChange={(e) => onProfileChange(e.target.value)}
        >
          <option value="self">Myself</option>
          <option value="partner">Partner</option>
          <option value="kid1">Kid 1</option>
          <option value="kid2">Kid 2</option>
        </select>
      </div>
    </div>
  </div>
);

const ProductImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    return (
      <div className="w-full h-48 bg-white rounded-lg shadow-md mb-6 overflow-hidden flex items-center justify-center">
        <img 
          src={`https://avatars.dicebear.com/api/initials/${randomId}.svg`}
          alt="Product Avatar"
          className="w-36 h-36 object-cover rounded-lg"
        />
      </div>
    );
  };
  
  const WarningCard = ({ title, message, icon: Icon, bgColor, textColor, iconColor }) => (
    <div className={`${bgColor} rounded-lg p-5 flex items-start mb-4 shadow-md`}>
      <Icon className={`${iconColor} mr-4 flex-shrink-0`} size={28} />
      <div>
        <h3 className={`font-semibold ${textColor}`}>{title}</h3>
        <p className={`text-sm ${textColor} mt-2`}>{message}</p>
      </div>
    </div>
  );
  
  const IngredientCard = ({ name, icon: Icon, percentage, alert, good, banned }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${good ? 'bg-green-100' : alert ? 'bg-yellow-100' : banned ? 'bg-red-100' : 'bg-gray-100'}`}>
          <Icon className={`${good ? 'text-green-600' : alert ? 'text-yellow-600' : banned ? 'text-red-600' : 'text-gray-600'}`} size={24} />
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{percentage}% of product</p>
        </div>
      </div>
      <ChevronRight className="text-gray-400" size={24} />
    </div>
  );
  
  const CalorieCard = ({ calories, servingSize }) => (
    <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg p-5 mb-4 shadow-md">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-orange-400 rounded-full">
          <Flame className="text-orange-700" size={28} />
        </div>
        <div className="ml-4">
          <h3 className="font-semibold text-orange-800 text-lg">Calorie Information</h3>
          <p className="text-sm text-orange-700">{calories} calories per {servingSize}</p>
        </div>
      </div>
      <div className="space-y-3 bg-white bg-opacity-60 rounded-lg p-4">
        <p className="text-sm flex items-center">
          <Footprints className="text-orange-600 mr-3" size={18} />
          <span>30 mins of light walking</span>
        </p>
        <p className="text-sm flex items-center">
          <Footprints className="text-orange-600 mr-3" size={22} />
          <span>15 mins of intense running</span>
        </p>
        <p className="text-sm flex items-center">
          <Dumbbell className="text-orange-600 mr-3" size={20} />
          <span>20 mins of strength training</span>
        </p>
      </div>
    </div>
  );
  
  const HealthScoreCard = ({ score }) => (
    <div className="bg-blue-100 rounded-lg p-5 w-full shadow-md">
      <h3 className="font-semibold text-blue-800 mb-3">Product Health Score</h3>
      <div className="flex items-center">
        <div className="w-full bg-blue-200 rounded-full h-3 mr-3">
          <div className="bg-blue-600 h-3 rounded-full transition-all duration-500" style={{ width: `${score * 10}%` }}></div>
        </div>
        <span className="text-blue-800 font-bold text-lg">{score}/10</span>
      </div>
      <p className="text-xs text-blue-700 mt-3">Contains ingredients that may not align with your health profile and includes banned substances.</p>
    </div>
  );

  export default function IngreliProductDetail() {
    const [currentProfile, setCurrentProfile] = useState('self');
  
    const profileData = {
      self: { allergen: 'dairy', healthScore: 3 },
      partner: { allergen: 'nuts', healthScore: 4 },
      kid1: { allergen: 'gluten', healthScore: 2 },
      kid2: { allergen: 'soy', healthScore: 5 },
    };
  
    return (
      <div className="flex flex-col bg-gray-50 min-h-screen">
        <Header 
          currentProfile={currentProfile}
          onProfileChange={setCurrentProfile}
          productName="Product Name"
        />
        
        <div className="p-6 flex-grow overflow-y-auto">
          <ProductImage />
          
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
          
          <div className="space-y-4 my-6">
            <IngredientCard name="Coffee" icon={Coffee} percentage={35} good />
            <IngredientCard name="Wheat Flour" icon={Wheat} percentage={30} alert={currentProfile === 'kid1'} />
            <IngredientCard name="Milk Powder" icon={Milk} percentage={20} alert={currentProfile === 'self'} />
            <IngredientCard name="Sugar" icon={Candy} percentage={10} alert />
            <IngredientCard name="Preservative X" icon={AlertOctagon} percentage={5} banned />
          </div>
          
          <CalorieCard calories={250} servingSize="100g" />
          
          <HealthScoreCard score={profileData[currentProfile].healthScore} />
        </div>
      </div>
    );
}