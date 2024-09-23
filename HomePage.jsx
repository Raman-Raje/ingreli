import React, { useState } from 'react';
import { Search, Camera, BarChart2, User, Heart, AlertCircle, Coffee, Wheat, Milk } from 'lucide-react';

const Header = ({ onProfileChange }) => (
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-b-3xl shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold text-white">Ingreli</h1>
      <button onClick={onProfileChange} className="bg-white rounded-full p-3 shadow-md focus:ring-2 focus:ring-blue-300">
        <User className="text-blue-500" size={28} />
      </button>
    </div>
    <div className="relative mt-4">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full bg-white rounded-full py-3 px-4 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-600 transition duration-150">
        <Camera size={20} />
      </button>
    </div>
  </div>
);

const QuickStats = () => (
  <div className="bg-white rounded-xl shadow-md p-6 mx-4 mt-6">
    <div className="flex justify-between">
      <div className="text-center">
        <p className="text-sm text-gray-500">Daily Score</p>
        <p className="text-2xl font-bold text-blue-600">8.5</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Scanned</p>
        <p className="text-2xl font-bold text-purple-600">12</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Avoided</p>
        <p className="text-2xl font-bold text-green-600">3</p>
      </div>
    </div>
  </div>
);

const ProductCard = ({ name, healthScore, warning }) => (
    <div className="bg-white rounded-xl shadow-lg p-4 mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center">
          <Heart className="text-red-500 mr-1" size={18} />
          <span className="text-sm font-medium text-gray-700">{healthScore}/10</span>
        </div>
      </div>
      {warning && (
        <div className="flex items-center bg-yellow-100 text-yellow-700 p-3 rounded-md text-sm">
          <AlertCircle className="mr-2" size={18} />
          {warning}
        </div>
      )}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-2">
          <Coffee className="text-brown-500" size={22} title="Contains Coffee" />
          <Wheat className="text-yellow-500" size={22} title="Contains Wheat" />
          <Milk className="text-blue-300" size={22} title="Contains Milk" />
        </div>
        <button className="text-blue-500 text-sm font-medium hover:underline">Details</button>
      </div>
    </div>
  );

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 shadow-lg">
      <button className="text-blue-500 flex flex-col items-center focus:ring-2 focus:ring-blue-300">
        <Search size={24} />
        <span className="text-xs mt-1">Search</span>
      </button>
      <button className="text-gray-500 flex flex-col items-center hover:text-blue-500 focus:ring-2 focus:ring-blue-300">
        <BarChart2 size={24} />
        <span className="text-xs mt-1">Stats</span>
      </button>
      <button className="text-gray-500 flex flex-col items-center hover:text-blue-500 focus:ring-2 focus:ring-blue-300">
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  );
  

const ImprovedIngreliUI = () => {
  const [currentProfile, setCurrentProfile] = useState('self');

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <Header onProfileChange={() => setCurrentProfile(currentProfile === 'self' ? 'partner' : 'self')} />
      <QuickStats />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Recently Scanned</h2>
        <ProductCard 
          name="Organic Coffee Blend" 
          healthScore={8} 
          warning={currentProfile === 'partner' ? "Contains caffeine" : null}
        />
        <ProductCard 
          name="Whole Wheat Bread" 
          healthScore={7} 
          warning={null}
        />
        <ProductCard 
          name="Low-Fat Milk" 
          healthScore={6} 
          warning={currentProfile === 'self' ? "Contains lactose" : null}
        />
      </div>
      <BottomNav />
    </div>
  );
};

export default ImprovedIngreliUI;