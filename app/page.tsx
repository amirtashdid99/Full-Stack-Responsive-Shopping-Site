import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { ArrowRight, Star, Zap, Shield, Truck, RefreshCw, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Suspense } from 'react';
import { ProductGridSkeleton } from '@/components/SkeletonLoader';
import HeroSlider from '@/components/HeroSlider';
import PromoBanner from '@/components/PromoBanner';
import Newsletter from '@/components/Newsletter';
import ProductCarousel from '@/components/ProductCarousel';
import Testimonials from '@/components/Testimonials';
import DealsSection from '@/components/DealsSection';

async function FeaturedProducts() {
  const featuredProducts = await prisma.product.findMany({
    where: { featured: true },
    take: 6,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProducts.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          className="group"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-900">
              <Image
                src={product.imageUrl}
                alt={`${product.name} - Premium ${product.category.toLowerCase().replace('_', ' and ')} product`}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                unoptimized
                loading="lazy"
              />
              {product.comparePrice && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  SALE
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{product.name}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.comparePrice && (
                    <span className="text-sm text-gray-500 dark:text-gray-500 line-through ml-2">
                      ${product.comparePrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400 text-sm font-medium">4.5</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

async function TrendingProducts() {
  const trendingProducts = await prisma.product.findMany({
    take: 8,
    orderBy: { createdAt: 'desc' },
  });

  return <ProductCarousel products={trendingProducts} title="🔥 Trending Now" />;
}

export default function Home() {

  // Fetch categories with product counts
  const categories = [
    { name: 'Electronics', value: 'ELECTRONICS', icon: '💻' },
    { name: 'Clothing', value: 'CLOTHING', icon: '👔' },
    { name: 'Home & Garden', value: 'HOME_GARDEN', icon: '🏡' },
    { name: 'Sports', value: 'SPORTS_OUTDOORS', icon: '⚽' },
    { name: 'Beauty', value: 'BEAUTY', icon: '💄' },
    { name: 'Jewelry', value: 'JEWELRY', icon: '💎' },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Promo Banner */}
      <PromoBanner />

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.value}
                href={`/products?category=${category.value}`}
                className="bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 p-6 rounded-lg text-center hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 group hover:scale-105 transform"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
            <Link
              href="/products"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold flex items-center space-x-2 transition"
            >
              <span>View All</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <Suspense fallback={<ProductGridSkeleton count={6} />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>

      {/* Trending Products Carousel */}
      <Suspense fallback={<div className="py-16 text-center">Loading trending products...</div>}>
        <TrendingProducts />
      </Suspense>

      {/* Trust Badges Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Truck className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">Free Shipping</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Shield className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">Secure Payment</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <RefreshCw className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">Easy Returns</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">30-Day Policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 group">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Award className="text-yellow-600 dark:text-yellow-400" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-gray-900 dark:text-white">Best Quality</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Premium Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-blue-100">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">4.8★</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">99%</div>
              <div className="text-blue-100">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Deals Section */}
      <DealsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}
