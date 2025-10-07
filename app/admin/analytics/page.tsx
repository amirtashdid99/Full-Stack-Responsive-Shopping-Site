import { BarChart3 } from "lucide-react";

export const metadata = {
  title: "Analytics | Admin",
  description: "View platform analytics",
};

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View platform performance and insights
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg p-12 text-center shadow-md">
        <BarChart3 className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Analytics Coming Soon
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Advanced analytics and reporting features will be available here
        </p>
      </div>
    </div>
  );
}
