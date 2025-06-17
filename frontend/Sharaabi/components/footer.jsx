import React from 'react';
import {
  PartyPopper,
  Trophy,
  Laugh,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(circle,_rgba(79,30,51,1)_0%,_rgba(40,55,77,1)_100%)] text-white shadow-[0_-10px_30px_rgba(0,0,0,0.2)] border-t-4 border-white px-6 py-10 text-center">
      <div className="text-5xl mb-4">🙏</div>
      
      <h2 className="text-3xl font-extrabold drop-shadow-md">
        THANK YOU FOR CHOOSING US!
      </h2>

      <p className="mt-4 text-lg font-semibold flex items-center justify-center gap-2">
        <span className="text-yellow-300 text-xl">●</span>
        LIVE UPDATES • REAL-TIME MAGIC
      </p>

      <p className="mt-3 text-base">
        All prices include taxes • Hero delivery within 30 minutes
      </p>

      <p className="text-base">
        Customer support: <span className="font-semibold">+91-9876543210</span> • WhatsApp orders accepted 24/7
      </p>

      <div className="flex justify-center gap-6 text-2xl mt-6">
        <span className="font-bold">IN</span>
        <PartyPopper />
        <Trophy />
        <Laugh />
      </div>

      <p className="mt-6 text-sm text-white font-semibold">
        Please drink responsibly • Must be 25+ • Enjoy the show responsibly!
      </p>
      <p>© 2025 Sharaabi – Powered by Passion, Served with Style.</p>
    </footer>
  );
};

export default Footer;
