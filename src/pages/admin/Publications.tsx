import React from 'react';
import { Plus, FileText, Search, Edit2, Trash2 } from 'lucide-react';

export default function Publications() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Publications</h2>
          <p className="text-gray-500 mt-1">Manage articles, newsletters, and announcements.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FFB900] text-gray-900 rounded-xl font-medium hover:bg-[#e6a600] transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          New Publication
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search publications..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FFB900] focus:border-transparent sm:text-sm transition-colors"
            />
          </div>
        </div>

        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No publications yet</h3>
          <p className="text-gray-500">Get started by creating your first publication.</p>
          <button className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors">
            <Plus className="w-4 h-4" />
            Create Publication
          </button>
        </div>
      </div>
    </div>
  );
}
