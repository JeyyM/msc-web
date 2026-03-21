import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Search, MoreVertical, Edit2, Trash2, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockMembers } from '../../data/mockData';
import { Person } from '../../types';

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [members, setMembers] = useState<Person[]>(mockMembers);

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || member.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Members & Officers</h2>
          <p className="text-gray-500 mt-1">Manage your organization's team members.</p>
        </div>
        <Link
          to="/admin/members/new"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#00A4EF] text-white rounded-xl font-medium hover:bg-[#0082be] transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Member
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent sm:text-sm transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-200 focus:outline-none focus:ring-[#00A4EF] focus:border-[#00A4EF] sm:text-sm rounded-xl bg-gray-50"
            >
              <option value="all">All Categories</option>
              <option value="Executive Board">Executive Board</option>
              <option value="Committee Head">Committee Head</option>
              <option value="Member">Members</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role & Committee
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={member.imageUrl} alt="" referrerPolicy="no-referrer" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{member.fullName}</div>
                        <div className="text-sm text-gray-500 capitalize">{member.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{member.role}</div>
                    <div className="text-sm text-gray-500">{member.committee || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      member.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {member.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-3">
                      <Link to={`/admin/members/${member.id}/edit`} className="text-indigo-600 hover:text-indigo-900">
                        <Edit2 className="w-4 h-4" />
                      </Link>
                      <button onClick={() => handleDelete(member.id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredMembers.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No members found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
