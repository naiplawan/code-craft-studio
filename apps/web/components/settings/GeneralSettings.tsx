/**
 * General Settings Component
 * Project general settings tab
 */
import React, { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

interface GeneralSettingsProps {
  projectId: string;
  projectName: string;
}

export function GeneralSettings({ projectId, projectName }: GeneralSettingsProps) {
  const [name, setName] = useState(projectName);
  const [description, setDescription] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // TODO: Implement save logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          General Settings
        </h3>
        
        <div className="space-y-4">
          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Project ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project ID
            </label>
            <input
              type="text"
              value={projectId}
              disabled
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter project description..."
            />
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Theme
            </label>
            <div className="flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center gap-3">
                <div className="text-gray-600 dark:text-gray-300">
                  {theme === 'dark' ? <FaMoon size={18} /> : <FaSun size={18} />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {theme === 'dark' ? 'Easier on the eyes in low light' : 'Better visibility in bright light'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  theme === 'dark' ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                role="switch"
                aria-checked={theme === 'dark'}
              >
                <span className="sr-only">Toggle dark mode</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}