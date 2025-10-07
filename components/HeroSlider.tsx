'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% Off',
    description: 'Shop the latest trends in fashion, electronics, and more',
    cta: 'Shop Now',
    link: '/products?category=CLOTHING',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    image: '🌞',
  },
  {
    id: 2,
    title: 'New Electronics',
    subtitle: 'Latest Technology',
    description: 'Discover cutting-edge gadgets and devices',
    cta: 'Explore',
    link: '/products?category=ELECTRONICS',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600',
    image: '💻',
  },
  {
    id: 3,
    title: 'Home Essentials',
    subtitle: 'Transform Your Space',
    description: 'Beautiful furniture and decor for every room',
    cta: 'Browse',
    link: '/products?category=HOME_GARDEN',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    image: '🏡',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          <div className={`h-full bg-gradient-to-br ${slide.gradient} relative overflow-hidden`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" 
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              ></div>
            </div>

            {/* Floating circles animation */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

            {/* Content */}
            <div className="container mx-auto px-16 md:px-20 lg:px-24 h-full flex items-center relative z-10">
              <div className="max-w-2xl text-white pl-4 md:pl-0">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-bounce">
                  <Sparkles size={20} />
                  <span className="font-semibold">{slide.subtitle}</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 animate-slide-up pr-4" style={{animationDelay: '0.1s'}}>
                  {slide.description}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-2xl hover:scale-105 transform duration-200 animate-slide-up"
                  style={{animationDelay: '0.2s'}}
                >
                  {slide.cta}
                </Link>
              </div>

              {/* Large Emoji Display */}
              <div className="hidden lg:block absolute right-24 xl:right-32 text-[250px] xl:text-[300px] opacity-20 animate-pulse">
                {slide.image}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Positioned at edges with proper spacing */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-30 group shadow-2xl border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:scale-110 transition" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/60 backdrop-blur-md hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all z-30 group shadow-2xl border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:scale-110 transition" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
