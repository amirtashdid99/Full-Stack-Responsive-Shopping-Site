import Link from 'next/link';
import { Tag, Zap, TrendingUp } from 'lucide-react';

export default function DealsSection() {
  const deals = [
    {
      title: 'Flash Sale',
      discount: '50% OFF',
      category: 'Electronics',
      link: '/products?category=ELECTRONICS',
      gradient: 'from-orange-500 to-red-600',
      icon: <Zap size={32} />,
      endTime: '24:00:00',
    },
    {
      title: 'Summer Collection',
      discount: '30% OFF',
      category: 'Clothing',
      link: '/products?category=CLOTHING',
      gradient: 'from-pink-500 to-purple-600',
      icon: <Tag size={32} />,
      endTime: '48:00:00',
    },
    {
      title: 'Best Sellers',
      discount: 'Up to 40% OFF',
      category: 'All Categories',
      link: '/products',
      gradient: 'from-blue-500 to-cyan-600',
      icon: <TrendingUp size={32} />,
      endTime: '72:00:00',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Zap size={16} />
            <span>Limited Time Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Special Deals Just for You
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Don&apos;t miss out on these incredible savings!
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deals.map((deal, index) => (
            <Link
              key={index}
              href={deal.link}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${deal.gradient} rounded-2xl p-8 text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Animated Circle */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {deal.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-white/80 mb-4">{deal.category}</p>
                  
                  <div className="text-5xl font-bold mb-6 animate-pulse">
                    {deal.discount}
                  </div>

                  {/* Timer */}
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    ⏰ Ends in: {deal.endTime}
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 inline-flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    <span>Shop Now</span>
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
