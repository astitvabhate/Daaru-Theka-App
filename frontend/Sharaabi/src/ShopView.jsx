import React, { useState, useMemo } from 'react';
import Footer from '../components/footer';
import WhichTheka from '../components/whichTheka';
import { Search, X } from 'lucide-react';
import ItemCard from './ItemCard';

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
      { id: 32, name: "Jim Beam", price: 3200, quantity: 6, category: "Whisky", brand: "Beam Suntory", ml: "750ml", emoji: "🇺🇸", premium: true },
      { id: 33, name: "Smirnoff Vodka", price: 900, quantity: 30, category: "Vodka", brand: "Diageo", ml: "750ml", emoji: "🍸" },
      { id: 34, name: "Old Monk Rum", price: 800, quantity: 60, category: "Rum", brand: "Mohan Meakin", ml: "750ml", emoji: "👑" },
      { id: 35, name: "Bira 91 Blonde", price: 180, quantity: 50, category: "Beer", brand: "B9 Beverages", ml: "650ml", emoji: "🍺" },
      { id: 36, name: "Chivas Regal", price: 5000, quantity: 2, category: "Whisky", brand: "Pernod Ricard", ml: "750ml", emoji: "👑", premium: true },
      { id: 37, name: "Belvedere Vodka", price: 4000, quantity: 4, category: "Vodka", brand: "LVMH", ml: "750ml", emoji: "🍸", premium: true },
      { id: 38, name: "Monkey Shoulder", price: 3500, quantity: 8, category: "Whisky", brand: "William Grant & Sons", ml: "750ml", emoji: "🐒", premium: true },
      { id: 39, name: "Bacardi Superior", price: 1200, quantity: 35, category: "Rum", brand: "Bacardi", ml: "750ml", emoji: "🍹" },
      { id: 40, name: "Sula Sauvignon Blanc", price: 1300, quantity: 12, category: "Wine", brand: "Sula Vineyards", ml: "750ml", emoji: "🍇" },
      { id: 41, name: "Kingfisher Ultra", price: 200, quantity: 65, category: "Beer", brand: "UBL", ml: "650ml", emoji: "🍺", popular: true },
      { id: 42, name: "Absolut Vodka", price: 1500, quantity: 20, category: "Vodka", brand: "Pernod Ricard", ml: "750ml", emoji: "🍸" },
      { id: 43, name: "Royal Challenge Whisky", price: 900, quantity: 45, category: "Whisky", brand: "Shaw Wallace", ml: "750ml", emoji: "👑" },
      { id: 44, name: "Blenders Pride", price: 1200, quantity: 30, category: "Whisky", brand: "Pernod Ricard", ml: "750ml", emoji: "🥃" },
      { id: 45, name: "Red Bull Vodka", price: 2500, quantity: 10, category: "Vodka", brand: "Red Bull GmbH", ml: "750ml", emoji: "🐂" }
    ]
  };

  const categories = ['All', 'Whisky', 'Rum', 'Beer', 'Vodka', 'Gin', 'Wine'];

  const filteredItems = useMemo(() => {
    return thekaData.items.filter(item => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = item.name.toLowerCase().includes(term) ||
        item.brand.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term);
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
      Gin: "from-green-300 via-blue-300 to-purple-300",
      Wine: "from-purple-400 via-pink-500 to-red-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('All');
  };

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle,_rgba(79,30,51,1)_0%,_rgba(40,55,77,1)_100%)]">
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c5-10 20-15 20 0-5 10-20 15-20 0zm0 0c-5 10-20 15-20 0 5-10 20-15 20 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto pb-10 px-4 sm:px-6 lg:px-8">
          <WhichTheka thekaData={thekaData} />

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb- p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg w-full md:w-1/2">
              <Search className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search by name, brand, or category..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-700"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')}>
                  <X className="text-gray-400 hover:text-red-500" />
                </button>
              )}
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-bold border-2 transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white border-yellow-400 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-yellow-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} getCategoryColor={getCategoryColor} />
            ))}
          </div>

          {/* No Items Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">❌</div>
              <h3 className="text-4xl font-black text-white mb-4">NO LIQUOR FOUND!</h3>
              <p className="text-white text-xl mb-6">Sorry, we couldn't find any liquor matching your criteria.</p>
              <button
                onClick={clearSearch}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-black text-lg rounded-full hover:from-yellow-500 hover:to-red-600 border-4 border-white transform hover:scale-110"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </div>
  );
};

export default ShopView;
