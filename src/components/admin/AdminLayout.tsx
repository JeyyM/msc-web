import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Members', href: '/admin/members', icon: Users },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Publications', href: '/admin/publications', icon: FileText },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleLogout = () => {
    // Simulate logout
    navigate('/admin/login');
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 flex items-center justify-between">
        <Link to="/admin" className="flex items-center gap-3">
          <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
            <div className="bg-[#F25022] rounded-tl-sm"></div>
            <div className="bg-[#7FBA00] rounded-tr-sm"></div>
            <div className="bg-[#00A4EF] rounded-bl-sm"></div>
            <div className="bg-[#FFB900] rounded-br-sm"></div>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-gray-900">
            Admin Portal
          </span>
        </Link>
        <button 
          className="lg:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || (item.href !== '/admin' && location.pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                isActive 
                  ? 'bg-[#00A4EF]/10 text-[#00A4EF]' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-[#00A4EF]' : 'text-gray-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-100 z-50 flex flex-col lg:hidden"
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 z-30">
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-20">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="font-display text-xl font-bold text-gray-900 hidden sm:block">
              {navigation.find(n => location.pathname === n.href || (n.href !== '/admin' && location.pathname.startsWith(`${n.href}/`)))?.name || 'Dashboard'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

