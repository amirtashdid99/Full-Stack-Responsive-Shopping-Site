'use client';

import { Mail, Github, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Contact Options (shown when open) */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-blue-500 p-4 mb-2 animate-slide-up">
          <div className="space-y-3 min-w-[200px]">
            <a
              href="mailto:amirtashdid99@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition group"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Mail className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Email</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Send a message</div>
              </div>
            </a>

            <a
              href="https://t.me/R00T99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition group"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <MessageCircle className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Telegram</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">@R00T99</div>
              </div>
            </a>

            <a
              href="https://github.com/amirtashdid99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition group"
            >
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <Github className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white text-sm">GitHub</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">View projects</div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Main Button with Message Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-2xl flex items-center justify-center text-white font-bold text-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-slow"
        aria-label="Contact Amir"
      >
        {isOpen ? '✕' : <MessageCircle size={32} />}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none">
          Contact Amir
        </div>
      )}
    </div>
  );
}
