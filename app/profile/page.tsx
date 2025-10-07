import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { User, Mail, Calendar } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          My Profile
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
              {session.user?.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {session.user?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {(session.user as any)?.role === "ADMIN" ? "Administrator" : "Customer"}
              </p>
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Mail className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium">{session.user?.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <User className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Account Type</p>
                <p className="font-medium">
                  {(session.user as any)?.role === "ADMIN" ? "Admin Account" : "Customer Account"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
              <Calendar className="h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                <p className="font-medium">
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/orders"
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <h4 className="font-medium text-gray-900 dark:text-white">Order History</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  View your past orders
                </p>
              </Link>
              {(session.user as any)?.role === "ADMIN" && (
                <a
                  href="/admin"
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Admin Dashboard
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Manage your store
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
