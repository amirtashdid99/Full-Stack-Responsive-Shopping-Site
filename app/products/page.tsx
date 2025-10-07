import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { Category } from '@prisma/client';
import { Star } from 'lucide-react';

interface PageProps {
  searchParams: Promise<{
    category?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const { category } = resolvedParams;

  // Fetch products with optional category filter
  const products = await prisma.product.findMany({
    where: category ? { category: category as Category } : {},
    orderBy: { createdAt: 'desc' },
  });

  const categories = [
    { label: 'All Products', value: '' },
    { label: 'Electronics', value: 'ELECTRONICS' },
    { label: 'Clothing', value: 'CLOTHING' },
    { label: 'Home & Garden', value: 'HOME_GARDEN' },
    { label: 'Sports & Outdoors', value: 'SPORTS_OUTDOORS' },
    { label: 'Books', value: 'BOOKS' },
    { label: 'Toys', value: 'TOYS' },
    { label: 'Beauty', value: 'BEAUTY' },
    { label: 'Jewelry', value: 'JEWELRY' },
  ];

  const currentCategory = categories.find((cat) => cat.value === category);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {currentCategory ? currentCategory.label : 'All Products'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {products.length} {products.length === 1 ? 'product' : 'products'} available
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              href={cat.value ? `/products?category=${cat.value}` : '/products'}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                (category === cat.value) || (!category && !cat.value)
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No products found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name} - Premium ${product.category.toLowerCase().replace('_', ' and ')} product`}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-300"
                      unoptimized
                    />
                    {product.comparePrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                        -{Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
                      </div>
                    )}
                    {product.inventory <= 5 && product.inventory > 0 && (
                      <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Only {product.inventory} left!
                      </div>
                    )}
                    {product.inventory === 0 && (
                      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white text-lg font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-blue-600 dark:text-blue-400 uppercase mb-1 font-semibold tracking-wide">{product.category.replace('_', ' & ')}</p>
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
                        <Star size={14} fill="currentColor" />
                        <span className="ml-1 text-gray-600 dark:text-gray-400 text-xs">4.5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
