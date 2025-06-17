import React from 'react'

const BrandLogo = () => {
  return (
    <div className="text-center py-4 bg-[radial-gradient(circle,rgba(79,30,51,1)_0%,rgba(40,55,77,1)_100%)]">
      <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest bg-clip-text text-transparent 
                     bg-gradient-to-r from-yellow-300 via-white to-pink-300 
                     drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] px-4">
        SHARAABI
      </h1>
      <p className="text-lg text-white/80 mt-2 font-medium">
        Discover the Best of Booze, All in One Place
      </p>
    </div>
  )
}
export default BrandLogo