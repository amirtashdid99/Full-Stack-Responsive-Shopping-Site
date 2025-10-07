import Link from 'next/link';
import { Mail, Github, MessageCircle, Code2, Rocket, Target, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Amir\'s Shop',
  description: 'Learn about Amir\'s Shop - a modern e-commerce platform built to demonstrate full-stack development skills and offer premium shopping experience.',
};

export default function AboutPage() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development with modern technologies like Next.js, React, TypeScript, and PostgreSQL.',
      details: ['Custom web applications', 'E-commerce platforms', 'SaaS products', 'API development'],
    },
    {
      icon: <Rocket size={32} />,
      title: 'Performance Optimization',
      description: 'Speed up your website with lazy loading, code splitting, image optimization, and best practices.',
      details: ['Lighthouse optimization', 'Core Web Vitals', 'Load time reduction', 'SEO improvements'],
    },
    {
      icon: <Target size={32} />,
      title: 'UI/UX Design Implementation',
      description: 'Transform designs into pixel-perfect, responsive, and accessible user interfaces.',
      details: ['Responsive design', 'Dark mode', 'Animations', 'Accessibility (WCAG)'],
    },
    {
      icon: <Users size={32} />,
      title: 'Technical Consulting',
      description: 'Get expert advice on technology stack selection, architecture decisions, and best practices.',
      details: ['Tech stack selection', 'Code reviews', 'Performance audits', 'Security assessments'],
    },
  ];

  const projectHighlights = [
    {
      metric: '11',
      label: 'Database Models',
      description: 'User, Order, Coupon & more',
    },
    {
      metric: '7000+',
      label: 'Lines of Code',
      description: 'Well-structured & documented',
    },
    {
      metric: '7/7',
      label: 'Phases Complete',
      description: '100% Production Ready',
    },
    {
      metric: '100%',
      label: 'TypeScript',
      description: 'Type-safe codebase',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              About Amir&apos;s Shop
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              A modern, full-stack e-commerce platform built to showcase professional web development skills and deliver exceptional shopping experiences.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:amirtashdid99@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 transition border-2 border-white hover:scale-105"
              >
                View Skills
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              The Project
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Why This Platform?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Amir&apos;s Shop was created as a comprehensive portfolio project to demonstrate full-stack web development capabilities. Unlike simple tutorial projects, this platform incorporates real-world features, modern best practices, and production-ready code.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Every feature - from dark mode toggle to SEO optimization - was built from scratch without relying on pre-built templates or libraries. This approach showcases deep understanding of core technologies and the ability to solve complex problems independently.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  What Makes It Unique?
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Complete Authentication:</strong> Built secure user system with NextAuth.js v5, bcrypt hashing, and JWT sessions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Real-Time Shopping Cart:</strong> Zustand state management with persistent storage and live quantity controls.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Stripe Payment Integration:</strong> Secure checkout with Stripe API, webhook handlers, and payment confirmation flow.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Webhook-Driven Orders:</strong> Event-driven architecture with Stripe webhooks for automatic order processing and inventory updates.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Order Management:</strong> Complete order tracking system with detailed views, status updates, and shipping information.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Lucky Wheel Gamification:</strong> Interactive spinning wheel for discount codes with beautiful animations and theme support.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Complete Coupon System:</strong> Percentage, fixed amount, and free shipping coupons with validation and usage tracking.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Admin Dashboard:</strong> Comprehensive management panel for products, orders, users, coupons, and analytics.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Custom Theme System:</strong> Built complete dark/light mode using React Context with localStorage persistence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Professional UX:</strong> Skeleton loaders, error boundaries, loading states, and smooth animations throughout.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>SEO Excellence:</strong> Dynamic metadata, JSON-LD structured data, and Open Graph tags for every product.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Modern Architecture:</strong> Next.js 15 App Router with Server Components for optimal performance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                    <span><strong>Type Safety:</strong> 100% TypeScript with strict mode, ensuring maintainable and bug-free code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Metrics */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {projectHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center border border-blue-100 dark:border-gray-700"
              >
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {highlight.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Services Offered
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Leveraging the skills demonstrated in this project to help bring your ideas to life
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Philosophy */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Development Philosophy
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Building with modern technologies, following best practices, and always prioritizing user experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">User-Centric</h3>
                <p className="text-blue-100 text-sm">
                  Every feature is designed with the end user in mind
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Performance First</h3>
                <p className="text-blue-100 text-sm">
                  Optimized for speed without compromising functionality
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Security Focused</h3>
                <p className="text-blue-100 text-sm">
                  Following security best practices at every level
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on a project or need a skilled full-stack developer? Let&apos;s connect!
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <a
                href="mailto:amirtashdid99@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://t.me/R00T99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Telegram
              </a>
              <a
                href="https://github.com/amirtashdid99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition shadow-lg hover:shadow-2xl transform hover:scale-105"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-md mx-auto">
              <p className="text-sm text-blue-100 mb-2">📧 amirtashdid99@gmail.com</p>
              <p className="text-sm text-blue-100 mb-2">💬 Telegram: @R00T99</p>
              <p className="text-sm text-blue-100">🔗 github.com/amirtashdid99</p>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


