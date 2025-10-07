'use client';

import { useState, useEffect } from 'react';
import { X, Gift, Sparkles } from 'lucide-react';

interface Prize {
  id: number;
  label: string;
  color: string;
  value: string;
  code: string;
}

const prizes: Prize[] = [
  { id: 1, label: '10% OFF', color: '#FF6B6B', value: '10% Discount', code: 'LUCKY10' },
  { id: 2, label: 'Free Shipping', color: '#4ECDC4', value: 'Free Shipping', code: 'FREESHIP' },
  { id: 3, label: '15% OFF', color: '#FFD93D', value: '15% Discount', code: 'LUCKY15' },
  { id: 4, label: '$5 OFF', color: '#95E1D3', value: '$5 Discount', code: 'SAVE5' },
  { id: 5, label: '20% OFF', color: '#F38181', value: '20% Discount', code: 'LUCKY20' },
  { id: 6, label: 'Try Again', color: '#AA96DA', value: 'Better luck next time!', code: '' },
  { id: 7, label: '25% OFF', color: '#FCBAD3', value: '25% Discount', code: 'LUCKY25' },
  { id: 8, label: '$10 OFF', color: '#A8D8EA', value: '$10 Discount', code: 'SAVE10' },
];

export default function LuckyWheel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState<Prize | null>(null);
  const [hasSpun, setHasSpun] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if user hasn't spun before
    const hasSpunBefore = localStorage.getItem('hasSpunWheel');
    if (!hasSpunBefore) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const spinWheel = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setPrize(null);

    // Random prize selection
    const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];
    const prizeAngle = (360 / prizes.length) * selectedPrize.id;
    const spinRotations = 360 * 5; // 5 full rotations
    const finalRotation = spinRotations + prizeAngle;

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setPrize(selectedPrize);
      setHasSpun(true);
      localStorage.setItem('hasSpunWheel', 'true');
      
      // Copy code to clipboard if available
      if (selectedPrize.code) {
        navigator.clipboard.writeText(selectedPrize.code);
      }
    }, 4000);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={closeModal}
    >
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-xl w-full p-4 sm:p-8 animate-scale-in my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition z-10"
          aria-label="Close"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Gift className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Spin to Win!
            </h2>
            <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg">
            Try your luck and win amazing discounts!
          </p>
        </div>

        {/* Wheel Container */}
        <div className="relative flex justify-center items-center mb-4 sm:mb-8">
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 sm:-translate-y-4 z-20">
            <div className="w-0 h-0 border-l-[15px] sm:border-l-[20px] border-l-transparent border-r-[15px] sm:border-r-[20px] border-r-transparent border-t-[30px] sm:border-t-[40px] border-t-red-500 dark:border-t-red-400 drop-shadow-lg"></div>
          </div>

          {/* Wheel */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full shadow-2xl overflow-hidden">
            <svg
              className="w-full h-full transition-transform duration-4000 ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
              viewBox="0 0 100 100"
            >
              {prizes.map((prize, index) => {
                const angle = (360 / prizes.length) * index;
                const nextAngle = (360 / prizes.length) * (index + 1);
                const startAngle = (angle * Math.PI) / 180;
                const endAngle = (nextAngle * Math.PI) / 180;
                const largeArc = nextAngle - angle > 180 ? 1 : 0;

                const x1 = 50 + 50 * Math.cos(startAngle);
                const y1 = 50 + 50 * Math.sin(startAngle);
                const x2 = 50 + 50 * Math.cos(endAngle);
                const y2 = 50 + 50 * Math.sin(endAngle);

                const textAngle = angle + 360 / prizes.length / 2;
                const textRadius = 35;
                const textX = 50 + textRadius * Math.cos((textAngle * Math.PI) / 180);
                const textY = 50 + textRadius * Math.sin((textAngle * Math.PI) / 180);

                return (
                  <g key={prize.id}>
                    <path
                      d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`}
                      fill={prize.color}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                    <text
                      x={textX}
                      y={textY}
                      fill="white"
                      fontSize="4"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textAngle + 90}, ${textX}, ${textY})`}
                    >
                      {prize.label}
                    </text>
                  </g>
                );
              })}
              {/* Center circle */}
              <circle cx="50" cy="50" r="10" fill="white" stroke="#333" strokeWidth="1" />
              <circle cx="50" cy="50" r="7" fill="#FFD700" />
            </svg>
          </div>
        </div>

        {/* Spin Button or Prize Display */}
        {!prize ? (
          <div className="text-center">
            <button
              onClick={spinWheel}
              disabled={isSpinning || hasSpun}
              className={`px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-bold rounded-full transition-all transform ${
                isSpinning || hasSpun
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {isSpinning ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  Spinning...
                </span>
              ) : hasSpun ? (
                'Already Spun!'
              ) : (
                'SPIN THE WHEEL!'
              )}
            </button>
          </div>
        ) : (
          <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🎉 Congratulations! 🎉
              </h3>
              <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
                You won: {prize.value}
              </p>
              {prize.code && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 mt-4">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Your Coupon Code:
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                    {prize.code}
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                    ✓ Copied to clipboard!
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={closeModal}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
            >
              Start Shopping!
            </button>
          </div>
        )}

        <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6">
          * You can only spin once. Use your coupon code at checkout!
        </p>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .duration-4000 {
          transition-duration: 4000ms;
        }
      `}</style>
    </div>
  );
}
