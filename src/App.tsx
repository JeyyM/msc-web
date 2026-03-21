/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Officers from './pages/Officers';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminMembers from './pages/admin/Members';
import AdminMemberForm from './pages/admin/MemberForm';
import AdminEvents from './pages/admin/Events';
import AdminEventForm from './pages/admin/EventForm';
import AdminPublications from './pages/admin/Publications';
import AdminSettings from './pages/admin/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/events" element={<PublicLayout><Events /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><Projects /></PublicLayout>} />
        <Route path="/officers" element={<PublicLayout><Officers /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="members" element={<AdminMembers />} />
          <Route path="members/new" element={<AdminMemberForm />} />
          <Route path="members/:id/edit" element={<AdminMemberForm />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="events/new" element={<AdminEventForm />} />
          <Route path="events/:id/edit" element={<AdminEventForm />} />
          <Route path="publications" element={<AdminPublications />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}
