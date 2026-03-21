import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { mockMembers } from '../../data/mockData';
import { Person } from '../../types';

export default function MemberForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<Partial<Person>>({
    fullName: '',
    role: '',
    committee: '',
    category: 'Member',
    imageUrl: '',
    bio: '',
    displayOrder: 0,
    isActive: true,
  });

  useEffect(() => {
    if (isEditing) {
      const member = mockMembers.find(m => m.id === id);
      if (member) {
        setFormData(member);
      } else {
        navigate('/admin/members');
      }
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    console.log('Saving member:', formData);
    navigate('/admin/members');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/admin/members')}
          className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Member' : 'Add New Member'}
          </h2>
          <p className="text-gray-500 mt-1">
            {isEditing ? 'Update member details below.' : 'Fill in the information for the new member.'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 sm:p-8 space-y-8">
          {/* Image Upload Section */}
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden shrink-0 relative group cursor-pointer">
              {formData.imageUrl ? (
                <>
                  <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-medium">Change</span>
                  </div>
                </>
              ) : (
                <div className="text-center p-4">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                  <span className="text-xs text-gray-500 font-medium">Upload</span>
                </div>
              )}
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-bold text-gray-700 mb-2">Profile Image URL</label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl || ''}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                required
              />
              <p className="text-xs text-gray-500 mt-2">Provide a direct link to the member's profile picture.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Role / Position</label>
              <input
                type="text"
                name="role"
                value={formData.role || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category || 'Member'}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              >
                <option value="Executive Board">Executive Board</option>
                <option value="Committee Head">Committee Head</option>
                <option value="Member">Member</option>
                <option value="Alumni">Alumni</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Committee (Optional)</label>
              <input
                type="text"
                name="committee"
                value={formData.committee || ''}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Bio (Optional)</label>
            <textarea
              name="bio"
              value={formData.bio || ''}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
            />
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive || false}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${formData.isActive ? 'bg-[#7FBA00]' : 'bg-gray-300'}`}>
                  <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.isActive ? 'translate-x-5' : 'translate-x-0'}`} />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">Active Member</span>
            </label>

            <div className="flex-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">Display Order</label>
              <input
                type="number"
                name="displayOrder"
                value={formData.displayOrder || 0}
                onChange={handleChange}
                className="w-32 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00A4EF] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate('/admin/members')}
            className="px-6 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl font-medium bg-[#00A4EF] text-white hover:bg-[#0082be] transition-colors flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Add Member'}
          </button>
        </div>
      </form>
    </div>
  );
}
