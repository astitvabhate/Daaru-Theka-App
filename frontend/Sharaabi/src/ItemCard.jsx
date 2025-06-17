import React from 'react';
import { Flame, Crown } from 'lucide-react';

const ItemCard = ({ item }) => {
  const { name, brand, category, price, quantity, ml, emoji, premium, lastDay } = item;

  // Calculate font size based on name length
  const getFontSize = (name) => {
    if (name.length > 30) return 'text-[18px]';  // Extra small
    if (name.length > 20) return 'text-[20px]';  // Small
    return 'text-[22px]';                        // Default
  };

  const nameFontSize = getFontSize(name);

  return (
    <div className="hover:scale-105 transition-transform duration-300 mt-10 ease-in-out w-[250px] h-[380px]">
      <div className="bg-[#fff8ec] rounded-[25px] border-[3px] border-yellow-400 p-5 shadow-xl relative font-sans h-full flex flex-col">
        {/* Top badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {premium && (
            <div className="bg-[#3366ff] text-white text-xs px-3 py-[3px] rounded-full font-bold flex items-center gap-1 shadow-sm">
              <Crown size={12} className="text-yellow-200" /> PREMIUM
            </div>
          )}
          <div className="bg-[#ff7200] text-white text-xs px-3 py-[3px] rounded-full font-semibold shadow-sm">
            {category}
          </div>
        </div>

        {/* Brand Icon */}
        <div className="mt-10 text-center flex-grow">
          <div className="text-6xl mb-2">
            {emoji}
          </div>

          {/* Brand Name */}
          <div className="bg-yellow-200 text-gray-800 text-xs font-semibold rounded-full px-4 py-1 mt-2 inline-block shadow-sm">
            {brand}
          </div>
        </div>

        {/* Product Name - Dynamic font size */}
        <h2 className={`${nameFontSize} font-bold text-center mt-3 line-clamp-2 h-[3.5rem] leading-tight`}>
          {name}
        </h2>

        {/* ML & MRP */}
        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-sm text-gray-700">📏 {ml}</span>
          <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-[2px] rounded-full">
            MRP
          </span>
        </div>

        {/* Price Tag */}
        <div className="flex justify-center items-center mt-3">
          <div className="bg-[#00bd66] text-white text-2xl font-bold rounded-2xl px-5 py-2 shadow-md border-[3px] border-white relative">
            ₹{price}
            <span className="absolute top-1.5 right-2 h-2 w-2 bg-yellow-400 rounded-full" />
          </div>
        </div>

        {/* Stock */}
        <div className="mt-2 text-center text-[15px] text-gray-800 font-medium">
          <span className="text-orange-500 text-lg">●</span> Stock: {quantity} units
        </div>

        {/* Last Day Show */}
        {lastDay && (
          <div className="border-2 border-orange-300 bg-orange-50 rounded-xl px-4 py-2 text-center mt-3 text-[14px] text-red-700 font-bold flex items-center justify-center gap-2 shadow-inner">
            <Flame size={16} className="text-orange-500" /> LAST DAY LAST SHOW
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;