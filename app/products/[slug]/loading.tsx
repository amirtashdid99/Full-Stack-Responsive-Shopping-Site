export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Skeleton */}
        <div className="mb-6 flex gap-2 animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image Skeleton */}
          <div className="space-y-4 animate-pulse">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
          </div>

          {/* Product Info Skeleton */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg space-y-6 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-64"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-40"></div>
            <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>

        {/* Reviews Skeleton */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg animate-pulse">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mb-6"></div>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3 pb-6 border-b border-gray-200 dark:border-gray-700">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
