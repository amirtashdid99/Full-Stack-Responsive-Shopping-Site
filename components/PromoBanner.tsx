'use client';

import Link from 'next/link';
import { Tag, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white py-3 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-4 text-center flex-wrap">
          <div className="flex items-center gap-2 animate-bounce">
            <Tag size={20} />
            <span className="font-bold text-lg">SPECIAL OFFER</span>
          </div>
          <span className="hidden md:inline">|</span>
          <p className="font-semibold">
            🎉 Get <span className="text-2xl font-bold">20% OFF</span> on your first order! Use code:{' '}
            <span className="bg-white text-orange-600 px-3 py-1 rounded-lg font-bold ml-2">WELCOME20</span>
          </p>
          <Link
            href="/products"
            className="bg-white text-orange-600 px-4 py-1.5 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            <TrendingUp size={16} />
            Shop Now
          </Link>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
        aria-label="Close banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
