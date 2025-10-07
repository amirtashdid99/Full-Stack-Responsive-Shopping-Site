'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function ProductDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Product detail error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
          <AlertCircle size={32} className="text-red-600 dark:text-red-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Failed to Load Product
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We couldn&apos;t load this product. It may not exist or there was a connection issue.
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="flex-1 bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Try Again
          </button>
          
          <Link
            href="/products"
            className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition text-center flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
