'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    image: '👩‍💼',
    rating: 5,
    text: 'Amazing quality products! The shipping was super fast and the customer service is outstanding. Will definitely shop here again.',
    product: 'Wireless Headphones',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    image: '👨‍💻',
    rating: 5,
    text: 'Best online shopping experience ever. The website is easy to navigate and the prices are unbeatable. Highly recommended!',
    product: 'Gaming Laptop',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Fashion Enthusiast',
    image: '👩‍🎨',
    rating: 5,
    text: 'Love the fashion collection! Found exactly what I was looking for. The quality exceeded my expectations.',
    product: 'Summer Dress',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Tech Geek',
    image: '👨‍🔬',
    rating: 5,
    text: 'Great selection of electronics at competitive prices. The product descriptions are detailed and accurate.',
    product: 'Smart Watch',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <Star size={16} fill="currentColor" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who love shopping with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-600 dark:text-blue-400 opacity-20">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Product */}
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-4">
                Purchased: {testimonial.product}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg border-2 border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-bold text-gray-900 dark:text-white">4.9</div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                Based on 10,000+ reviews
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            ⭐ Trusted by customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
