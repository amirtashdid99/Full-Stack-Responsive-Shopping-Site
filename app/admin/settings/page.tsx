import { Settings as SettingsIcon } from "lucide-react";

export const metadata = {
  title: "Settings | Admin",
  description: "Configure platform settings",
};

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Configure platform settings and preferences
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg p-12 text-center shadow-md">
        <SettingsIcon className="h-16 w-16 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Settings Coming Soon
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Platform configuration and settings will be available here
        </p>
      </div>
    </div>
  );
}
