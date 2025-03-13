// import React from 'react';
// import { Apple, Carrot, ShoppingBag, Milk,Cookie } from 'lucide-react'; // Added more icons

// const Hero = () => (
//   <section className="relative bg-green-50 py-16 px-6 text-center overflow-hidden">
//     {/* Floating Icons */}
//     <div className='hidden sm:block'>
//     <FloatingIcon Icon={Apple} position="top-8 left-8" color="text-red-500" delay="0s" />
//     <FloatingIcon Icon={Carrot} position="top-16 right-16" color="text-red-500" delay="0.2s" />
//     <FloatingIcon Icon={ShoppingBag} position="bottom-12 left-24" color="text-green-700" delay="0.4s" />
//     <FloatingIcon Icon={Milk} position="bottom-24 right-20" color="text-blue-400" delay="0.8s" />
//     </div>

//     {/* Hide on smaller screens */}
//     <div className="hidden md:block">
//         <FloatingIcon Icon={Cookie} position="top-12 right-1/4" color="text-yellow-800" delay="1s" />
//     </div>


//     {/* Headline */}
//     <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
//       Discover what's inside <br /> your products with Ingreli.
//     </h1>

//     {/* Subtext */}
//     <p className="max-w-2xl mx-auto text-green-800 text-lg mb-8">
//       Make informed choices by understanding product ingredients in a simple and easy-to-understand way.
//     </p>

//     {/* Call-to-action buttons */}
//     <div className="flex justify-center space-x-4">
//       <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700">
//         Get Started
//       </button>
//       <button className="bg-white text-green-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100">
//       Learn More
//       </button>
//     </div>

//   </section>
// );

// const FloatingIcon = ({ Icon, position, color, delay, duration = '5s' }) => (
//     <div
//       className={`absolute ${position} animate-float`}
//       style={{ animationDelay: delay, animationDuration: duration }}
//     >
//       <Icon className={`w-10 h-10 ${color} opacity-80`} />
//     </div>
//   );
  

// export default Hero;

import React from 'react';
import { Apple, Carrot, ShoppingBag, Milk, Cookie } from 'lucide-react';

const Hero = () => (
  <section className="relative bg-green-50 py-16 px-6 text-center overflow-hidden">
    <div className="relative max-w-7xl mx-auto">
      {/* Floating Icons */}
      <div className="hidden sm:block">
        <FloatingIcon Icon={Apple} position="top-8 left-4" color="text-red-500" delay="0s" />
        <FloatingIcon Icon={Carrot} position="top-16 right-4" color="text-orange-500" delay="0.2s" />
        <FloatingIcon Icon={ShoppingBag} position="bottom-12 left-12" color="text-green-700" delay="0.4s" />
        <FloatingIcon Icon={Milk} position="bottom-10 right-12" color="text-blue-400" delay="0.8s" />
      </div>

      {/* Additional icon for larger screens */}
      <div className="hidden md:block">
        <FloatingIcon Icon={Cookie} position="bottom-8 left-2/3" color="text-yellow-800" delay="1s" />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
        Discover what's inside <br /> your products with Ingreli.
      </h1>

      {/* Subtext */}
      <p className="max-w-2xl mx-auto text-green-800 text-lg mb-8">
        Make informed choices by understanding product ingredients in a simple and easy-to-understand way.
      </p>

      {/* Call-to-action buttons */}
      <div className="flex justify-center space-x-4">
        <button className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-700">
          Download App
        </button>
        <button className="bg-white text-green-800 font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-100">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

const FloatingIcon = ({ Icon, position, color, delay, duration = '5s' }) => (
  <div
    className={`absolute ${position} animate-float`}
    style={{ animationDelay: delay, animationDuration: duration }}
  >
    <Icon className={`w-10 h-10 ${color} opacity-80`} />
  </div>
);

export default Hero;
