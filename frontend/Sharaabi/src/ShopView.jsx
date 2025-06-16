import React, { useState, useMemo } from 'react';
import { Search, Star, MapPin, Clock, Truck, Shield, Award, Filter, X, Sparkles, Heart, Crown } from 'lucide-react';

const ShopView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const thekaData = {
    name: "ROYAL THEKA",
    subtitle: "Mumbai's Best Liquor Hub",
    id: "LIC-MH-2024-001",
    location: "Film City Road, Mumbai",
    items: [
       { id: 13, name: "Tuborg Strong", price: 160, quantity: 70, category: "Beer", brand: "Carlsberg", ml: "650ml", emoji: "🍻", popular: true },
  { id: 14, name: "Jack Daniel's", price: 3500, quantity: 10, category: "Whisky", brand: "Brown-Forman", ml: "750ml", emoji: "🥃", premium: true },
  { id: 15, name: "Captain Morgan", price: 1350, quantity: 20, category: "Rum", brand: "Diageo", ml: "750ml", emoji: "🏴‍☠️", popular: true },
  { id: 16, name: "Johnnie Walker Black", price: 4200, quantity: 5, category: "Whisky", brand: "Diageo", ml: "750ml", emoji: "🎩", premium: true },
  { id: 17, name: "Beefeater Gin", price: 2600, quantity: 0, category: "Gin", brand: "Pernod Ricard", ml: "750ml", emoji: "🍸" },
  { id: 18, name: "Heineken", price: 190, quantity: 55, category: "Beer", brand: "Heineken", ml: "650ml", emoji: "🍺", popular: true },
  { id: 19, name: "Amrut Fusion", price: 3800, quantity: 4, category: "Whisky", brand: "Amrut Distilleries", ml: "750ml", emoji: "🔥", premium: true },
  { id: 20, name: "Magic Moments", price: 950, quantity: 25, category: "Vodka", brand: "Radico Khaitan", ml: "750ml", emoji: "✨" },
  { id: 21, name: "Carlsberg Smooth", price: 175, quantity: 45, category: "Beer", brand: "Carlsberg", ml: "650ml", emoji: "🍻" },
  { id: 22, name: "8 PM Whisky", price: 700, quantity: 50, category: "Whisky", brand: "Radico Khaitan", ml: "750ml", emoji: "🕗", popular: true },
  { id: 23, name: "Antiquity Blue", price: 1550, quantity: 14, category: "Whisky", brand: "UBL", ml: "750ml", emoji: "💎", premium: true },
  { id: 24, name: "Desperados", price: 230, quantity: 30, category: "Beer", brand: "Heineken", ml: "500ml", emoji: "🌶️" },
  { id: 25, name: "Grey Goose", price: 4500, quantity: 3, category: "Vodka", brand: "Bacardi", ml: "750ml", emoji: "🕊️", premium: true },
  { id: 26, name: "Kingfisher Strong", price: 160, quantity: 70, category: "Beer", brand: "UBL", ml: "650ml", emoji: "🍺" },
  { id: 27, name: "Havana Club", price: 1250, quantity: 18, category: "Rum", brand: "Pernod Ricard", ml: "750ml", emoji: "🌴" },
  { id: 28, name: "White Mischief", price: 600, quantity: 50, category: "Vodka", brand: "UBL", ml: "750ml", emoji: "😈" },
  { id: 29, name: "Sula Red Wine", price: 950, quantity: 20, category: "Wine", brand: "Sula", ml: "750ml", emoji: "🍷" },
  { id: 30, name: "Fratelli Chenin Blanc", price: 1100, quantity: 15, category: "Wine", brand: "Fratelli", ml: "750ml", emoji: "🧀" },
  { id: 31, name: "Budweiser Magnum", price: 210, quantity: 40, category: "Beer", brand: "AB InBev", ml: "650ml", emoji: "🍺", premium: true },
  { id: 32, name: "Jim Beam", price: 3200, quantity: 6, category: "Whisky", brand: "Beam Suntory", ml: "750ml", emoji: "🇺🇸", premium: true }
    ]

  };

  const categories = ['All', 'Whisky', 'Rum', 'Beer', 'Vodka'];

  const filteredItems = useMemo(() => {
    return thekaData.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.bollywood.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category) => {
    const colors = {
      Whisky: "from-yellow-400 via-orange-500 to-red-600",
      Rum: "from-amber-400 via-orange-500 to-red-500", 
      Beer: "from-yellow-300 via-amber-400 to-orange-500",
      Vodka: "from-blue-400 via-purple-500 to-pink-500",
      Wine: "from-purple-400 via-pink-500 to-red-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Bollywood Style Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-red-600 to-yellow-500"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c5-10 20-15 20 0-5 10-20 15-20 0zm0 0c-5 10-20 15-20 0 5-10 20-15 20 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}>
      </div>

      {/* Sparkle Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-yellow-300 animate-pulse text-2xl">✨</div>
        <div className="absolute top-1/3 right-1/4 text-pink-300 animate-bounce text-xl">💫</div>
        <div className="absolute bottom-1/4 left-1/3 text-orange-300 animate-pulse text-2xl">⭐</div>
        <div className="absolute top-1/2 right-1/3 text-red-300 animate-bounce text-xl">🌟</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4">
        {/* Bollywood Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block p-8 rounded-3xl bg-gradient-to-br from-yellow-400 via-red-500 to-pink-600 shadow-2xl mb-6 transform hover:scale-105 transition-all duration-500 border-4 border-white overflow-hidden">
            {/* Decorative Border Pattern */}
            <div className="absolute inset-0 border-8 border-yellow-300 rounded-3xl opacity-50"></div>
            <div className="absolute inset-2 border-4 border-pink-300 rounded-2xl opacity-30"></div>
            
            {/* Crown and Stars */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Crown className="w-12 h-12 text-yellow-300 fill-yellow-300" />
            </div>
            
            <div className="text-8xl mb-4 drop-shadow-2xl">🍷</div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-wider drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
                style={{
                  textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)',
                  fontFamily: 'Impact, Arial Black, sans-serif'
                }}>
              {thekaData.name}
            </h1>
            <p className="text-2xl text-yellow-100 font-bold mb-4 tracking-widest"
               style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
              {thekaData.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-white">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border-2 border-yellow-300">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-bold">License: {thekaData.id}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border-2 border-yellow-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold">{thekaData.location}</span>
              </div>
            </div>
            
            {/* Bollywood Star Rating */}
            <div className="flex items-center justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300 animate-pulse" />
              ))}
              <span className="ml-2 text-white font-black text-lg drop-shadow-lg">4.9 (5,000+ reviews)</span>
            </div>

            {/* Decorative Hearts */}
            <div className="absolute top-4 left-4">
              <Heart className="w-6 h-6 text-pink-300 fill-pink-300 animate-pulse" />
            </div>
            <div className="absolute top-4 right-4">
              <Heart className="w-6 h-6 text-pink-300 fill-pink-300 animate-pulse" />
            </div>
          </div>

          {/* Bollywood Service Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 border-2 border-white shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-black text-sm">BOOK BEFORE MIDNIGHT</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 border-2 border-white shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Truck className="w-5 h-5 text-white" />
              <span className="text-white font-black text-sm">FAST DELIVERY</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-2 border-white shadow-2xl transform hover:scale-110 transition-all duration-300">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-black text-sm">ENJOY RESPONSIBLY</span>
            </div>
          </div>
        </div>

        {/* Bollywood Search Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for your favorite hero's choice..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-12 py-4 text-lg rounded-2xl border-4 border-yellow-400 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all duration-300 shadow-2xl bg-white font-bold"
                style={{boxShadow: '0 0 20px rgba(255,193,7,0.5)'}}
              />
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-red-500 hover:text-red-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter - Bollywood Style */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-white font-black text-lg drop-shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span>CATEGORIES:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-black text-lg transition-all duration-300 border-4 transform hover:scale-110 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white border-white shadow-2xl scale-110'
                    : 'bg-white text-gray-800 border-yellow-400 hover:border-pink-400 hover:bg-yellow-50 shadow-xl'
                }`}
                style={{
                  textShadow: selectedCategory === category ? '2px 2px 4px rgba(0,0,0,0.5)' : 'none',
                  boxShadow: selectedCategory === category ? '0 0 20px rgba(255,193,7,0.8)' : '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Results Info */}
          {(searchTerm || selectedCategory !== 'All') && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white shadow-xl">
                <span className="text-white font-black">
                  🎯 FOUND {filteredItems.length} BLOCKBUSTERS
                  {searchTerm && ` FOR "${searchTerm.toUpperCase()}"`}
                  {selectedCategory !== 'All' && ` IN ${selectedCategory.toUpperCase()}`}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Items Grid - Bollywood Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-yellow-50 to-orange-50 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 hover:scale-105 border-4 border-yellow-400 hover:border-pink-500"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,193,7,0.3)'
              }}
            >
              {/* Special Badges */}
              {item.popular && (
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white text-xs px-3 py-1 rounded-full font-black border-2 border-white">
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}
              
              {item.premium && (
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-black border-2 border-white">
                    👑 PREMIUM
                  </div>
                </div>
              )}

              {/* Bollywood Border Pattern */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"></div>
              
              <div className="relative p-5">
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-black text-white bg-gradient-to-r ${getCategoryColor(item.category)} shadow-lg border-2 border-white`}>
                    {item.category}
                  </div>
                </div>

                {/* Item Emoji & Brand */}
                <div className="flex items-center gap-3 mb-4 mt-6">
                  <div className="text-5xl transform group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                    {item.emoji}
                  </div>
                  <div className="text-xs text-gray-700 font-black bg-yellow-200 px-3 py-1 rounded-full border border-yellow-400">
                    {item.brand}
                  </div>
                </div>

                {/* Item Name */}
                <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300"
                    style={{textShadow: '1px 1px 2px rgba(0,0,0,0.1)'}}>
                  {item.name}
                </h3>
                
                
                {/* ML Info */}
                <div className="text-sm text-gray-700 mb-4 font-bold">
                  📏 {item.ml}
                </div>

                {/* Price Tag - Bollywood Style */}
                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 border-3 border-white group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300 shadow-xl">
                    <span className="text-3xl font-black text-white drop-shadow-lg">
                      ₹{item.price}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-yellow-300 animate-pulse border border-white"></div>
                  </div>
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-black transform rotate-12 border-2 border-white">
                    MRP
                  </div>
                </div>

                {/* Stock & Availability */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-800">
                      <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="text-sm font-bold">Stock: {item.quantity} units</span>
                    </div>
                  </div>
                  
                  {/* Availability Indicator - Bollywood Style */}
                  <div className={`text-center py-3 rounded-2xl text-sm font-black border-2 ${
                    item.quantity > 20 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-400' 
                      : item.quantity > 10 
                      ? 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-400' 
                      : item.quantity > 0
                      ? 'bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-400'
                      : 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-400'
                  }`}>
                    {item.quantity > 20 ? '✅ AVAILABLE NOW' : 
                     item.quantity > 10 ? '🔥 LIMITED STOCK' : 
                     item.quantity > 2 ? '⚠️ LAST FEW ITEMS' : 
                     '❌ OUT OF STOCK'}
                  </div>
                </div>

                {/* Bottom decorative border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results - Bollywood Style */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-4">🎬</div>
            <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">NO SHOWS FOUND!</h3>
            <p className="text-white text-xl mb-6 drop-shadow-md">
              This combination is not available in our collection
            </p>
            <button
              onClick={clearSearch}
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black text-lg rounded-full hover:from-yellow-500 hover:to-red-600 transition-all duration-300 shadow-2xl border-4 border-white transform hover:scale-110"
              style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}
            >
              🎭 RESET & EXPLORE ALL
            </button>
          </div>
        )}

        {/* Footer - Bollywood Style */}
        <div className="text-center mt-12 p-8 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 border-4 border-white shadow-2xl">
          <div className="text-6xl mb-4">🙏</div>
          <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg"
              style={{textShadow: '3px 3px 0px #000'}}>
            THANK YOU FOR CHOOSING US!
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-4 h-4 rounded-full bg-yellow-300 animate-pulse"></div>
            <span className="text-white font-bold text-lg drop-shadow-md">LIVE UPDATES • REAL-TIME MAGIC</span>
          </div>
          <p className="text-white text-sm mb-4 drop-shadow-md">
            All prices include taxes • Hero delivery within 30 minutes<br/>
            Customer support: +91-9876543210 • WhatsApp orders accepted 24/7
          </p>
          <div className="flex justify-center gap-6 text-4xl">
            <span className="animate-bounce">🇮🇳</span>
            <span className="animate-pulse">🎉</span>
            <span className="animate-bounce">🏆</span>
            <span className="animate-pulse">🎭</span>
          </div>
          <p className="text-xs text-yellow-100 mt-4 font-bold">
            Please drink responsibly • Must be 25+ • Enjoy the show responsibly!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopView;