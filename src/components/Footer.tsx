import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
                <div className="bg-[#F25022]"></div>
                <div className="bg-[#7FBA00]"></div>
                <div className="bg-[#00A4EF]"></div>
                <div className="bg-[#FFB900]"></div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                DLSU <span className="text-[#00A4EF]">MSC</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Empowering students through technology, innovation, and community. 
              We are the official Microsoft Student Clubs chapter at De La Salle University.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-gray-300 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white text-sm transition-colors">Events</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</Link></li>
              <li><Link to="/officers" className="text-gray-400 hover:text-white text-sm transition-colors">Officers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider uppercase text-gray-300 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-[#00A4EF] shrink-0" />
                <span>msc@dlsu.edu.ph</span>
              </li>
              <li className="text-gray-400 text-sm leading-relaxed">
                De La Salle University<br />
                2401 Taft Ave, Malate<br />
                Manila, 1004 Metro Manila
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DLSU Microsoft Student Clubs. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

