import { prisma } from "@/lib/prisma";
import { Tag, Plus, Calendar, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Coupons Management | Admin",
  description: "Manage discount coupons",
};

export default async function AdminCouponsPage() {
  const coupons = await prisma.coupon.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const getCouponTypeColor = (type: string) => {
    switch (type) {
      case "PERCENTAGE":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "FIXED_AMOUNT":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "FREE_SHIPPING":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Coupons Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create and manage discount coupons
          </p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
          <Plus className="h-5 w-5" />
          Create Coupon
        </button>
      </div>

      {coupons.length === 0 ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg p-12 text-center shadow-md">
          <Tag className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No coupons yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first discount coupon
          </p>
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold">
            <Plus className="h-5 w-5" />
            Create Coupon
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coupons.map((coupon) => (
            <div
              key={coupon.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
                <div className="flex items-center justify-between mb-2">
                  <Tag className="h-6 w-6 text-white" />
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      coupon.isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {coupon.isActive ? "Active" : "Inactive"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-wider">
                  {coupon.code}
                </h3>
              </div>
              
              <div className="p-4">
                <div className="mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCouponTypeColor(coupon.type)}`}>
                    {coupon.type.replace("_", " ")}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Discount Value:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {coupon.type === "PERCENTAGE"
                        ? `${coupon.value}%`
                        : `$${coupon.value}`}
                    </span>
                  </div>

                  {coupon.minPurchase > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Min. Purchase:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ${coupon.minPurchase.toFixed(2)}
                      </span>
                    </div>
                  )}

                  {coupon.maxDiscount && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Max Discount:
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ${coupon.maxDiscount.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Used:
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {coupon.usageCount}
                      {coupon.usageLimit && ` / ${coupon.usageLimit}`}
                    </span>
                  </div>

                  {coupon.expiresAt && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Expires: {new Date(coupon.expiresAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-medium">
                    Edit
                  </button>
                  <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
