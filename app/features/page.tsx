import Link from 'next/link';
import { 
  ShoppingBag, Sparkles, Shield, Zap, Heart, TrendingUp, 
  Eye, Smartphone, Search, Package, CreditCard, Bell,
  Lock, RefreshCw, Star, BarChart3, MessageSquare, Truck,
  CheckCircle, Clock, Globe, Layers, Code, Database, ShoppingCart, User, Webhook
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Amir\'s Shop',
  description: 'Explore 25+ powerful features that make Amir\'s Shop the best choice for online shopping - from authentication to secure payments.',
};

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <User size={40} />,
      title: 'User Authentication',
      description: 'Secure user accounts with NextAuth.js v5. Email/password login, JWT sessions, and protected routes for a safe shopping experience.',
      technical: 'NextAuth.js v5 + bcrypt + JWT sessions',
      gradient: 'from-indigo-500 to-purple-500',
      highlights: ['Secure login', 'Password hashing', 'Session management', 'Protected routes'],
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'Real-Time Shopping Cart',
      description: 'Dynamic cart with live updates, quantity controls, and persistent storage. Cart syncs across tabs and stays saved between sessions.',
      technical: 'Zustand + localStorage + real-time updates',
      gradient: 'from-blue-500 to-cyan-500',
      highlights: ['Live updates', 'Quantity controls', 'Persistent cart', 'Multi-tab sync'],
    },
    {
      icon: <CreditCard size={40} />,
      title: 'Stripe Integration',
      description: 'Secure payment processing with Stripe Checkout. Accept credit cards, debit cards, and digital wallets with full PCI compliance.',
      technical: 'Stripe Checkout + Webhooks + secure tokens',
      gradient: 'from-green-500 to-emerald-500',
      highlights: ['Secure payments', 'Multiple methods', 'Instant checkout', 'Order tracking'],
    },
    {
      icon: <Webhook size={40} />,
      title: 'Webhook Integration',
      description: 'Real-time payment confirmation via Stripe webhooks. Automatic inventory updates and order status changes when payments complete.',
      technical: 'Stripe Webhooks + signature verification + event handling',
      gradient: 'from-teal-500 to-cyan-500',
      highlights: ['Payment confirmation', 'Auto inventory update', 'Event-driven', 'Failure handling'],
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Dark/Light Mode',
      description: 'Seamlessly switch between themes with our custom-built system. Your preference is saved across sessions for the perfect viewing experience.',
      technical: 'React Context API + localStorage persistence',
      gradient: 'from-purple-500 to-pink-500',
      highlights: ['Custom theme engine', 'Instant switching', 'Zero flash', 'Persistent preference'],
    },
    {
      icon: <Shield size={40} />,
      title: 'Secure Shopping',
      description: 'Bank-level security with encrypted transactions, secure payment processing, and comprehensive data protection measures.',
      technical: 'Stripe + NextAuth.js + HTTPS + bcrypt',
      gradient: 'from-red-500 to-pink-500',
      highlights: ['PCI-DSS compliant', '256-bit encryption', 'Fraud detection', 'Secure checkout'],
    },
    {
      icon: <Zap size={40} />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with lazy loading, image optimization, server-side rendering, and intelligent caching for instant page loads.',
      technical: 'Next.js 15 Server Components + CDN + lazy loading',
      gradient: 'from-yellow-500 to-orange-500',
      highlights: ['< 1s load time', 'Route prefetching', 'Image optimization', 'CDN delivery'],
    },
  ];

  const additionalFeatures = [
    {
      icon: <Package size={28} />,
      title: 'Order Management',
      description: 'Complete order history with detailed views, status tracking, shipping information, and downloadable receipts for all purchases.',
    },
    {
      icon: <Clock size={28} />,
      title: 'Order Status Tracking',
      description: 'Real-time order status updates from pending to delivered. Track your shipment and receive notifications at every step.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Address Management',
      description: 'Save multiple shipping addresses for quick checkout. Manage billing and shipping addresses separately.',
    },
    {
      icon: <Search size={28} />,
      title: 'Advanced Search',
      description: 'Powerful search with filters, category browsing, and sorting options to find exactly what you need instantly.',
    },
    {
      icon: <Bell size={28} />,
      title: 'Smart Notifications',
      description: 'Get alerted about order updates, price drops, back-in-stock items, and exclusive deals tailored to you.',
    },
    {
      icon: <Lock size={28} />,
      title: 'Privacy First',
      description: 'Your data is encrypted, never sold, and you have complete control over what information you share.',
    },
    {
      icon: <RefreshCw size={28} />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns with pre-paid labels, instant refunds, and no restocking fees on most items.',
    },
    {
      icon: <Star size={28} />,
      title: 'Review System',
      description: 'Verified purchase reviews, photo uploads, helpful voting, and detailed ratings to make informed decisions.',
    },
    {
      icon: <BarChart3 size={28} />,
      title: 'Price History',
      description: 'See historical pricing data, get the best deal alerts, and know when it\'s the perfect time to buy.',
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'Live Chat Support',
      description: '24/7 customer support via live chat, email, or phone with average response time under 2 minutes.',
    },
    {
      icon: <Truck size={28} />,
      title: 'Fast Shipping',
      description: 'Free shipping over $50, same-day delivery in select areas, and express shipping options available.',
    },
    {
      icon: <CheckCircle size={28} />,
      title: 'Quality Guarantee',
      description: 'All products are verified for authenticity with money-back guarantee if you\'re not satisfied.',
    },
    {
      icon: <Clock size={28} />,
      title: 'Order History',
      description: 'Complete purchase history with receipts, reorder with one click, and track warranty information.',
    },
  ];

  const technicalFeatures = [
    {
      icon: <Code size={24} />,
      title: 'Modern Tech Stack',
      description: 'Built with Next.js 15, React 18, TypeScript, and Tailwind CSS for cutting-edge performance.',
    },
    {
      icon: <Database size={24} />,
      title: 'Scalable Database',
      description: 'PostgreSQL with Prisma ORM ensures data integrity and handles millions of products effortlessly.',
    },
    {
      icon: <Globe size={24} />,
      title: 'SEO Optimized',
      description: 'Every page is optimized for search engines with dynamic metadata and structured data.',
    },
    {
      icon: <Layers size={24} />,
      title: 'API First',
      description: 'RESTful APIs enable integration with mobile apps, third-party services, and future expansions.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Progressive Web App',
      description: 'Install on your home screen, works offline, and provides app-like experience on any device.',
    },
    {
      icon: <Shield size={24} />,
      title: 'GDPR Compliant',
      description: 'Full compliance with privacy regulations including GDPR, CCPA, and data protection laws.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section - More Eye-Catching */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              ✨ 20+ Powerful Features
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Everything You Need for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Perfect Shopping
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Built with modern web technologies to deliver the best online shopping experience. Fast, secure, and delightful.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
              >
                <ShoppingBag size={24} />
                Start Shopping
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500/50 transition border-2 border-white/50 hover:scale-105 text-lg"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features - Enhanced Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              CORE FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Excellence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every feature is designed with your needs in mind, combining cutting-edge technology with exceptional user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-500 font-mono bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
                    {feature.technical}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              MORE FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              And There&apos;s More...
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Packed with additional features to make your shopping experience seamless
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                TECHNICAL EXCELLENCE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Built on Solid Foundation
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Modern architecture ensures reliability, performance, and scalability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-blue-600 dark:border-blue-400 hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-12 border-2 border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Powered by Modern Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM', 'NextAuth.js', 'Stripe API', 'Lucide Icons', 'Vercel', 'Neon DB', 'Git'].map((tech) => (
                <div key={tech} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center font-bold text-white hover:bg-white/30 transition transform hover:scale-105">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              Join thousands of satisfied customers and discover why Amir&apos;s Shop is the best choice for online shopping
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
              >
                <ShoppingBag size={24} />
                Browse Products
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-5 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition border-2 border-gray-300 dark:border-gray-600 hover:scale-105 text-lg"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


