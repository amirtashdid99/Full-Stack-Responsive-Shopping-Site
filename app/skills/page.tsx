import Link from 'next/link';
import { 
  Code, Database, Palette, Shield, Zap, Globe, Smartphone, Award,
  Star, TrendingUp, CheckCircle, Rocket, Target, Briefcase, Brain, 
  Network, Sparkles, GitBranch
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills Showcase | Amir\'s Shop',
  description: 'Technical skills and technologies demonstrated in this full-stack e-commerce platform, plus AI/ML expertise.',
};

export default function SkillsPage() {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: <Brain size={40} />,
      color: 'from-indigo-500 to-purple-500',
      bgPattern: 'bg-indigo-50 dark:bg-indigo-900/10',
      skills: [
        {
          name: 'Deep Learning',
          level: 'Advanced',
          percentage: 90,
          description: 'Neural Networks (CNN, RNN, LSTM), BERT embeddings, Transfer Learning, Model optimization',
          examples: ['Thesis: Modeling Virus-Host Interactions Using BERT', 'CNN for image classification', 'LSTM for sequence prediction'],
        },
        {
          name: 'Reinforcement Learning',
          level: 'Advanced',
          percentage: 85,
          description: 'Q-learning, DQN, Policy Gradients (VPG, TRPO, PPO), DDPG, TD3, Soft Actor-Critic (SAC)',
          examples: ['Implemented multiple RL algorithms', 'Policy optimization techniques', 'Actor-Critic methods'],
        },
        {
          name: 'Natural Language Processing',
          level: 'Advanced',
          percentage: 88,
          description: 'BERT, Transformers, Text embeddings, Sequence modeling, Language understanding',
          examples: ['BERT for biological data analysis', 'Deep embeddings for protein interactions', 'NLP pipelines'],
        },
        {
          name: 'Machine Learning',
          level: 'Advanced',
          percentage: 92,
          description: 'Scikit-learn, XGBoost, Random Forest, Gradient Descent, Feature Engineering, Model Evaluation',
          examples: ['Stanford ML course (Andrew Ng)', 'Classification & regression models', 'Hyperparameter tuning'],
        },
      ],
    },
    {
      category: 'Data Science & Analytics',
      icon: <Network size={40} />,
      color: 'from-emerald-500 to-teal-500',
      bgPattern: 'bg-emerald-50 dark:bg-emerald-900/10',
      skills: [
        {
          name: 'Python Data Stack',
          level: 'Advanced',
          percentage: 95,
          description: 'Pandas, NumPy, Scikit-learn, Data preprocessing, Feature engineering, Statistical analysis',
          examples: ['Large-scale data analysis', 'Feature extraction pipelines', 'Statistical modeling'],
        },
        {
          name: 'Computational Data Mining',
          level: 'Advanced',
          percentage: 85,
          description: 'Clustering (K-Means, DBSCAN), Dimensionality Reduction (PCA, t-SNE), Anomaly Detection, Apriori',
          examples: ['Customer segmentation', 'Data visualization', 'Pattern discovery'],
        },
        {
          name: 'Bioinformatics',
          level: 'Intermediate',
          percentage: 80,
          description: 'Computational biology, Biological data analysis, Sequence analysis, Protein interactions',
          examples: ['Master\'s specialization', 'Virus-host interaction modeling', 'Biological data processing'],
        },
        {
          name: 'Data Visualization',
          level: 'Advanced',
          percentage: 88,
          description: 'Matplotlib, Seaborn, Interactive dashboards, Statistical plots, Data storytelling',
          examples: ['Research visualizations', 'Model performance plots', 'Exploratory data analysis'],
        },
      ],
    },
    {
      category: 'Frontend Development',
      icon: <Code size={40} />,
      color: 'from-blue-500 to-cyan-500',
      bgPattern: 'bg-blue-50 dark:bg-blue-900/10',
      skills: [
        {
          name: 'Next.js 15 (App Router)',
          level: 'Advanced',
          percentage: 95,
          description: 'Server Components, Route Handlers, Dynamic Routes, Metadata API, Error Boundaries, Loading States',
          examples: ['Dynamic product pages with generateMetadata', 'Server-side data fetching', 'Error boundaries at multiple levels'],
        },
        {
          name: 'React 18',
          level: 'Advanced',
          percentage: 95,
          description: 'Hooks (useState, useEffect, useContext), Context API, Suspense, Custom Hooks',
          examples: ['Custom theme context with localStorage', 'Suspense boundaries for lazy loading', 'Client/Server Component patterns'],
        },
        {
          name: 'TypeScript',
          level: 'Advanced',
          percentage: 92,
          description: 'Strict mode, Type inference, Interfaces, Generics, Type guards',
          examples: ['Full type safety across the codebase', 'Prisma-generated types', 'Custom type definitions'],
        },
        {
          name: 'Tailwind CSS',
          level: 'Advanced',
          percentage: 95,
          description: 'Custom configuration, Dark mode, Animations, Responsive design, Custom components',
          examples: ['Class-based dark mode strategy', 'Custom CSS variables', 'Responsive grid layouts'],
        },
        {
          name: 'State Management',
          level: 'Advanced',
          percentage: 90,
          description: 'Zustand, Context API, Local storage persistence, Real-time updates',
          examples: ['Shopping cart with Zustand', 'Persistent cart state', 'Multi-tab synchronization'],
        },
      ],
    },
    {
      category: 'Backend Development',
      icon: <Database size={40} />,
      color: 'from-purple-500 to-pink-500',
      bgPattern: 'bg-purple-50 dark:bg-purple-900/10',
      skills: [
        {
          name: 'PostgreSQL',
          level: 'Advanced',
          percentage: 85,
          description: 'Relational database design, Complex queries, Indexing, Relationships, Migrations, Performance optimization',
          examples: ['8-model normalized schema', 'One-to-many and many-to-many relationships', 'Optimized queries with indexes'],
        },
        {
          name: 'Prisma ORM',
          level: 'Advanced',
          percentage: 90,
          description: 'Schema design, Migrations, Type-safe queries, Relations, Connection pooling, Transaction handling',
          examples: ['Complex queries with includes', 'Database seeding', 'Migration management', 'Type-safe CRUD operations'],
        },
        {
          name: 'API Development',
          level: 'Advanced',
          percentage: 88,
          description: 'RESTful APIs, Route handlers, Data validation, Error handling, Status codes, Webhook endpoints',
          examples: ['Authentication API routes', 'Checkout API with Stripe', 'Webhook handlers', 'Address management'],
        },
        {
          name: 'Authentication & Security',
          level: 'Advanced',
          percentage: 90,
          description: 'NextAuth.js v5, Session management, Password hashing (bcrypt), JWT tokens, Protected routes',
          examples: ['Complete auth system with email/password', 'Session-based authorization', 'Middleware route protection'],
        },
        {
          name: 'Payment Integration',
          level: 'Advanced',
          percentage: 92,
          description: 'Stripe API, Checkout sessions, Webhooks, Signature verification, Payment processing, Order creation',
          examples: ['Stripe Checkout integration', 'Webhook event handling', 'Payment confirmation flow', 'Order tracking'],
        },
        {
          name: 'Event-Driven Architecture',
          level: 'Advanced',
          percentage: 88,
          description: 'Webhooks, Event handlers, Signature verification, Idempotency, Real-time updates',
          examples: ['Stripe webhook integration', 'Payment event handling', 'Auto inventory updates', 'Order status tracking'],
        },
        {
          name: 'Admin Dashboard Development',
          level: 'Advanced',
          percentage: 90,
          description: 'Data tables, Statistics, Charts, CRUD operations, User management, Role-based access',
          examples: ['Complete admin panel', 'Order management dashboard', 'Coupon system', 'User analytics'],
        },
      ],
    },
    {
      category: 'UI/UX Design',
      icon: <Palette size={40} />,
      color: 'from-green-500 to-teal-500',
      bgPattern: 'bg-green-50 dark:bg-green-900/10',
      skills: [
        {
          name: 'Gamification & Animations',
          level: 'Advanced',
          percentage: 92,
          description: 'Interactive elements, SVG animations, Spinning wheels, Engagement features',
          examples: ['Lucky wheel with prize distribution', 'Smooth rotation animations', 'Interactive reward systems'],
        },
        {
          name: 'Responsive Design',
          level: 'Advanced',
          percentage: 95,
          description: 'Mobile-first approach, Breakpoints, Fluid layouts, Touch-friendly interfaces',
          examples: ['Responsive product grids', 'Mobile navigation', 'Adaptive images'],
        },
        {
          name: 'Dark Mode',
          level: 'Advanced',
          percentage: 100,
          description: 'Theme switching, Color schemes, Persistence, Smooth transitions',
          examples: ['Custom theme provider', 'localStorage persistence', 'Optimized for both themes'],
        },
        {
          name: 'Loading States',
          level: 'Advanced',
          percentage: 90,
          description: 'Skeleton loaders, Progress indicators, Suspense boundaries',
          examples: ['Page-level loading states', 'Component-level skeletons', 'Lazy loading'],
        },
        {
          name: 'Micro-interactions',
          level: 'Advanced',
          percentage: 95,
          description: 'Hover effects, Transitions, Animations, Scale transforms',
          examples: ['Card hover animations', 'Button transitions', 'Image zoom effects'],
        },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: <Zap size={40} />,
      color: 'from-orange-500 to-red-500',
      bgPattern: 'bg-orange-50 dark:bg-orange-900/10',
      skills: [
        {
          name: 'Git & Version Control',
          level: 'Advanced',
          percentage: 90,
          description: 'Branching, Commits, Pull requests, Merge conflicts, Best practices',
          examples: ['Semantic commit messages', 'Feature branch workflow', 'Git history management'],
        },
        {
          name: 'Deployment',
          level: 'Intermediate',
          percentage: 85,
          description: 'Vercel deployment, Environment variables, Production optimization',
          examples: ['Optimized for Vercel', 'Environment-based configuration', 'Production builds'],
        },
        {
          name: 'Performance Optimization',
          level: 'Advanced',
          percentage: 95,
          description: 'Lazy loading, Code splitting, Image optimization, Caching',
          examples: ['Image lazy loading', 'Route prefetching', 'Server Component optimization'],
        },
      ],
    },
  ];

  const softSkills = [
    {
      icon: <Globe size={24} />,
      title: 'Problem Solving',
      description: 'Debugging complex issues, finding efficient solutions, troubleshooting deployment problems',
    },
    {
      icon: <Award size={24} />,
      title: 'Best Practices',
      description: 'Following industry standards, writing clean code, implementing design patterns',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'User-Centric',
      description: 'Focusing on user experience, accessibility, responsive design across devices',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security Aware',
      description: 'Implementing secure authentication, protecting user data, following security best practices',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Hero Section - More Vibrant */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6 animate-bounce">
              <Star size={20} className="text-yellow-300" />
              <span>Full-Stack Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Skills
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Demonstrated Here
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
              Every feature in this platform showcases real-world application of modern web development skills
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition">
                💻 Frontend
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition">
                🗄️ Backend
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition">
                🎨 UI/UX
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition">
                ⚡ DevOps
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories - Enhanced with Progress Bars */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
              TECHNICAL SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Full-Stack Development
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proficiency across the entire tech stack, from database to deployment
            </p>
          </div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {skillCategories.map((category, index) => (
              <div key={index} className={`${category.bgPattern} rounded-3xl p-8 md:p-12`}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`bg-gradient-to-br ${category.color} p-5 rounded-2xl text-white shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.skills.length} Core Skills
                    </p>
                  </div>
                </div>

                {/* Skills Grid with Progress Bars */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                    >
                      {/* Gradient hover effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Skill Header */}
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                            {skill.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${
                            skill.level === 'Advanced' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          }`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Proficiency</span>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.percentage}%</span>
                          </div>
                          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                          {skill.description}
                        </p>

                        {/* Examples Section */}
                        <div className="border-t-2 border-gray-200 dark:border-gray-700 pt-4">
                          <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                            <CheckCircle size={16} className="text-green-500" />
                            Implemented in this project:
                          </p>
                          <ul className="space-y-2">
                            {skill.examples.map((example, exIndex) => (
                              <li key={exIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start group/item">
                                <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">▸</span>
                                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills - More Eye-Catching */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                PROFESSIONAL SKILLS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Beyond the Code
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Soft skills that complement technical expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements - NEW SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-bold mb-4">
                ACHIEVEMENTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Project Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <TrendingUp size={28} />, title: '95+ Lighthouse Score', desc: 'Exceptional performance metrics', color: 'from-green-500 to-emerald-500' },
                { icon: <CheckCircle size={28} />, title: '30+ Features', desc: 'Comprehensive functionality', color: 'from-blue-500 to-cyan-500' },
                { icon: <Code size={28} />, title: '10,000+ Lines', desc: 'Production-ready codebase', color: 'from-purple-500 to-pink-500' },
                { icon: <Shield size={28} />, title: 'Bank-Level Security', desc: 'Secure authentication & payments', color: 'from-orange-500 to-red-500' },
                { icon: <Rocket size={28} />, title: '< 1s Load Time', desc: 'Lightning-fast performance', color: 'from-yellow-500 to-orange-500' },
                { icon: <Target size={28} />, title: '100% SEO Score', desc: 'Fully optimized for search', color: 'from-indigo-500 to-purple-500' },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border-l-4 border-t-4 border-blue-600 dark:border-blue-400 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Summary - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Complete Tech Stack
                </h2>
                <p className="text-blue-100 text-lg">
                  Modern technologies powering this platform
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: 'Next.js 15', icon: '⚡' },
                  { name: 'React 18', icon: '⚛️' },
                  { name: 'TypeScript', icon: '📘' },
                  { name: 'Tailwind CSS', icon: '🎨' },
                  { name: 'PostgreSQL', icon: '🐘' },
                  { name: 'Prisma ORM', icon: '🔺' },
                  { name: 'NextAuth.js', icon: '🔐' },
                  { name: 'Stripe API', icon: '💳' },
                  { name: 'Lucide Icons', icon: '🎭' },
                  { name: 'Git', icon: '📚' },
                  { name: 'Vercel', icon: '▲' },
                  { name: 'Neon DB', icon: '💾' },
                ].map((tech) => (
                  <div 
                    key={tech.name} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-sm">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-bold mb-8">
              <Briefcase size={20} />
              <span>Available for Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
              I&apos;m passionate about creating high-quality web applications. Let&apos;s discuss your next project!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
              >
                <Briefcase size={24} />
                View Portfolio
              </Link>
              <a
                href="mailto:amirtashdid99@gmail.com"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-10 py-5 rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition border-2 border-gray-300 dark:border-gray-600 hover:scale-105 text-lg"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Check out the features or explore the live platform
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/features"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
            >
              View Features
            </Link>
            <Link
              href="/products"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition border-2 border-gray-300 dark:border-gray-600"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
