'use client';

import Link from 'next/link';
import { Search, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import UserMenu from './UserMenu';
import CartIcon from './CartIcon';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
              Amir&apos;s Shop
            </span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="text-gray-700 dark:text-gray-300" size={24} />
              ) : (
                <Sun className="text-yellow-500" size={24} />
              )}
            </button>

            <UserMenu />
            
            <CartIcon />
          </div>
        </div>

        {/* Category navigation */}
        <nav className="flex items-center space-x-8 h-12 text-sm border-t dark:border-gray-800 overflow-x-auto">
          <Link href="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition whitespace-nowrap">
            All Products
          </Link>
          <Link href="/products?category=ELECTRONICS" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
            Electronics
          </Link>
          <Link href="/products?category=CLOTHING" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
            Clothing
          </Link>
          <Link href="/products?category=HOME_GARDEN" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
            Home & Garden
          </Link>
          <Link href="/products?category=SPORTS_OUTDOORS" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
            Sports
          </Link>
          <Link href="/products?category=BEAUTY" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition whitespace-nowrap">
            Beauty
          </Link>
          <span className="text-gray-300 dark:text-gray-700">|</span>
          <Link 
            href="/features" 
            className="relative px-3 py-1.5 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            ✨ Features
          </Link>
          <Link 
            href="/skills" 
            className="relative px-3 py-1.5 text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            💼 Skills
          </Link>
          <Link 
            href="/about" 
            className="relative px-3 py-1.5 text-white bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            👨‍💻 About
          </Link>
        </nav>
      </div>
    </header>
  );
}
