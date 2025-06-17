import React from 'react';
import { MapPin, ShieldCheck, Star } from 'lucide-react';

const WhichTheka = ({ thekaData = {} }) => {
  const { name, subtitle, id, location } = thekaData;
  return (
    <div className="bg-[radial-gradient(circle,_hsla(192,_26%,_53%,_1)_0%,_hsla(224,_12%,_18%,_1)_98%)] m-10 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-white/20 relative max-w-xl mx-auto mt-8 text-center text-white backdrop-blur-sm">
      {/* Glass Icon */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-full">
        <div className="text-3xl">🍷</div>
      </div>

      {/* Title */}
      <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-md tracking-wide mt-4">
        {name}
      </h1>

      {/* Subtext */}
      <p className="text-lg mt-2 font-medium text-yellow-200">
        {subtitle}
      </p>

      {/* License & Location */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
          <ShieldCheck size={16} /> License: {id}
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm">
          <MapPin size={16} /> {location}
        </div>
      </div>

      {/* Ratings */}
      <div className="flex justify-center items-center gap-1 mt-4 text-yellow-300 text-base font-bold">
        {Array(5).fill().map((_, i) => (
          <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
        ))}
        <span className="ml-2 text-white/90 font-medium text-sm">
          4.1 (5,000+ reviews)
        </span>
      </div>
    </div>
  );
};

export default WhichTheka;

